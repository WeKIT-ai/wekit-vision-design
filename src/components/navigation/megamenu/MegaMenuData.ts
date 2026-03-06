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
    'Students (Grades 8–12)',
    'University Students',
    'Young Professionals',
    'Mentors',
    'Organizations',
  ],
  groups: [
    {
      title: 'Students (Grades 8–12)',
      links: [
        { label: 'Life Skills Lab', path: '/programs#life-skills-lab' },
        { label: 'Purpose Architecture Labs', path: '/programs#purpose-architecture-labs' },
        { label: 'Financial Literacy Lab', path: '/programs#financial-literacy-lab' },
        { label: 'Career Discovery Program', path: '/programs#career-discovery' },
        { label: 'AI Readiness for Youth', path: '/programs#ai-readiness-youth' },
      ],
    },
    {
      title: 'University Students',
      links: [
        { label: 'Career Architecture Accelerator', path: '/programs#career-architecture-accelerator' },
        { label: 'Leadership Foundations', path: '/programs#leadership-foundations' },
        { label: 'AI Tools for Career Growth', path: '/programs#ai-career-growth' },
      ],
    },
    {
      title: 'Young Professionals',
      links: [
        { label: 'Purpose-Led Career Design', path: '/programs#purpose-led-career' },
        { label: 'Leadership Presence Certification', path: '/programs#leadership-presence' },
        { label: 'Financial Intelligence Program', path: '/programs#financial-intelligence' },
        { label: 'AI Literacy for Professionals', path: '/programs#ai-literacy-professionals' },
      ],
    },
    {
      title: 'Mentors',
      links: [
        { label: 'Become a Mentor', path: '/mentor-waitlist' },
        { label: 'Mentor Certification', path: '/programs#mentor-certification' },
        { label: 'Mentor Training Lab', path: '/programs#mentor-training' },
      ],
    },
    {
      title: 'Organizations',
      links: [
        { label: 'School Programs', path: '/schools' },
        { label: 'Corporate Programs', path: '/professionals' },
        { label: 'Government Partnerships', path: '/ngos' },
      ],
    },
  ],
  featured: {
    title: 'Featured Program',
    subtitle: 'Purpose Architecture Lab',
    description: 'A structured mentorship and learning system helping youth discover purpose, design career paths and build real-world skills.',
    buttonLabel: 'Explore Program',
    buttonPath: '/programs#purpose-architecture-labs',
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
