
import { Link, useLocation } from 'react-router-dom';

const NavigationItems = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Schools', path: '/schools' },
    { name: 'Students', path: '/students' },
    { name: 'Parents', path: 'https://lovable.dev/projects/db205b89-38c3-49ab-9fb5-591b507101f0', external: true },
    { name: 'Professionals', path: '/professionals' },
    { name: 'NGOs', path: '/ngos' },
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
            className="text-sm font-medium text-gray-500 hover:text-gray-600 transition-colors"
          >
            {item.name}
          </a>
        ) : (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-medium transition-colors hover:text-gray-600 ${
              location.pathname === item.path
                ? 'text-gray-900'
                : item.highlight 
                ? 'text-blue-600 hover:text-blue-700'
                : 'text-gray-500'
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
