export interface MegaMenuLink {
  label: string;
  path: string;
  description?: string;
  icon?: string;
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
  videoUrl?: string;
}

export interface MegaMenuConfig {
  label: string;
  path?: string;
  categories?: string[];
  groups: MegaMenuGroup[];
  featured?: MegaMenuFeatured;
  /** Audience-specific featured cards keyed by category name */
  featuredByCategory?: Record<string, MegaMenuFeatured>;
}

// Programs mega menu — contextual by audience
export const programsMenu: MegaMenuConfig = {
  label: 'Programs',
  categories: [
    'Schools & Colleges',
    'University Students',
    'Young Professionals',
    'Parents & Families',
    'Mentors & Professionals',
    'Corporates',
    'NGOs & CSR Teams',
    'EdTech Platforms',
  ],
  groups: [
    {
      title: 'Schools & Colleges',
      links: [
        { label: 'Life Skills Lab', path: '/programs#institutions', icon: 'Heart' },
        { label: 'Purpose Architecture Lab', path: '/programs#institutions', icon: 'Compass' },
        { label: 'Financial Literacy Lab', path: '/programs#institutions', icon: 'Wallet' },
        { label: 'Career Discovery Program', path: '/programs#institutions', icon: 'Search' },
        { label: 'AI Readiness for Youth', path: '/programs#institutions', icon: 'Bot' },
        { label: 'WeKIT 360 Mentorship', path: '/programs#institutions', icon: 'Users' },
        { label: 'Bagless Learning Studio', path: '/programs#institutions', icon: 'Backpack' },
      ],
    },
    {
      title: 'University Students',
      links: [
        { label: 'Career Acceleration Program', path: '/students#career-acceleration', icon: 'Rocket' },
        { label: 'Mentorship Platform Access', path: '/students#mentorship-platforms', icon: 'Users' },
        { label: 'Leadership Development', path: '/students#leadership-development', icon: 'Crown' },
        { label: 'College Discovery Community', path: '/programs#youth', icon: 'GraduationCap' },
        { label: 'Future Skills Courses', path: '/programs#youth', icon: 'Zap' },
      ],
    },
    {
      title: 'Young Professionals',
      links: [
        { label: 'Career Navigation', path: '/professionals', icon: 'Navigation' },
        { label: 'Purpose Architecture Lab', path: '/professionals#purpose', icon: 'Compass' },
        { label: 'Executive Mentorship', path: '/mentorship#executive', icon: 'Briefcase' },
        { label: 'Personal Brand Building', path: '/courses#personal-brand', icon: 'Star' },
      ],
    },
    {
      title: 'Parents & Families',
      links: [
        { label: 'Future-Proof Parenting', path: '/programs#parents', icon: 'Home' },
        { label: 'Purpose-Driven Family Leadership', path: '/programs#parents', icon: 'Heart' },
        { label: 'Raising Leaders of Character', path: '/programs#parents', icon: 'Shield' },
        { label: 'Financial Wisdom for Families', path: '/programs#parents', icon: 'Wallet' },
        { label: 'The Mentored Family', path: '/programs#parents', icon: 'Users' },
      ],
    },
    {
      title: 'Mentors & Professionals',
      links: [
        { label: 'Become a Mentor', path: '/mentor-waitlist', icon: 'UserPlus' },
        { label: 'Mentor Certification Program', path: '/programs#mentors', icon: 'Award' },
        { label: 'Mentor Training Lab', path: '/programs#mentors', icon: 'BookOpen' },
        { label: 'WeKIT Experience Collective', path: '/programs#mentors', icon: 'Globe' },
      ],
    },
    {
      title: 'Corporates',
      links: [
        { label: 'CSR Youth Mentorship Programs', path: '/programs#partners', icon: 'Heart' },
        { label: 'Corporate Leadership Expeditions', path: '/programs#experiential', icon: 'Mountain' },
        { label: 'Future Talent Pipeline', path: '/enterprise', icon: 'TrendingUp' },
        { label: 'Impact Analytics Dashboards', path: '/enterprise', icon: 'BarChart3' },
      ],
    },
    {
      title: 'NGOs & CSR Teams',
      links: [
        { label: 'Youth Skilling Programs', path: '/ngos#youth-skilling', icon: 'Sparkles' },
        { label: 'Career Readiness Initiatives', path: '/ngos#career-readiness', icon: 'Target' },
        { label: 'Purpose Discovery Programs', path: '/ngos#purpose-discovery', icon: 'Compass' },
        { label: 'Community Impact Programs', path: '/programs#partners', icon: 'Users' },
      ],
    },
    {
      title: 'EdTech Platforms',
      links: [
        { label: 'API Integration (Coming Soon)', path: '/programs#partners', icon: 'Code' },
        { label: 'Content Licensing', path: '/programs#partners', icon: 'FileText' },
        { label: 'Partnership Inquiry', path: '/enterprise', icon: 'Handshake' },
      ],
    },
  ],
  featured: {
    title: 'Flagship Program',
    subtitle: 'Purpose Architecture Lab',
    description: 'An AI-powered purpose and career discovery system helping students explore strengths, values, and career pathways.',
    buttonLabel: 'Explore Program',
    buttonPath: '/programs#institutions',
    videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
  },
  featuredByCategory: {
    'Schools & Colleges': {
      title: 'Flagship Program',
      subtitle: 'WeKIT Future Readiness System',
      description: 'A seven-component, five-year infrastructure combining AI career discovery, mentorship, life skills, and career portfolios for Grades 8–12.',
      buttonLabel: 'Explore for Schools',
      buttonPath: '/schools',
      videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    },
    'University Students': {
      title: 'Featured',
      subtitle: 'College Discovery Community',
      description: 'Students explore peer-reviewed college insights and connect with alumni for real-world guidance on campus life, academics, and careers.',
      buttonLabel: 'Explore Community',
      buttonPath: '/programs#youth',
      videoUrl: 'https://videos.pexels.com/video-files/6893992/6893992-uhd_2732_1440_25fps.mp4',
    },
    'Young Professionals': {
      title: 'Featured',
      subtitle: 'Purpose Architecture Lab',
      description: 'An AI-powered purpose and career discovery system helping professionals explore strengths, values, and career pathways.',
      buttonLabel: 'Explore Program',
      buttonPath: '/professionals',
      videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    },
    'Parents & Families': {
      title: 'Featured',
      subtitle: 'Future-Proof Parenting',
      description: 'Equip your family with purpose, financial wisdom, and leadership skills that prepare children for a rapidly changing world.',
      buttonLabel: 'Learn More',
      buttonPath: '/programs#parents',
    },
    'Mentors & Professionals': {
      title: 'Featured',
      subtitle: 'Global Mentor Network',
      description: 'Connect with experienced professionals and industry leaders guiding the next generation of innovators and changemakers.',
      buttonLabel: 'Become a Mentor',
      buttonPath: '/mentor-waitlist',
      videoUrl: 'https://videos.pexels.com/video-files/6893992/6893992-uhd_2732_1440_25fps.mp4',
    },
    'Corporates': {
      title: 'Enterprise',
      subtitle: 'Corporate Impact Programs',
      description: 'Create scalable mentoring ecosystems and future talent pipelines through CSR, leadership expeditions, and impact analytics.',
      buttonLabel: 'Explore Enterprise',
      buttonPath: '/enterprise',
    },
    'NGOs & CSR Teams': {
      title: 'Impact',
      subtitle: 'Community Impact Programs',
      description: 'Partner with WeKIT to deliver youth skilling, career readiness, and purpose discovery at scale.',
      buttonLabel: 'Partner With Us',
      buttonPath: '/ngos',
    },
    'EdTech Platforms': {
      title: 'Coming Soon',
      subtitle: 'EdTech Integration',
      description: 'WeKIT is building open APIs and content licensing options for EdTech platforms seeking to embed career readiness and mentorship.',
      buttonLabel: 'Express Interest',
      buttonPath: '/enterprise',
    },
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
