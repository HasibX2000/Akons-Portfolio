interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
  experience: string;
}

interface CourseStats {
  enrolled: number;
  rating: number;
  reviews: number;
}

interface Feedback {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const instructor: Instructor = {
  name: "Akon M Hasib",
  role: "Email Design Expert",
  bio: "Professional email designer with over 5 years of experience. Worked with major brands and delivered 500+ successful email campaigns.",
  image: "/images/instructor.jpg",
  experience: "5+ years in Email Design & Development",
};

const commonFeedback: Feedback[] = [
  {
    id: 1,
    name: "Farzana Ahmed",
    rating: 5,
    comment: "Excellent course! The instructor explains complex concepts in a very simple way.",
    date: "March 15, 2024",
  },
  {
    id: 2,
    name: "Mahbubur Rahman",
    rating: 5,
    comment: "Very practical approach. I learned a lot and immediately applied it to my work.",
    date: "March 10, 2024",
  },
  {
    id: 3,
    name: "Rahat Hossain",
    rating: 4,
    comment: "Great content and structure. Would recommend to anyone starting with email design.",
    date: "March 5, 2024",
  },
];

const requirements = [
  "A computer (Windows/Mac/Linux)",
  "Basic understanding of Computer & Internet",
  "Text editor (VS Code recommended)",
  "Internet connection",
];

export const courses = [
  {
    id: 1,
    title: "Email Design Fundamental",
    description:
      "Master the fundamentals of email design and learn how to create effective, responsive emails that convert",
    price: 999,
    image: "/images/courses/email-design.png",
    level: "Beginner" as const,
    type: "Recorded" as const,
    slug: "email-design-fundamental",
    duration: "6 Hours 40 Minutes",
    totalLessons: 35,
    curriculum: [
      {
        title: "Module 01 - HTML",
        lessons: [
          "Introduction to HTML",
          "Getting Ready Your Setup",
          "Basic HTML Elements",
          "Heading & Paragraph",
          "HTML Hyperlinks",
          "Images",
          "HTML Comments, Lists, Entities, Symbols",
          "HTML Tables",
        ],
      },
      {
        title: "Module 02 - Introduction to CSS",
        lessons: [
          "CSS Introduction",
          "CSS Color, Background Color",
          "CSS Borders",
          "CSS Padding",
          "CSS Height, Width & Max-Width",
          "CSS Box Model",
          "CSS Text Formatting",
          "CSS Fonts",
          "CSS The Display Property",
          "CSS Responsive Media Query",
          "CSS Dark Mode Media Query",
        ],
      },
      {
        title: "Module 03 - Email Design Fundamental Theory",
        lessons: [
          "Creating Boilerplate Template",
          "Fluid Layout System",
          "Responsive Layout System",
          "Hybrid Layout System",
          "Creating Content Block",
          "Creating a Button Properly",
          "Create Social Media Menu",
          "Create Modern Footer Layouts",
        ],
      },
      {
        title: "Module 04 - Design A Complete Email Template",
        lessons: [
          "Introduction",
          "Project Setup",
          "Header Section",
          "Feature Section",
          "Coupon & Footer Hero",
          "Gallery Section",
          "Footer & Social Media",
          "Compatibility & Dark Mode",
        ],
      },
    ],
    features: ["24/7 Lifetime Access", "Project Files Included", "Community Support"],
    instructor: instructor,
    stats: {
      enrolled: 70,
      rating: 4.8,
      reviews: 30,
    },
    feedback: commonFeedback,
    requirements: requirements,
  },
  {
    id: 2,
    title: "Email Design With HTML & CSS",
    description:
      "Learn professional email development using HTML & CSS. Create custom, responsive email templates from scratch",
    price: 2999,
    image: "/images/courses/email-marketing.png",
    level: "Intermediate" as const,
    type: "Recorded" as const,
    slug: "email-design-with-html-css",
    duration: "19 Hours 20 Minutes",
    totalLessons: 98,
    curriculum: [
      {
        title: "Module 01 - Introduction to HTML",
        lessons: ["Total Videos: 8"],
      },
      {
        title: "Module 02 - Introduction to CSS",
        lessons: ["Total Videos: 11"],
      },
      {
        title: "Module 03 - Fundamental Theory of Email Design",
        lessons: ["Total Videos: 8"],
      },
      {
        title: "Module 04 - Designing a Complete Email Template",
        lessons: ["Total Videos: 8"],
      },
      {
        title: "Module 05 - Design Idea Generation",
        lessons: ["Total Videos: 2"],
      },
      {
        title: "Module 06 - Converting Design Concepts to HTML and CSS",
        lessons: ["Total Videos: 7"],
      },
      {
        title: "Module 07 - Introduction to Our Exclusive Extension",
        lessons: ["Total Videos: 9"],
      },
      {
        title: "Module 08 - Email Template from PSD 01",
        lessons: ["Total Videos: 6"],
      },
      {
        title: "Module 09 - Email Template from PSD 02",
        lessons: ["Total Videos: 6"],
      },
      {
        title: "Module 10 - Email Template from PSD 03",
        lessons: ["Total Videos: 7"],
      },
      {
        title: "Module 11 - Email Template from PSD 04",
        lessons: ["Total Videos: 4"],
      },
      {
        title: "Module 12 - Email Template from PSD 05",
        lessons: ["Total Videos: 7"],
      },
      {
        title: "Module 13 - Email Template from PSD 06",
        lessons: ["Total Videos: 9"],
      },
      {
        title: "Module 14 - Email Template from PSD 07",
        lessons: ["Total Videos: 1"],
      },
      {
        title: "Module 15 - How to Create Complex Designs",
        lessons: ["Total Videos: 2"],
      },
      {
        title: "Module 16 - Live Client Email Template Design",
        lessons: ["Total Videos: 1"],
      },
      {
        title: "Module 17 - Email Template Design from Figma",
        lessons: ["Total Videos: 1"],
      },
    ],
    features: ["Real-world Projects", "Community Support", "Special Extensions"],
    instructor: instructor,
    stats: {
      enrolled: 350,
      rating: 4.9,
      reviews: 125,
    },
    feedback: commonFeedback,
    requirements: requirements,
  },
  {
    id: 3,
    title: "Advanced Email Development",
    description:
      "Take your email development skills to the next level with advanced techniques and modern approaches",
    price: 4999,
    image: "/images/courses/advanced-email.png",
    level: "Advanced" as const,
    type: "Live" as const,
    slug: "advanced-email-development",
    duration: "4-5 Weeks",
    totalLessons: 15,
    curriculum: [
      {
        title: "What you will learn",
        lessons: [
          "Basics Of Email Design",
          "Email Design Tools",
          "Email Design Best Practices",
          "MailChimp Template Editor",
          "MailChimp Editor Blocks",
          "MailChimp Template Design",
          "Constant Contact Template Editor",
          "Constant Contact Editor Blocks",
          "Constant Contact Template Design",
          "Adobe Photoshop for Custom Assets Or Banner Design",
          "Fiverr For Freelancing",
        ],
      },
    ],
    features: ["Live Class", "Advanced Projects", "2 Months Hands On Support"],
    instructor: instructor,
    stats: {
      enrolled: "N/A",
      rating: "N/A",
      reviews: "N/A",
    },
    feedback: null,
    requirements: [
      "A computer (Windows/Mac/Linux)",
      "Basic understanding of Computer & Internet",
      "Text editor (VS Code recommended)",
      "Internet connection",
      "Microphone",
      "Dedication",
      "Time For Practice",
    ],
  },
];
