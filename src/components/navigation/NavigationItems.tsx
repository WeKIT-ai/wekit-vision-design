
import { Link, useLocation } from 'react-router-dom';

const NavigationItems = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Schools & Colleges', path: '/schools' },
    { name: 'Students & Mentees', path: '/students' },
    { name: 'Parents', path: 'https://lovable.dev/projects/db205b89-38c3-49ab-9fb5-591b507101f0', external: true },
    { name: 'Professionals', path: '/professionals' },
    { name: 'NGOs & Partners', path: '/ngos' },
    { name: 'Courses & Certifications', path: '/courses', highlight: true },
  ];

  return (
    <>
      {navItems.map((item) => (
        item.external ? (
          <a
            key={item.name}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200 whitespace-nowrap"
          >
            {item.name}
          </a>
        ) : (
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
        )
      ))}
    </>
  );
};

export default NavigationItems;
