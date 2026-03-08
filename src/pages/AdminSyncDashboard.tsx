import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAdminCheck } from '@/hooks/useAdminCheck';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { RefreshCw, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

interface Submission {
  id: string;
  form_id: string;
  zoho_sync_status: string | null;
  zoho_lead_id: string | null;
  sync_error: string | null;
  created_at: string;
  zoho_synced_at: string | null;
  submission_data: Record<string, unknown>;
}

const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; icon: typeof Clock }> = {
  pending: { label: 'Pending', variant: 'outline', icon: Clock },
  synced: { label: 'Synced', variant: 'default', icon: CheckCircle },
  failed: { label: 'Failed', variant: 'destructive', icon: XCircle },
};

const AdminSyncDashboard = () => {
  const { isAdmin, loading: adminLoading } = useAdminCheck();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [retrying, setRetrying] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending' | 'synced' | 'failed'>('all');

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    let query = supabase
      .from('zoho_form_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);

    if (filter !== 'all') {
      query = query.eq('zoho_sync_status', filter);
    }

    const { data, error } = await query;
    if (error) {
      toast.error('Failed to fetch submissions');
    } else {
      setSubmissions((data as unknown as Submission[]) || []);
    }
    setLoading(false);
  }, [filter]);

  useEffect(() => {
    if (!adminLoading && !isAdmin) {
      navigate('/');
    }
  }, [isAdmin, adminLoading, navigate]);

  useEffect(() => {
    if (isAdmin) fetchSubmissions();
  }, [isAdmin, fetchSubmissions]);

  const handleRetryFailed = async () => {
    setRetrying(true);
    try {
      const { data, error } = await supabase.functions.invoke('zoho-crm-sync', {
        body: { retry_failed: true, max_retries: 5 },
      });
      if (error) throw error;
      toast.success(data?.message || 'Retry triggered');
      await fetchSubmissions();
    } catch {
      toast.error('Failed to trigger retry');
    }
    setRetrying(false);
  };

  const handleRetrySingle = async (id: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('zoho-crm-sync', {
        body: { submission_id: id },
      });
      if (error) throw error;
      toast.success(data?.results?.[0]?.success ? 'Synced successfully' : 'Sync failed');
      await fetchSubmissions();
    } catch {
      toast.error('Failed to retry');
    }
  };

  if (adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!isAdmin) return null;

  const counts = {
    all: submissions.length,
    pending: submissions.filter((s) => s.zoho_sync_status === 'pending').length,
    synced: submissions.filter((s) => s.zoho_sync_status === 'synced').length,
    failed: submissions.filter((s) => s.zoho_sync_status === 'failed').length,
  };

  const getRetryCount = (s: Submission) => {
    const rc = (s.submission_data as Record<string, unknown>)?._retry_count;
    return typeof rc === 'number' ? rc : 0;
  };

  const getEmail = (s: Submission) => {
    const d = s.submission_data as Record<string, unknown>;
    return (d?.email as string) || '—';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Zoho CRM Sync Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={fetchSubmissions} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-1 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="destructive" size="sm" onClick={handleRetryFailed} disabled={retrying || counts.failed === 0}>
            <AlertTriangle className="h-4 w-4 mr-1" />
            {retrying ? 'Retrying…' : `Retry Failed (${counts.failed})`}
          </Button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {(['all', 'pending', 'synced', 'failed'] as const).map((key) => (
          <Card
            key={key}
            className={`cursor-pointer transition-shadow ${filter === key ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setFilter(key)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium capitalize text-muted-foreground">{key}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{filter === 'all' ? counts[key] : key === filter ? submissions.length : counts[key]}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Form</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Retries</TableHead>
                <TableHead>Error</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Synced</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">Loading…</TableCell>
                </TableRow>
              ) : submissions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">No submissions found</TableCell>
                </TableRow>
              ) : (
                submissions.map((s) => {
                  const cfg = statusConfig[s.zoho_sync_status || 'pending'] || statusConfig.pending;
                  const Icon = cfg.icon;
                  return (
                    <TableRow key={s.id}>
                      <TableCell className="font-medium">{s.form_id}</TableCell>
                      <TableCell className="max-w-[180px] truncate">{getEmail(s)}</TableCell>
                      <TableCell>
                        <Badge variant={cfg.variant} className="gap-1">
                          <Icon className="h-3 w-3" />
                          {cfg.label}
                        </Badge>
                      </TableCell>
                      <TableCell>{getRetryCount(s)}</TableCell>
                      <TableCell className="max-w-[200px] truncate text-destructive text-xs">{s.sync_error || '—'}</TableCell>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(s.created_at).toLocaleString()}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {s.zoho_synced_at ? new Date(s.zoho_synced_at).toLocaleString() : '—'}
                      </TableCell>
                      <TableCell>
                        {s.zoho_sync_status === 'failed' && (
                          <Button variant="ghost" size="sm" onClick={() => handleRetrySingle(s.id)}>
                            Retry
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSyncDashboard;
