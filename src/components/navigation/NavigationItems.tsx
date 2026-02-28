
import { Link, useLocation } from 'react-router-dom';

const NavigationItems = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Schools & Colleges', path: '/schools' },
    { name: 'Students & Mentees', path: '/students' },
    { name: 'Parents', path: '/parents' }, // Now internal
    { name: 'Professionals', path: '/professionals' },
    { name: 'NGOs & Partners', path: '/ngos' },
    { name: 'Courses & Certifications', path: '/courses', highlight: true },
    { name: 'White Paper', path: '/white-paper', highlight: true },
    { name: 'Mentor Matching', path: '/mentor-dashboard' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
            location.pathname === item.path
              ? 'text-foreground bg-accent/70 shadow-sm'
              : item.highlight 
              ? 'text-primary hover:text-primary/80 hover:bg-primary/10'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default NavigationItems;
