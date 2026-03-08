export interface MegaMenuLink {
  label: string;
  path: string;
  description?: string;
}

export interface MegaMenuGroup {
  title: string;
  links: MegaMenuLink[];
}

export interface MegaMenuFeatured {
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
  buttonPath: string;
}

export interface MegaMenuConfig {
  label: string;
  path?: string;
  categories?: string[];
  groups: MegaMenuGroup[];
  featured?: MegaMenuFeatured;
}

export const programsMenu: MegaMenuConfig = {
  label: 'Programs',
  categories: [
    'Educational Institutions',
    'Youth & Families',
    'Mentors & Professionals',
    'Entrepreneurship',
    'Partners & Organizations',
  ],
  groups: [
    {
      title: 'Educational Institutions',
      links: [
        { label: 'Future Readiness System', path: '/programs#institutions', description: 'AI-powered career discovery & mentorship for schools' },
        { label: 'School Partnership Discovery', path: '/schools', description: 'Bring WeKIT to your institution' },
        { label: 'Student Journey (Grades 8–12)', path: '/programs#institutions', description: 'Five-year structured career pathway' },
      ],
    },
    {
      title: 'Youth & Families',
      links: [
        { label: 'Career Discovery Assessment', path: '/programs#youth' },
        { label: 'Purpose Architecture Lab', path: '/programs#youth' },
        { label: 'Future Skills Learning Paths', path: '/programs#youth' },
        { label: 'Mentorship Access', path: '/programs#youth' },
      ],
    },
    {
      title: 'Mentors & Professionals',
      links: [
        { label: 'Become a Mentor', path: '/mentor-waitlist' },
        { label: 'Mentor Certification Program', path: '/programs#mentors' },
        { label: 'Mentor Training Lab', path: '/programs#mentors' },
        { label: 'WeKIT Experience Collective', path: '/programs#mentors' },
      ],
    },
    {
      title: 'Entrepreneurship',
      links: [
        { label: 'Founder Discovery Lab', path: '/programs#entrepreneurship' },
        { label: 'Startup Mentorship Network', path: '/programs#entrepreneurship' },
        { label: 'Angel Readiness Program', path: '/programs#entrepreneurship' },
        { label: 'Student Entrepreneurship Labs', path: '/programs#entrepreneurship' },
      ],
    },
    {
      title: 'Partners & Organizations',
      links: [
        { label: 'Corporate Partnerships', path: '/programs#partners' },
        { label: 'NGO & Foundation Programs', path: '/programs#partners' },
        { label: 'Government & Policy Programs', path: '/programs#partners' },
        { label: 'Enterprise Solutions', path: '/enterprise' },
      ],
    },
  ],
  featured: {
    title: 'Flagship Program',
    subtitle: 'WeKIT Future Readiness System',
    description: 'A seven-component, five-year infrastructure combining AI career discovery, mentorship, life skills, and career portfolios for Grades 8–12.',
    buttonLabel: 'Explore for Schools',
    buttonPath: '/schools',
  },
};

export const coursesMenu: MegaMenuConfig = {
  label: 'Courses',
  categories: [
    'Life Skills',
    'Leadership',
    'Career Design',
    'Financial Literacy',
    'AI & Digital Skills',
    'Corporate Programs',
  ],
  groups: [
    {
      title: 'Life Skills',
      links: [
        { label: 'Identity & Self Awareness', path: '/courses#identity-self-awareness' },
        { label: 'Emotional Intelligence', path: '/courses#emotional-intelligence' },
        { label: 'Resilience & Stress Management', path: '/courses#resilience-stress' },
        { label: 'Ethics & Decision Making', path: '/courses#ethics-decision-making' },
      ],
    },
    {
      title: 'Leadership',
      links: [
        { label: 'Leadership Presence', path: '/courses#leadership-presence' },
        { label: 'Influence & Communication', path: '/courses#influence-communication' },
        { label: 'Purpose-Led Leadership', path: '/courses#purpose-led-leadership' },
      ],
    },
    {
      title: 'Career Design',
      links: [
        { label: 'Purpose Architecture Lab', path: '/courses#purpose-architecture' },
        { label: 'Career Strategy', path: '/courses#career-strategy' },
        { label: 'Personal Brand Building', path: '/courses#personal-brand' },
      ],
    },
    {
      title: 'Financial Literacy',
      links: [
        { label: 'Money Foundations', path: '/courses#money-foundations' },
        { label: 'Financial Intelligence', path: '/courses#financial-intelligence' },
        { label: 'Wealth Design', path: '/courses#wealth-design' },
      ],
    },
    {
      title: 'AI & Digital Skills',
      links: [
        { label: 'AI Literacy', path: '/courses#ai-literacy' },
        { label: 'Responsible AI', path: '/courses#responsible-ai' },
        { label: 'Digital Reputation', path: '/courses#digital-reputation' },
        { label: 'AI Productivity Tools', path: '/courses#ai-productivity' },
      ],
    },
    {
      title: 'Corporate Programs',
      links: [
        { label: 'Resilient Leadership', path: '/courses#resilient-leadership' },
        { label: 'Responsible AI Adoption', path: '/courses#responsible-ai-adoption' },
        { label: 'Digital Transformation Mindset', path: '/courses#digital-transformation' },
        { label: 'Talent Architecture', path: '/courses#talent-architecture' },
      ],
    },
  ],
};

export const mentorshipMenu: MegaMenuConfig = {
  label: 'Mentorship',
  groups: [
    {
      title: 'Mentorship Programs',
      links: [
        { label: 'Find a Mentor', path: '/find-mentor' },
        { label: 'Become a Mentor', path: '/mentor-waitlist' },
        { label: 'Mentor Network', path: '/mentor-dashboard' },
        { label: 'Executive Mentorship', path: '/mentorship#executive' },
      ],
    },
  ],
  featured: {
    title: 'Featured',
    subtitle: 'Global Mentor Network',
    description: 'Connect with experienced professionals and industry leaders guiding the next generation of innovators.',
    buttonLabel: 'Find a Mentor',
    buttonPath: '/find-mentor',
  },
};

export const enterpriseMenu: MegaMenuConfig = {
  label: 'Enterprise',
  categories: ['Schools', 'Universities', 'Corporates', 'Government & NGOs'],
  groups: [
    {
      title: 'Schools',
      links: [
        { label: 'Life Skills Lab', path: '/schools#life-skills' },
        { label: 'Purpose Architecture Labs', path: '/schools#purpose-architecture' },
        { label: 'Career Portfolio Programs', path: '/schools#career-portfolio' },
      ],
    },
    {
      title: 'Universities',
      links: [
        { label: 'Career Acceleration Programs', path: '/students#career-acceleration' },
        { label: 'Mentorship Platforms', path: '/students#mentorship-platforms' },
        { label: 'Leadership Development', path: '/students#leadership-development' },
      ],
    },
    {
      title: 'Corporates',
      links: [
        { label: 'Leadership Development Labs', path: '/professionals#leadership-labs' },
        { label: 'AI Workforce Readiness', path: '/professionals#ai-workforce' },
        { label: 'Employee Financial Wellness', path: '/professionals#financial-wellness' },
      ],
    },
    {
      title: 'Government & NGOs',
      links: [
        { label: 'Youth Skilling Programs', path: '/ngos#youth-skilling' },
        { label: 'Career Readiness Initiatives', path: '/ngos#career-readiness' },
        { label: 'Purpose Discovery Programs', path: '/ngos#purpose-discovery' },
      ],
    },
  ],
};

export const resourcesMenu: MegaMenuConfig = {
  label: 'Resources',
  categories: ['Insights', 'Tools', 'Community', 'Events'],
  groups: [
    {
      title: 'Insights',
      links: [
        { label: 'Articles', path: '/resources#articles' },
        { label: 'Research & Reports', path: '/resources#research' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { label: 'Career Tools', path: '/resources#career-tools' },
        { label: 'Purpose Assessments', path: '/resources#assessments' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'White Paper', path: '/white-paper' },
      ],
    },
    {
      title: 'Events',
      links: [
        { label: 'Workshops & Events', path: '/resources#workshops' },
      ],
    },
  ],
};

export const aboutLinks: MegaMenuLink[] = [
  { label: 'About WeKIT', path: '/about' },
  { label: 'Founder', path: '/about#founder' },
  { label: 'Advisory Board', path: '/about#advisory' },
  { label: 'Partners', path: '/about#partners' },
  { label: 'Impact', path: '/about#impact' },
  { label: 'Contact', path: '/about#contact' },
];

export const allMenus = [programsMenu, coursesMenu, mentorshipMenu, enterpriseMenu, resourcesMenu];
