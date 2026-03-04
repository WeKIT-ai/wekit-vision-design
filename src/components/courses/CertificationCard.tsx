import { Award, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface CertificationCourse {
  title: string;
  slug: string;
  summary: string;
  duration: string;
  format: string;
  tags: string[];
}

interface CertificationCardProps {
  course: CertificationCourse;
}

const CertificationCard = ({ course }: CertificationCardProps) => {
  return (
    <Card className="group border border-border/60 bg-card hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
      <CardContent className="p-8 space-y-5">
        {/* Badge placeholder */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-wekit-soft flex items-center justify-center">
            <Award className="w-6 h-6 text-wekit-teal" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credential ID: Pending</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold font-montserrat text-foreground leading-snug group-hover:text-wekit-teal transition-colors duration-300">
          {course.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {course.summary}
        </p>

        {/* Duration & Format */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
          <span>{course.duration}</span>
          <span>{course.format}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-wekit-tag text-wekit-tag-text"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <Link to={`/courses/${course.slug}`} className="flex-1">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
              View Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="rounded-xl border-border" title="Download Syllabus (Coming Soon)" disabled>
            <FileText className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
