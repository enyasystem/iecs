interface Program {
  name: string;
  level: "Undergraduate" | "Graduate";
  duration: string;
  tuition: string;
  description: string;
}

interface PartnerData {
  name: string;
  slug: string;
  type: string;
  location: string;
  established: string;
  students: string;
  international: string;
  ranking: string;
  description: string;
  longDescription: string;
  image: string;
  campusImages: string[];
  faculties: string[];
  programs: Program[];
  admissionRequirements: {
    undergraduate: string[];
    graduate: string[];
  };
  scholarships: {
    name: string;
    amount: string;
    eligibility: string;
  }[];
  facilities: string[];
  studentLife: string[];
  testimonials: {
    quote: string;
    name: string;
    program: string;
    country: string;
    image: string;
  }[];
  iecsPartnershipBenefits: string[];
}

export const partnerData: PartnerData = {
  name: "University of Toronto",
  slug: "university-of-toronto",
  type: "University",
  location: "Toronto, Ontario",
  established: "1827",
  students: "93,000+",
  international: "25%",
  ranking: "#1 in Canada, #18 Worldwide",
  description:
    "The University of Toronto is a globally top-ranked public research university in Toronto, Ontario, Canada. Founded in 1827, it is known for influential movements and curricula in literary criticism and communication theory, known collectively as the Toronto School.",
  longDescription:
    "The University of Toronto has evolved into Canada's leading institution of learning, discovery and knowledge creation. We are proud to be one of the world's top research-intensive universities, driven to invent and innovate. Our students have the opportunity to learn from and work with preeminent thought leaders through our multidisciplinary network of teaching and research faculty, alumni and partners. The ideas, innovations and actions of more than 600,000 graduates continue to have a positive impact on the world.",
  image:
    "https://images.unsplash.com/photo-1569523276741-567df2a69a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  campusImages: [
    "https://images.unsplash.com/photo-1569523276741-567df2a69a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  ],
  faculties: [
    "Arts & Science",
    "Applied Science & Engineering",
    "Architecture",
    "Music",
    "Medicine",
    "Law",
    "Management",
    "Education",
    "Information",
    "Public Health",
    "Nursing",
  ],
  programs: [
    {
      name: "Computer Science",
      level: "Undergraduate",
      duration: "4 years",
      tuition: "$58,680/year",
      description:
        "The Computer Science program at the University of Toronto is designed to give students a broad foundation in the field, with opportunities to specialize in areas such as artificial intelligence, computer systems, and theory of computation.",
    },
    {
      name: "Business Administration",
      level: "Undergraduate",
      duration: "4 years",
      tuition: "$62,250/year",
      description:
        "The Business Administration program provides students with a comprehensive understanding of business principles and practices, with specializations available in finance, marketing, management, and accounting.",
    },
    {
      name: "Engineering Science",
      level: "Undergraduate",
      duration: "4 years",
      tuition: "$64,810/year",
      description:
        "The Engineering Science program is an elite program that provides students with a rigorous foundation in mathematics, science, and engineering, with opportunities to specialize in various engineering disciplines.",
    },
    {
      name: "MBA",
      level: "Graduate",
      duration: "2 years",
      tuition: "$95,000/year",
      description:
        "The MBA program at Rotman School of Management is designed to develop innovative leaders who can transform business and society. The program emphasizes integrative thinking, responsible leadership, and global perspective.",
    },
    {
      name: "Master of Computer Science",
      level: "Graduate",
      duration: "1-2 years",
      tuition: "$59,320/year",
      description:
        "The Master of Computer Science program allows students to deepen their knowledge in specific areas of computer science, with research opportunities in cutting-edge fields such as artificial intelligence, machine learning, and data science.",
    },
    {
      name: "PhD in Medicine",
      level: "Graduate",
      duration: "4-5 years",
      tuition: "$28,290/year",
      description:
        "The PhD in Medicine program prepares students for careers in medical research, with opportunities to work with world-renowned researchers on groundbreaking medical discoveries and innovations.",
    },
  ],
  admissionRequirements: {
    undergraduate: [
      "Completed secondary education equivalent to Canadian Grade 12",
      "Minimum GPA of 3.6 on a 4.0 scale (or equivalent)",
      "English language proficiency (IELTS: 6.5+, TOEFL iBT: 100+)",
      "Specific subject prerequisites depending on the program",
      "Statement of purpose",
      "Letters of recommendation",
    ],
    graduate: [
      "Completed undergraduate degree from a recognized institution",
      "Minimum GPA of 3.3 on a 4.0 scale (or equivalent)",
      "English language proficiency (IELTS: 7.0+, TOEFL iBT: 93+)",
      "Statement of purpose",
      "Letters of recommendation",
      "CV/Resume",
      "GRE/GMAT scores (for some programs)",
      "Research proposal (for research-based programs)",
    ],
  },
  scholarships: [
    {
      name: "Lester B. Pearson International Scholarship",
      amount: "Full tuition + living expenses",
      eligibility: "International students with exceptional academic achievement and leadership",
    },
    {
      name: "University of Toronto International Scholar Award",
      amount: "$10,000 - $25,000",
      eligibility: "International students with outstanding academic achievement",
    },
    {
      name: "Faculty of Arts & Science International Scholarship",
      amount: "$5,000 - $20,000",
      eligibility: "International students admitted to the Faculty of Arts & Science",
    },
    {
      name: "Engineering International Scholarship",
      amount: "$5,000 - $15,000",
      eligibility: "International students admitted to Engineering programs",
    },
  ],
  facilities: [
    "State-of-the-art research laboratories",
    "Multiple libraries with extensive collections",
    "Modern lecture halls and classrooms",
    "Athletic facilities including gyms, pools, and sports fields",
    "Student residences and housing",
    "Health and wellness centers",
    "Career centers and job placement services",
    "International student support services",
  ],
  studentLife: [
    "400+ student clubs and organizations",
    "Vibrant campus community with events throughout the year",
    "Diverse cultural associations and international student groups",
    "Competitive varsity sports teams",
    "Recreational sports and fitness programs",
    "Arts and cultural performances",
    "Volunteer and community service opportunities",
  ],
  testimonials: [
    {
      quote:
        "Studying at the University of Toronto has been a transformative experience. The academic rigor, diverse community, and abundant resources have prepared me well for my future career.",
      name: "Priya Sharma",
      program: "Computer Science",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "The MBA program at Rotman has exceeded my expectations. The faculty are world-class, the networking opportunities are invaluable, and the curriculum is cutting-edge.",
      name: "Daniel Adeyemi",
      program: "MBA",
      country: "Nigeria",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ],
  iecsPartnershipBenefits: [
    "Priority application processing for IECS students",
    "Application fee waivers",
    "Exclusive scholarship opportunities",
    "Pre-arrival orientation sessions",
    "Guaranteed housing for first-year students",
    "Dedicated academic advisor for IECS students",
  ],
};