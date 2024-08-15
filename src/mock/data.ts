import { Mock } from '@/assets';
import mock from '@/assets/mock';
import { CourseType, CourseDetail, CategoryType } from '@/types/course';
import { ModuleType } from '@/types/module';
import { TestType } from '@/types/test';

export const dummyCourse: CourseType[] = [
  {
    id: '1',
    title: 'LokSewa Preparation 1',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock2,
  },
  {
    id: '2',
    title: 'LokSewa Preparation 2',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock3,
  },
  {
    id: '3',
    title: 'LokSewa Preparation 3',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock4,
  },
  {
    id: '4',
    title: 'LokSewa Preparation 4',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock4,
  },
  {
    id: '5',
    title: 'LokSewa Preparation 5',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock4,
  },
  {
    id: '6',
    title: 'LokSewa Preparation 6',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock4,
  },
  {
    id: '7',
    title: 'LokSewa Preparation 7',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock4,
  },
  {
    id: '8',
    title: 'LokSewa Preparation 8',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock4,
  },
  {
    id: '9',
    title: 'LokSewa Preparation 9',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock4,
  },
  {
    id: '10',
    title: 'LokSewa Preparation 10',
    duration: '100 Hours',
    teacher: 'Dr. Bailochan Tuladhar',
    image: Mock.mock4,
  },
];

export const dummyModules: ModuleType[] = [
  {
    id: '1',
    name: 'Introduction',
    description:
      'This module introduces you to cloud computing. It covers things such as cloud concepts, deployment models, and understanding shared responsibility in the cloud.',
    time: '10 mins',
    completed: true,
    units: [
      {
        id: '1',
        time: '3 mins',
        title: 'Introduction to Fundamentals',
      },
      {
        id: '2',
        time: '4 mins',
        title: 'Cloud Computing Models',
      },
      {
        id: '3',
        time: '3 mins',
        title: 'Shared Responsibility in the Cloud',
      },
    ],
  },
  {
    id: '2',
    name: 'Networking',
    description:
      'This module covers basic networking concepts including types of networks, protocols, and an introduction to the OSI model.',
    time: '15 mins',
    completed: false,
    units: [
      {
        id: '1',
        time: '5 mins',
        title: 'Networking Basics',
      },
      {
        id: '2',
        time: '5 mins',
        title: 'Types of Networks',
      },
      {
        id: '3',
        time: '5 mins',
        title: 'Introduction to the OSI Model',
      },
    ],
  },
  {
    id: '3',
    name: 'Cybersecurity',
    description:
      'Learn about the fundamentals of cybersecurity, including key concepts like threats, vulnerabilities, and risk management.',
    time: '12 mins',
    completed: true,
    units: [
      {
        id: '1',
        time: '4 mins',
        title: 'Understanding Cybersecurity',
      },
      {
        id: '2',
        time: '4 mins',
        title: 'Common Threats and Vulnerabilities',
      },
      {
        id: '3',
        time: '4 mins',
        title: 'Introduction to Risk Management',
      },
    ],
  },
  {
    id: '4',
    name: 'Data Storage',
    description:
      'This module explores the basics of data storage solutions, covering topics such as storage types, RAID configurations, and data backup strategies.',
    completed: false,
    time: '20 mins',
    units: [
      {
        id: '1',
        time: '7 mins',
        title: 'Introduction to Data Storage',
      },
      {
        id: '2',
        time: '7 mins',
        title: 'Understanding RAID Configurations',
      },
      {
        id: '3',
        time: '6 mins',
        title: 'Data Backup Strategies',
      },
    ],
  },
];

export const categories = [
  {
    title: 'LokSewa Preparation',
    emoji: '🏢',
    courses: 10,
  },
  {
    title: 'ILETS Preparation',
    emoji: '✈',
    courses: 10,
  },
  {
    title: 'PTE Preparation',
    emoji: '🗺',
    courses: 10,
  },
  {
    title: 'MERN Stack Course',
    emoji: '🐱‍💻',
    courses: 10,
  },
];

export const dummyCategories: CategoryType[] = [
  {
    id: '1',
    name: 'Cloud',
  },
  {
    id: '2',
    name: 'Server',
  },
  {
    id: '3',
    name: 'IT',
  },
  {
    id: '4',
    name: 'Web Development',
  },
];

export const dummyCourseDetail: CourseDetail = {
  id: '1',
  title: 'Introduction to Cloud Computing',
  categories: dummyCategories,
  completion: '60',
  description: `<div>
    <p><strong>Course Title:</strong> Introduction to Cloud Computing</p>
    
    <p><em>Instructor:</em> Jane Doe</p>
    
    <p>Welcome to the <strong>Introduction to Cloud Computing</strong> course. In this course, you will learn the essential concepts and services in cloud computing, including:</p>
    
    <ul>
        <li>What is cloud computing?</li>
        <li>Understanding different cloud service models (IaaS, PaaS, SaaS)</li>
        <li>Exploring cloud deployment models (Public, Private, Hybrid)</li>
        <li>Basics of cloud security</li>
    </ul>
    
    <p>This course is designed for <strong>beginners</strong> who have little to no experience with cloud technologies. By the end of this course, you will have a solid understanding of cloud computing and be prepared to explore more advanced topics.</p>
    
    <p><strong>Course Duration:</strong> 8 hours</p>
    
    <p><strong>Prerequisites:</strong></p>
    <ul>
        <li>Basic understanding of IT concepts</li>
        <li>No prior cloud experience required</li>
    </ul>
    
    <p>If you are ready to embark on your cloud computing journey, click the start button and let's get started!</p>
</div>`,
  duration: '6 hours',
  image: mock.mock1,
  modules: dummyModules,
  nextModule: dummyModules[2].id,
  teacher: 'Dr. Raj Shyam Sherpa',
};

export const dummyMockTest: TestType[] = [
  {
    id: "1",
    duration: "2 hours",
    image: Mock.mock3,
    name: "ILETS Reading Mock Preparation Test",
    questions: "20"
  },
  {
    id: "2",
    duration: "3 hours",
    image: Mock.mock1,
    name: "Engineering Mock Preparation Test",
    questions: "100"
  },
  {
    id: "3",
    duration: "3 hours",
    image: Mock.mock2,
    name: "PTE Reading Mock Preparation Test",
    questions: "20"
  },
  {
    id: "4",
    duration: "3 hours",
    image: Mock.mock4,
    name: "LokSewa Mock Preparation Test",
    questions: "40"
  },
  {
    id: "9",
    duration: "2 hours",
    image: Mock.mock3,
    name: "ILETS Reading 3 Mock Preparation Test",
    questions: "20"
  },
  {
    id: "10",
    duration: "3 hours",
    image: Mock.mock1,
    name: "Engineering 3 Mock Preparation Test",
    questions: "100"
  },
  {
    id: "11",
    duration: "3 hours",
    image: Mock.mock2,
    name: "PTE Reading 3 Mock Preparation Test",
    questions: "20"
  },
  {
    id: "12",
    duration: "3 hours",
    image: Mock.mock4,
    name: "LokSewa Mock 3 Preparation Test",
    questions: "40"
  },
  {
    id: "13",
    duration: "2 hours",
    image: Mock.mock3,
    name: "ILETS Reading 4 Mock Preparation Test",
    questions: "20"
  },
  {
    id: "14",
    duration: "3 hours",
    image: Mock.mock1,
    name: "Engineering 5 Mock Preparation Test",
    questions: "100"
  },
  {
    id: "7",
    duration: "3 hours",
    image: Mock.mock2,
    name: "PTE Reading 2 Mock Preparation Test",
    questions: "20"
  },
  {
    id: "8",
    duration: "3 hours",
    image: Mock.mock4,
    name: "LokSewa 2 Mock Preparation Test",
    questions: "40"
  }

]