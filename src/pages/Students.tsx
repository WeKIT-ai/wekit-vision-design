
import StudentsHero from '@/components/students/StudentsHero';
import StudentsProblems from '@/components/students/StudentsProblems';
import StudentsSolutions from '@/components/students/StudentsSolutions';
import StudentsImpact from '@/components/students/StudentsImpact';
import StudentsProcess from '@/components/students/StudentsProcess';
import StudentsCTA from '@/components/students/StudentsCTA';

const Students = () => {
  return (
    <div className="min-h-screen pt-16">
      <StudentsHero />
      <StudentsProblems />
      <StudentsSolutions />
      <StudentsImpact />
      <StudentsProcess />
      <StudentsCTA />
    </div>
  );
};

export default Students;
