import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle } from 'lucide-react';

interface PolicyAcceptanceProps {
  accepted: boolean;
  onAcceptedChange: (accepted: boolean) => void;
  showError?: boolean;
  showMinorNotice?: boolean;
  className?: string;
}

const PolicyAcceptance = ({
  accepted,
  onAcceptedChange,
  showError = false,
  showMinorNotice = false,
  className = '',
}: PolicyAcceptanceProps) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-start gap-3">
        <Checkbox
          id="policy-acceptance"
          checked={accepted}
          onCheckedChange={(checked) => onAcceptedChange(checked === true)}
          className="mt-0.5"
        />
        <label htmlFor="policy-acceptance" className="text-xs leading-relaxed text-muted-foreground cursor-pointer">
          I confirm that I have read and agree to the WeKIT{' '}
          <Link to="/terms" target="_blank" className="text-primary underline hover:text-primary/80 font-medium">
            Terms &amp; Conditions
          </Link>
          ,{' '}
          <Link to="/terms#privacy" target="_blank" className="text-primary underline hover:text-primary/80 font-medium">
            Privacy Policy
          </Link>
          , and{' '}
          <Link to="/terms#safeguarding" target="_blank" className="text-primary underline hover:text-primary/80 font-medium">
            Child Safety &amp; Safeguarding Policy
          </Link>
          .
        </label>
      </div>

      {showError && !accepted && (
        <div className="flex items-center gap-2 text-destructive text-xs">
          <AlertCircle size={14} />
          <span>You must accept the Terms and Policies before continuing.</span>
        </div>
      )}

      {showMinorNotice && (
        <p className="text-xs text-muted-foreground/80 italic pl-7">
          If you are under 18, participation must be approved by a parent, guardian, or educational institution.
        </p>
      )}
    </div>
  );
};

export default PolicyAcceptance;
