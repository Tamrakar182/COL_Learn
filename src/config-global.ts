export const filters = [
  // radio
  {
    id: 'type',
    name: 'Type',
    options: [
      { value: 'courses', label: 'Course' },
      { value: 'tests', label: 'Test' },
      { value: 'module', label: 'Module' },
    ],
  },
  // checkbox
  {
    id: 'difficulty',
    name: 'Difficulty',
    options: [
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' },
    ],
  },
  // checkbox
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'programming', label: 'Programming' },
      { value: 'design', label: 'Design' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'business', label: 'Business' },
      { value: 'personal_development', label: 'Personal Development' },
      { value: 'music', label: 'Music' },
      { value: 'photography', label: 'Photography' },
      { value: 'health', label: 'Health' },
      { value: 'fitness', label: 'Fitness' },
      { value: 'lifestyle', label: 'Lifestyle' },
      { value: 'food', label: 'Food' },
      { value: 'academics', label: 'Academics' },
    ],
  },
];

export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
