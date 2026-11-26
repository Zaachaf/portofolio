import type { Profile } from "@/types";

export const PROFILE: Profile = {
  name: "Zabihullah Achmad Afghiansyah",
  role: "Web Developer",
  tagline:
    "Informatics Engineering graduate with a strong interest in web development, software testing, and structured problem solving.",
  degree: "Bachelor of Engineering (S.T)",
  bio: [
    "Hello, my name is Zabihullah Achmad Afghiansyah. As a Web Developer and an Informatics Engineering graduate from Universitas Pasundan, I have a deep passion and core focus on web development. I am accustomed to designing, building, and optimizing web applications from front-end interfaces to back-end systems, ensuring that every project delivers reliable performance, clean code architecture, and an optimal user experience.",
    "In addition to my core expertise in web development, I also bring a supporting background in Testing Automation to help ensure application stability and quality. Always enthusiastic about embracing new challenges and delivering functional, high-quality digital solutions.",
  ],

  photo: "/images/profile.jpeg",

  skills: [
    {
      category: "Web Development",
      items: [
        "PHP",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Next.js",
        "Ant Design Vue",
        "Responsive Web Design",
      ],
    },
    {
      category: "Testing & QA",
      items: [
        "Manual QA",
        "API Testing (Postman)",
        "Mobile Testing (Appium)",
        "SonarQube",
      ],
    },
    {
      category: "Game Development",
      items: [
        "2D Game Development",
        "3D Game Development",
        "Game Programming",
        "Raycasting",
        "Audio Processing (FFT)",
        "Finite State Machine",
      ],
    },
    {
      category: "Design Tools",
      items: ["Figma", "Blender", "SketchBook", "Canva"],
    },
    {
      category: "Other Skills",
      items: ["Point of Sale", "Data Entry"],
    },
    {
      category: "Soft Skills",
      items: [
        "Responsible",
        "Adaptable",
        "Teamwork",
        "Time Management",
        "Detail-Oriented",
        "Fast Learner",
      ],
    },
  ],

  socials: [
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=zaachaf@gmail.com",
    },
    { label: "Instagram", href: "https://instagram.com/apgiiii" },
    { label: "WhatsApp", href: "https://wa.me/6287838182550" },
    { label: "LinkedIn", href: "https://linkedin.com/in/zabihullah-achmad" },
    { label: "Github", href: "https://github.com/Zaachaf" },
  ],
  education: [
    {
      institution: "Universitas Pasundan",
      location: "Bandung, West Java",
      major: "Bachelor of Informatics Engineering",
      gpa: "GPA 3.38 / 4.00",
      logo: "/images/logo-universitas.png",
    },
  ],
  experience: [
    {
      organization: "PT Safna Telematika Indonesia",
      location: "South Jakarta, DKI Jakarta",
      role: "Web Developer",
      period: "Internship program · 1 month",
      details: [
        {
          title: "What I Worked On",
          points: [
            "Independently developed and implemented merchant features during a 1-month internship program at PT Safna Telematika Indonesia.",
            "Responsible for building the interface and interaction flows of the merchant section using the Vue.js framework.",
          ],
        },
        {
          title: "Challenges Faced",
          points: [
            "Had no prior experience with Vue.js, so I felt very unfamiliar with it and needed to adapt quickly to the framework's syntax, structure, and workflow within the limited 1-month internship timeframe.",
          ],
        },
        {
          title: "How I Handled It",
          points: [
            "Learned intensively on my own and adapted quickly to the new technologies used by the team.",
            "Made the most of my time by immediately applying Vue.js concepts to feature development tasks, while actively researching and troubleshooting independently to resolve technical issues until the merchant feature was completed on time and to a high standard.",
          ],
        },
      ],
      certificates: [
        {
          title: "Internship Certificate",
          file: "/certificates/SKS-safna.png",
        },
      ],
      tags: ["Vue.js"],
    },

    {
      organization: "Universitas Pasundan",
      location: "Bandung, West Java",
      role: "Teaching Assistant",
      details: [
        {
          title: "What I Worked On",
          points: [
            "Served as a Teaching Assistant handling 6 classes per week, focusing on teaching the Game Programming Practicum course.",
            "Responsible for delivering practicum material, guiding students through case studies, answering questions, and directly mentoring students who struggled to understand the material.",
            "Graded regular assignments and tested the end-of-semester final projects for all students in my classes.",
          ],
        },
        {
          title: "Challenges Faced",
          points: [
            "This was my first teaching experience, so I felt unaccustomed at first, and some material details were missed or not delivered as well as they could have been in the early sessions.",
          ],
        },
        {
          title: "How I Handled It",
          points: [
            "Evaluated myself regularly and adapted quickly to the rhythm of the class, and prepared teaching notes and guides so that the material was delivered in a more structured way each week.",
            "Made the most of Q&A and consultation sessions beyond the main material to make sure all important information was still delivered well, and successfully completed a full semester of teaching smoothly.",
          ],
        },
      ],
      certificates: [
        {
          title: "Teaching Assistant Certificate",
          file: "/certificates/Sertifikat-Aslab.pdf",
        },
      ],
    },
  ],
  training: [
    {
      title: "Information and Communication Technology - Workforce Development",
      provider: "Wadhwani Foundation",
      // period: "",
      description: [
        "The JobReady training program from Wadhwani Foundation was delivered flexibly in a self-paced online format, where participants could access module-based learning materials, videos, and interactive exercises through the Wadhwani Skilling digital platform, assess their understanding through self-paced quizzes at the end of each job skills topic, and ultimately earn a certificate of completion after fulfilling all course requirements and assessments.",
      ],
      certificates: [
        {
          title: "JobReady Certificate",
          file: "/certificates/Wadhwani Foundation Certificate - ReadyJob.pdf",
        },
      ],
    },
    {
      title: "Business and Management - Beginner Young Entrepreneurs",
      provider: "Dispora",
      // location: "",
      // period: "",
      details: [
        {
          title: "Talent Mapping & Character Building",
          points: [
            "Understanding personal potential (interests & talents).",
            "Understanding the Cashflow Quadrant (sources of income).",
            "Introduction to the business legalization process.",
            "Building relationship investment (Character Building).",
          ],
        },
        {
          title: "Basic Training (Latsar) Day 1",
          points: [
            "History and fundamentals of photography.",
            "Types of photography and getting to know photography equipment.",
            "Introduction to professional photography certification (BNSP).",
            "Introduction to phone and professional camera features.",
            "Introduction to basic editing tools and archive management.",
            "Introduction to digital marketing funneling and a brief look at AI tools to support creative work.",
          ],
        },
        {
          title: "Basic Training (Latsar) Day 2",
          points: [
            "Income potential in photography and creating a company profile.",
            "Creating a client brief and deliverables.",
            "Creating photographic work with selling value.",
            "Product photography practice.",
            "Architectural photography practice.",
          ],
        },
        {
          title: "Mentoring Day 1",
          points: [
            "Review of hotel architecture and interior photos.",
            "Practice optimizing lighting and photography techniques (product & model).",
            "Review of the business registration number (NIB) assignment from the basic training, and introduction to product labeling.",
            "Product photography for the legalization process.",
            "Financial systems & applications.",
            "Business Model Canvas for photography business owners.",
            "Practice filling out the Business Model Canvas.",
          ],
        },
        {
          title: "Mentoring Day 2",
          points: [
            "Getting to know the creative tourism area (KWK Cibaduyut).",
            "Strategies for creating work for promotional needs.",
            "Photo hunting practice in the Cibaduyut creative tourism area.",
            "Review of street hunting results.",
            "Strategies for distributing work to increase reach.",
            "Review of work and technical aspects of creating a company profile.",
          ],
        },
      ],
      certificates: [
        {
          title: "Latsar Certificate",
          file: "/certificates/Latsar.png",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Simple Food Ordering Website (PHP & MySQL)",
      description:
        "An online food ordering platform designed to provide a smooth and efficient user experience for both customers and administrators. Built on a solid technology stack, the application integrates a range of features to manage orders, users, and data analysis in real time.",
      galleryFolder: "wspm",
      tags: ["PHP", "MySQL", "JavaScript", "AJAX"],
      features: [
        {
          title: "Interactive Admin Dashboard",
          description:
            "The main control center, showing order statistics (total revenue, number of completed orders, etc.) in easy-to-understand visuals. Admins can manage every aspect of the website from here, including menus, categories, and users.",
        },
        {
          title: "Live Search",
          description:
            "Users can quickly find their favorite food. Results appear dynamically as they type, thanks to a responsive JavaScript (AJAX) implementation.",
        },
        {
          title: "Product Sorting & Filters",
          description:
            "Customers can sort products by price (highest or lowest) and by name (A-Z or Z-A) for easier navigation.",
        },
        {
          title: "Complete Order Management",
          description:
            "Admins can view, update the status of (e.g. Processing, Shipped, Completed), and delete orders. Customers can also track their order status through their own accounts.",
        },
        {
          title: "PDF Reports",
          description:
            "The system can generate sales reports in PDF format for a given period, which is useful for business analysis and bookkeeping.",
        },
      ],
      links: [
        {
          label: "Source Code",
          href: "https://github.com/Zaachaf/pw2023_223040119/tree/main/tubes",
        },
      ],
    },
    {
      title: "2D Game: Body Explorer",
      description:
        "Body Explorer is an educational game that my team built to introduce human body anatomy to children in an interactive and fun way. The game is designed with a child-friendly visual style and simple yet informative game mechanics.",
      galleryFolder: "2dbodyexplorer",
      // tags: [""],
    },
    {
      title: "2D Game: Sky Dash",
      description:
        "Sky Dash is a simple arcade game that I developed around fast, easy-to-play gameplay. The player controls an airplane that must keep flying while dodging various obstacles coming from the front.",
      galleryFolder: "2dskydash",
      // tags: [""],
    },
    {
      title: "2D Game: Space Dash",
      description:
        "Space Dash is a space-themed game that combines arcade shooter elements with reflex-based dexterity. The player controls a spaceship that must survive enemy attacks and various objects appearing at random.",
      galleryFolder: "2dspacedash",
      // tags: [""],
      certificates: [
        {
          title: "Best 2D Game Project Certificate",
          file: "/certificates/ofthebest.png",
        },
      ],
    },
    {
      title:
        "AISE Administrator Dashboard - Merchant & Product Management Module",
      description:
        "Developed the travel partner (merchant) and Umrah package management module on the administrator dashboard of the AISE web application, to resolve the problems of manual data verification. The project aims to provide a centralized, interactive, and real-time data management system for company admins.",
      galleryFolder: "aise",
      tags: ["Vue.js", "Ant Design Vue", "Axios", "Figma", "Black Box Testing"],
      featuresTitle: "Responsibilities & Key Contributions",
      features: [
        {
          title: "Interface Implementation",
          description:
            "Translated Figma designs into responsive web pages using Vue.js and Ant Design Vue.",
        },
        {
          title: "CRUD Module Development",
          description:
            "Built data management features for partners (merchants) and Umrah packages: add, view details via modal popup, edit, delete, and data search.",
        },
        {
          title: "API Integration",
          description:
            "Connected the frontend to API services using Axios for real-time data exchange.",
        },
        {
          title: "System Testing",
          description:
            "Performed functional testing using the Black Box Testing method to ensure the application works according to requirements.",
        },
      ],
    },
    {
      title: "Dead Silence",
      description:
        "Premise: the player is trapped in an abandoned building and must collect keys to escape while avoiding Blindghost, a blind ghost with sharp hearing.",
      galleryFolder: "deadsilence",
      tags: ["Audio Processing", "FFT", "Finite State Machine", "Raycast"],
      featuresTitle: "Hybrid Mechanics & Key Features",
      features: [
        {
          title: "Navigation",
          description: "Uses the keyboard (W, A, S, D) and mouse.",
        },
        {
          title: "Vocal & Spatial Actions",
          description:
            'The player speaks keywords ("Open", "Close", "Take", "Read") that are synchronized with the gaze direction (raycast) toward interactive objects.',
        },
        {
          title: "Smart Voice Filter",
          description:
            "Uses audio thresholding (RMS) and an FFT algorithm (90 Hz-1200 Hz) to filter out noise and support a wide range of players without calibration.",
        },
        {
          title: "Reactive AI",
          description:
            "The player's voice acts both as an action trigger and as a threat, allowing the ghost to track and chase the player's position (Finite State Machine).",
        },
      ],
    },
  ],
};

export const CONTACT = {
  phone: "+62 878-3818-2550",
  email: "zaachaf@gmail.com",
  instagram: "@apgiiii",
  linkedin: "zabihullah-achmad",
} as const;
