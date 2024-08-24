import { Mock } from '@/assets';
import mock from '@/assets/mock';
import {
  CourseType,
  CourseDetail,
  CategoryType,
  CourseHistory,
} from '@/types/course';
import { ModuleType } from '@/types/module';
import {
  TestType,
  TestDetailType,
  TestQuestion,
  TestHistory,
} from '@/types/test';
import { UserType } from '@/types/user';

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

export const dummyModules: ModuleType[] = [
  {
    id: '1',
    name: 'Introduction',
    description: 'This module introduces the core concepts of cloud computing.',
    time: '10 mins',
    completed: true,
    units: [
      {
        id: '1',
        time: '3 mins',
        title: 'Introduction to Cloud Computing',
        type: 'content',
        content: `
        <h2>Introduction to Networking</h2>
        <p>Networking is the practice of connecting computers and other devices to share resources and information. It plays a crucial role in modern communication systems.</p>
        
        <h3>Key Components</h3>
        <ul>
            <li><strong>Router:</strong> Directs data between different networks.</li>
            <li><strong>Switch:</strong> Connects devices within the same network and manages data traffic.</li>
            <li><strong>Firewall:</strong> Protects the network by monitoring and controlling incoming and outgoing traffic.</li>
        </ul>

        <h3>Types of Networks</h3>
        <ol>
            <li><strong>LAN (Local Area Network):</strong> A network that covers a small geographic area, such as a home or office.</li>
            <li><strong>WAN (Wide Area Network):</strong> A network that spans large geographical areas, often connecting multiple LANs.</li>
            <li><strong>VPN (Virtual Private Network):</strong> A secure connection over the internet that allows users to access private networks remotely.</li>
        </ol>

        <blockquote>Networking is not about how many people you know; it's about how many people you can help.</blockquote>

        <p><em>Understanding these basics will help you build and maintain networks effectively.</em></p>
    `,
      },
      {
        id: '2',
        time: '4 mins',
        title: 'Cloud Deployment Models',
        type: 'video',
        videoId: 'rokGy0huYEA',
      },
      {
        id: '3',
        time: '3 mins',
        title: 'Cloud Knowledge Check',
        type: 'quiz',
        quiz: [
          {
            question: 'What is cloud computing?',
            options: ['A', 'B', 'C', 'D'],
            correctAnswer: 'A',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Networking',
    description: 'This module covers networking concepts and the OSI model.',
    time: '15 mins',
    completed: false,
    units: [
      {
        id: '1',
        time: '5 mins',
        title: 'Networking Basics',
        type: 'content',
        content: `
        <h2>Introduction to Networking</h2>
        <p>Networking is the practice of connecting computers and other devices to share resources and information. It plays a crucial role in modern communication systems.</p>
        
        <h3>Key Components</h3>
        <ul>
            <li><strong>Router:</strong> Directs data between different networks.</li>
            <li><strong>Switch:</strong> Connects devices within the same network and manages data traffic.</li>
            <li><strong>Firewall:</strong> Protects the network by monitoring and controlling incoming and outgoing traffic.</li>
        </ul>

        <h3>Types of Networks</h3>
        <ol>
            <li><strong>LAN (Local Area Network):</strong> A network that covers a small geographic area, such as a home or office.</li>
            <li><strong>WAN (Wide Area Network):</strong> A network that spans large geographical areas, often connecting multiple LANs.</li>
            <li><strong>VPN (Virtual Private Network):</strong> A secure connection over the internet that allows users to access private networks remotely.</li>
        </ol>

        <blockquote>Networking is not about how many people you know; it's about how many people you can help.</blockquote>

        <p><em>Understanding these basics will help you build and maintain networks effectively.</em></p>
    `,
      },
      {
        id: '2',
        time: '5 mins',
        title: 'Types of Networks',
        type: 'video',
        videoId: 'rokGy0huYEA',
      },
      {
        id: '3',
        time: '5 mins',
        title: 'Networking Knowledge Check',
        type: 'quiz',
        quiz: [
          {
            question: 'What are the main types of networks?',
            options: ['LAN', 'WAN', 'MAN', 'All of the above'],
            correctAnswer: 'All of the above',
          },
          {
            question: 'What are the main types of networks?',
            options: ['LAN', 'WAN', 'MAN', 'All of the above'],
            correctAnswer: 'All of the above',
          },
          {
            question: 'What are the main types of networks?',
            options: ['LAN', 'WAN', 'MAN', 'All of the above'],
            correctAnswer: 'All of the above',
          },
          {
            question: 'What are the main types of networks?',
            options: ['LAN', 'WAN', 'MAN', 'All of the above'],
            correctAnswer: 'All of the above',
          },
        ],
      },
    ],
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
  nextModule: dummyModules[1].id,
  teacher: 'Dr. Raj Shyam Sherpa',
};

export const dummyMockTest: TestType[] = [
  {
    id: '1',
    duration: '2 hours',
    image: Mock.mock3,
    name: 'ILETS Reading Mock Preparation Test',
    questions: '20',
  },
  {
    id: '2',
    duration: '3 hours',
    image: Mock.mock1,
    name: 'Engineering Mock Preparation Test',
    questions: '100',
  },
  {
    id: '3',
    duration: '3 hours',
    image: Mock.mock2,
    name: 'PTE Reading Mock Preparation Test',
    questions: '20',
  },
  {
    id: '4',
    duration: '3 hours',
    image: Mock.mock4,
    name: 'LokSewa Mock Preparation Test',
    questions: '40',
  },
  {
    id: '9',
    duration: '2 hours',
    image: Mock.mock3,
    name: 'ILETS Reading 3 Mock Preparation Test',
    questions: '20',
  },
  {
    id: '10',
    duration: '3 hours',
    image: Mock.mock1,
    name: 'Engineering 3 Mock Preparation Test',
    questions: '100',
  },
  {
    id: '11',
    duration: '3 hours',
    image: Mock.mock2,
    name: 'PTE Reading 3 Mock Preparation Test',
    questions: '20',
  },
  {
    id: '12',
    duration: '3 hours',
    image: Mock.mock4,
    name: 'LokSewa Mock 3 Preparation Test',
    questions: '40',
  },
  {
    id: '13',
    duration: '2 hours',
    image: Mock.mock3,
    name: 'ILETS Reading 4 Mock Preparation Test',
    questions: '20',
  },
  {
    id: '14',
    duration: '3 hours',
    image: Mock.mock1,
    name: 'Engineering 5 Mock Preparation Test',
    questions: '100',
  },
  {
    id: '7',
    duration: '3 hours',
    image: Mock.mock2,
    name: 'PTE Reading 2 Mock Preparation Test',
    questions: '20',
  },
  {
    id: '8',
    duration: '3 hours',
    image: Mock.mock4,
    name: 'LokSewa 2 Mock Preparation Test',
    questions: '40',
  },
];

export const dummyMockQuestion: TestQuestion[] = [
  {
    id: '1',
    question: 'What is the capital of Nepal?',
    options: ['Kathmandu', 'Pokhara', 'Biratnagar', 'Lalitpur'],
    answer: 'Kathmandu',
    explanation: 'Kathmandu is the capital city of Nepal.',
  },
  {
    id: '2',
    question: 'What is the capital of India?',
    options: ['Kathmandu', 'New Delhi', 'Mumbai', 'Chennai'],
    answer: 'New Delhi',
    explanation: 'New Delhi is the capital city of India.',
  },
  {
    id: '3',
    question: 'What is the capital of China?',
    options: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'],
    answer: 'Beijing',
    explanation: 'Beijing is the capital city of China.',
  },
  {
    id: '4',
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Osaka', 'Kyoto', 'Hiroshima'],
    answer: 'Tokyo',
    explanation: 'Tokyo is the capital city of Japan.',
  },
  {
    id: '5',
    question: 'What is the capital of Australia?',
    options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'],
    answer: 'Canberra',
    explanation: 'Canberra is the capital city of Australia.',
  },
  {
    id: '6',
    question: 'What is the capital of USA?',
    options: ['Washington D.C.', 'New York', 'Los Angeles', 'Chicago'],
    answer: 'Washington D.C.',
    explanation: 'Washington D.C. is the capital city of the United States.',
  },
  {
    id: '7',
    question: 'What is the capital of Canada?',
    options: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'],
    answer: 'Ottawa',
    explanation: 'Ottawa is the capital city of Canada.',
  },
  {
    id: '8',
    question: 'What is the capital of France?',
    options: ['Paris', 'Marseille', 'Lyon', 'Toulouse'],
    answer: 'Paris',
    explanation: 'Paris is the capital city of France.',
  },
  {
    id: '9',
    question: 'What is the capital of Germany?',
    options: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
    answer: 'Berlin',
    explanation: 'Berlin is the capital city of Germany.',
  },
  {
    id: '10',
    question: 'What is the capital of Italy?',
    options: ['Rome', 'Milan', 'Naples', 'Turin'],
    answer: 'Rome',
    explanation: 'Rome is the capital city of Italy.',
  },
];

export const dummyCategories2: CategoryType[] = [
  {
    id: '1',
    name: 'Mock Test',
  },
  {
    id: '2',
    name: 'Language Test',
  },
  {
    id: '3',
    name: 'ILETS',
  },
  {
    id: '4',
    name: 'Abroad Prep',
  },
];

export const dummyMockTestDetail: TestDetailType = {
  id: '1',
  image: Mock.mock2,
  duration: '3 hours',
  name: 'ILETS Reading Mock Preparation Test',
  questions: dummyMockQuestion,
  lastScore: '0',
  categories: dummyCategories2,
  description: `<div>
    <p><strong>Test Title:</strong> IELTS Reading Practice Test</p>
    
    <p><em>Test Designed By:</em> John Smith</p>
    
    <p>This practice test is designed to help you prepare for the <strong>IELTS Reading</strong> exam. It includes three sections, each with a variety of question types that you might encounter in the actual test.</p>
    
    <h3><strong>Test Structure:</strong></h3>
    <ul>
        <li><strong>Section 1:</strong> Passage 1 - 13 questions</li>
        <li><strong>Section 2:</strong> Passage 2 - 13 questions</li>
        <li><strong>Section 3:</strong> Passage 3 - 14 questions</li>
    </ul>
    
    <p><strong>Question Types:</strong></p>
    <ul>
        <li>Multiple Choice</li>
        <li>True/False/Not Given</li>
        <li>Matching Headings</li>
        <li>Sentence Completion</li>
        <li>Short Answer Questions</li>
    </ul>
    
    <p><strong>Time Allowed:</strong> 60 minutes</p>
    
    <p><strong>Instructions:</strong> You are required to read the passages carefully and answer all the questions. Make sure to manage your time effectively and review your answers before submitting.</p>
    
    <p><strong>Scoring:</strong> Each correct answer will award you one mark. Your total score will be converted to the IELTS 9-band scale.</p>
    
    <p><strong>Good Luck!</strong> Focus, read carefully, and do your best!</p>
</div>
`,
};

export const mockFilterResults = [
  {
    id: '1',
    name: 'LokSewa Preparation 1',
    type: 'courses',
    difficulty: 'Beginner',
    duration: '100 Hours',
    categories: ['Cloud', 'Server'],
  },
  {
    id: '2',
    name: 'LokSewa Preparation 2',
    type: 'courses',
    difficulty: 'Intermediate',
    duration: '100 Hours',
    categories: ['Cloud', 'Server'],
  },
  {
    id: '3',
    name: 'LokSewa Preparation 3',
    type: 'courses',
    difficulty: 'Advanced',
    duration: '100 Hours',
    categories: ['Cloud', 'Server'],
  },
  {
    id: '4',
    name: 'ILETS Mock Test 1',
    type: 'tests',
    difficulty: 'Beginner',
    duration: '2 Hours',
    categories: ['ILETS', 'Language Test'],
  },
  {
    id: '5',
    name: 'ILETS Mock Test 2',
    type: 'tests',
    difficulty: 'Intermediate',
    duration: '2 Hours',
    categories: ['ILETS', 'Language Test'],
  },
  {
    id: '6',
    name: 'ILETS Mock Test 3',
    type: 'tests',
    difficulty: 'Advanced',
    duration: '2 Hours',
    categories: ['ILETS', 'Language Test'],
  },
  {
    id: '7',
    name: 'PTE Mock Test 1',
    type: 'tests',
    difficulty: 'Beginner',
    duration: '2 Hours',
    categories: ['PTE', 'Language Test'],
  },
  {
    id: '8',
    name: 'PTE Mock Test 2',
    type: 'tests',
    difficulty: 'Intermediate',
    duration: '2 Hours',
    categories: ['PTE', 'Language Test'],
  },
  {
    id: '9',
    name: 'PTE Mock Test 3',
    type: 'tests',
    difficulty: 'Advanced',
    duration: '2 Hours',
    categories: ['PTE', 'Language Test'],
  },
  {
    id: '10',
    name: 'MERN Stack Course',
    type: 'courses',
    difficulty: 'Intermediate',
    duration: '100 Hours',
    categories: ['Web Development'],
  },
];

export const mockUsers: UserType[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    password: 'testtest',
  },
];

export const courses: CourseHistory[] = [
  {
    id: 1,
    title: 'LokSewa Preparation 1',
    nextModule: 'How to crack Loksewa 101',
    lastModule: 'Introduction',
    progress: 70,
  },
  {
    id: 2,
    title: 'LokSewa Preparation 2',
    nextModule: 'Advanced Strategies ',
    lastModule: 'Module 2',
    progress: 50,
  },
  {
    id: 3,
    title: 'LokSewa Preparation 3',
    nextModule: 'Practice Techniques',
    lastModule: 'Module 3',
    progress: 90,
  },
  {
    id: 4,
    title: 'LokSewa Preparation 4',
    nextModule: 'Exam Day Tips',
    lastModule: 'Module 4',
    progress: 30,
  },
];

export const tests: TestHistory[] = [
  {
    id: 1,
    title: 'IELTS Reading Mock Test 1',
    date: '2023-08-30',
    score: 80,
    totalQuestions: 50,
    duration: '3 hours',
  },
  {
    id: 2,
    title: 'IELTS Reading Mock Test 2',
    date: '2023-08-25',
    score: 90,
    totalQuestions: 40,
    duration: '2.5 hours',
  },
  {
    id: 3,
    title: 'IELTS Reading Mock Test 3',
    date: '2023-08-20',
    score: 75,
    totalQuestions: 60,
    duration: '3.5 hours',
  },
  {
    id: 4,
    title: 'IELTS Reading Mock Test 4',
    date: '2023-08-15',
    score: 85,
    totalQuestions: 55,
    duration: '3 hours',
  },
];
