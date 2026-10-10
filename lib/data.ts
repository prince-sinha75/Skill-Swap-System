export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Explore Skills', href: '#explore' },
];

export const heroExchange = {
  userA: {
    label: 'User A',
    knows: ['React', 'JavaScript', 'Frontend Development'],
    wantsToLearn: ['UI/UX'],
    accent: 'cyan',
  },
  userB: {
    label: 'User B',
    knows: ['UI/UX', 'Figma', 'Design'],
    wantsToLearn: ['React'],
    accent: 'teal',
  },
};

export const aboutValues = [
  { icon: 'Users', title: 'Learn Together', description: 'Connect with people who share your learning goals.' },
  { icon: 'Repeat2', title: 'Share Knowledge', description: 'Teach what you know and discover what others offer.' },
  { icon: 'TrendingUp', title: 'Grow Together', description: 'Build new skills through meaningful exchanges.' },
];

export const features = [
  {
    number: '01',
    title: 'Smart AI Matching',
    description:
      'AI-powered matching identifies people whose skills and learning goals complement each other. Someone who wants to learn React could be matched with someone who knows React and wants to learn something you already know.',
    icon: 'BrainCircuit',
    accent: 'cyan',
    preview: 'match',
  },
  {
    number: '02',
    title: 'Interactive Profile',
    description:
      'Create an engaging profile showing skills you know, skills you want to learn, interests, learning goals, and experience level. Your profile feels alive — not like a static resume.',
    icon: 'UserCircle',
    accent: 'teal',
    preview: 'profile',
  },
  {
    number: '03',
    title: 'Skill Exchange',
    description:
      'The core of SkillSwap. Users exchange knowledge with each other. You teach React, they teach UI/UX. A two-way exchange that benefits everyone involved.',
    icon: 'Repeat2',
    accent: 'cyan',
    preview: 'exchange',
  },
  {
    number: '04',
    title: 'Smart Scheduling',
    description:
      'Coordinate suitable times for learning sessions with ease. Find a suitable time, schedule a session, and start learning — all without the back-and-forth.',
    icon: 'CalendarClock',
    accent: 'teal',
    preview: 'schedule',
  },
  {
    number: '05',
    title: 'Connect & Collaborate',
    description:
      'After finding a suitable match, connect and collaborate through conversations, learning sessions, and shared knowledge — all in one place.',
    icon: 'MessageCircle',
    accent: 'cyan',
    preview: 'collaborate',
  },
  {
    number: '06',
    title: 'Track Your Growth',
    description:
      'Understand your learning journey. Track skills learned, skills in progress, completed exchanges, and personal growth over time — without fake metrics.',
    icon: 'TrendingUp',
    accent: 'teal',
    preview: 'growth',
  },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Create Your Profile',
    description:
      'Tell SkillSwap what you know and what you want to learn. Set up your identity in a few simple steps.',
    icon: 'UserPlus',
    points: ['Name & avatar', 'Learning goals', 'Experience level'],
  },
  {
    step: '02',
    title: 'Add Your Skills',
    description:
      'Select the skills you can teach and the skills you want to learn. The more specific you are, the better your matches will be.',
    icon: 'Tags',
    points: ['Teach skills', 'Learn skills', 'Interests & focus'],
  },
  {
    step: '03',
    title: 'Find Your Match',
    description:
      'The AI matching system identifies people with complementary skills and learning goals — so you find the right partner.',
    icon: 'BrainCircuit',
    points: ['Compatibility scoring', 'Complementary skills', 'Smart pairing'],
  },
  {
    step: '04',
    title: 'Start Swapping',
    description:
      'Connect, schedule, teach, learn, and grow together. Your skill exchange journey begins here.',
    icon: 'Rocket',
    points: ['Schedule sessions', 'Teach & learn', 'Track your growth'],
  },
];

export const skillCategories = [
  { name: 'Technology', icon: 'Code2', skills: ['React', 'Python', 'Java', 'JavaScript'], image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Design', icon: 'Palette', skills: ['UI/UX Design', 'Graphic Design', 'Figma'], image: 'https://images.pexels.com/photos/16313664/pexels-photo-16313664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Photography', icon: 'Camera', skills: ['Photography', 'Video Editing'], image: 'https://images.pexels.com/photos/35001053/pexels-photo-35001053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Music', icon: 'Music', skills: ['Guitar', 'Piano', 'Music Production'], image: 'https://images.pexels.com/photos/63695/pexels-photo-63695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Languages', icon: 'Languages', skills: ['Spanish', 'French', 'Japanese'], image: 'https://images.pexels.com/photos/13745480/pexels-photo-13745480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Business', icon: 'Briefcase', skills: ['Digital Marketing', 'SEO', 'Entrepreneurship'], image: 'https://images.pexels.com/photos/7688106/pexels-photo-7688106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Writing', icon: 'PenTool', skills: ['Copywriting', 'Content Writing', 'Blogging'], image: 'https://images.pexels.com/photos/204511/pexels-photo-204511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Personal Development', icon: 'Sparkles', skills: ['Public Speaking', 'Leadership', 'Time Management'], image: 'https://images.pexels.com/photos/32417518/pexels-photo-32417518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const popularSkills = [
  'React', 'Python', 'UI/UX Design', 'Graphic Design',
  'Digital Marketing', 'Guitar', 'Java', 'Photography',
];

export const matchSkillOptions = [
  'Technology', 'Design', 'Photography', 'Music', 'Languages', 'Business',
  'Writing', 'Marketing', 'Programming', 'Video Editing', 'Guitar', 'UI/UX',
  'Python', 'React', 'JavaScript', 'Figma', 'Java', 'Digital Marketing',
  'Node.js', 'TypeScript', 'Graphic Design', 'Spanish', 'French', 'Piano',
  'SEO', 'Content Writing', 'Leadership', 'Time Management', 'Music Production',
  'Illustrator', 'Photoshop', 'Public Speaking',
];

export const skillLevels = [
  { value: 'beginner', label: 'Beginner', description: 'Starting out or learning the basics' },
  { value: 'intermediate', label: 'Intermediate', description: 'Comfortable with the fundamentals' },
  { value: 'advanced', label: 'Advanced', description: 'Deep knowledge and experience' },
];

export const availabilityDays = [
  { value: 'monday', label: 'Monday', short: 'Mon' },
  { value: 'tuesday', label: 'Tuesday', short: 'Tue' },
  { value: 'wednesday', label: 'Wednesday', short: 'Wed' },
  { value: 'thursday', label: 'Thursday', short: 'Thu' },
  { value: 'friday', label: 'Friday', short: 'Fri' },
  { value: 'saturday', label: 'Saturday', short: 'Sat' },
  { value: 'sunday', label: 'Sunday', short: 'Sun' },
];

export const availabilityTimes = [
  { value: 'morning', label: 'Morning', icon: 'Sunrise' },
  { value: 'afternoon', label: 'Afternoon', icon: 'Sun' },
  { value: 'evening', label: 'Evening', icon: 'Moon' },
];

export const sessionDurations = [
  { value: 30, label: '30 min' },
  { value: 60, label: '60 min' },
  { value: 90, label: '90 min' },
];

export const connectionTypes = [
  { value: 'one-on-one', label: 'One-on-one learning', description: 'Focused, individual sessions', icon: 'User' },
  { value: 'casual', label: 'Casual skill exchange', description: 'Relaxed, informal learning', icon: 'Coffee' },
  { value: 'long-term', label: 'Long-term learning partner', description: 'Ongoing skill development', icon: 'Users' },
  { value: 'project', label: 'Project collaboration', description: 'Learn by building together', icon: 'Briefcase' },
];

export const matchSteps = [
  { num: '01', label: 'Skills', title: 'What Can You Teach?' },
  { num: '02', label: 'Learn', title: 'What Do You Want to Learn?' },
  { num: '03', label: 'Level', title: "What's Your Skill Level?" },
  { num: '04', label: 'Availability', title: 'When Are You Available?' },
  { num: '05', label: 'Preferences', title: 'What Kind of Connection?' },
];

export const howMatchingWorks = [
  { step: '01', title: 'Tell Us What You Know', description: 'Choose the skills you can teach.' },
  { step: '02', title: 'Tell Us What You Want to Learn', description: 'Choose the skills you want to develop.' },
  { step: '03', title: 'Add Your Preferences', description: 'Tell us your level and availability.' },
  { step: '04', title: 'Find Your Match', description: "We'll identify compatible skill exchanges." },
];

export const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Explore Skills', href: '#explore' },
  { label: 'Find Your Match', href: '#cta' },
];
