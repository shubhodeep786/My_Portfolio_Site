import {
  Billion,
  Medicaps,
  Aloysius,
  mobile,
  backend,
  creator,
  web,
  python,
  javascript,
  typescript,
  html,
  nestjs,
  nextjs,
  express,
  java,
  springboot,
  spring,
  hibernets,
  rabbitmq,
  solidity,
  Ethersjs,
  jenkins,
  css,
  reactjs,
  redux,
  nodejs,
  postgres,
  mongodb,
  git,
  docker,
  carrent1,
  carrent,
  jobit,
  tripguide,
  dsa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack",
    icon: web,
  },
  {
    title: "Java Full Stack",
    icon: mobile,
  },
  {
    title: "Blockchain Development",
    icon: backend,
  },
  {
    title: "Microservices",
    icon: creator,
  },
];

const technologies = [
  //Problem Solving
  //1
 /*  {
    name: "Data Structures & Algorithms",
    icon: dsa,
  }, */
  //Languages
  //2
  {
    name: "JavaScript",
    icon: javascript,
  },
  //3
  {
    name: "TypeScript",
    icon: typescript,
  },
  //4
  {
    name: "Java",
    icon: java,
  },
  //5
  {
    name: "Python",
    icon: python,
  },
  //6
  {
    name: "Solidity",
    icon: solidity,
  },
  //7
  //Front-End
  /* {
    name: "HTML 5",
    icon: html,
  },
  //8
  {
    name: "CSS 3",
    icon: css,
  }, */
  //9
  {
    name: "React JS",
    icon: reactjs,
  },
  //10
  //Front-End Frameworks
  /* {
    name: "Next js",
    icon: nextjs,
  },
  {
    name: "Reduxjs",
    icon: redux,
  }, */
  //Backend-Technologies
  /* {
    name: "Node JS",
    icon: nodejs,
  }, */
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Spring",
    icon: spring,
  },
  /* {
    name: "Springboot",
    icon: springboot,
  }, */
  /* {
    name: "Hibernate",
    icon: hibernets,
  }, */
  //DataBases
  /* {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgres,
  }, */
  /* {
    name: "Three JS",
    icon: threejs,
  }, */
  //Web3 Libraries
  /* {
    name: "Ethers Js",
    icon: Ethersjs,
  }, */
  //Microservices
/*   {
    name: "Rabbitmq",
    icon: rabbitmq,
  }, */
  //Devops-Tools
 /*  {
    name: "Jenkins",
    icon: jenkins,
  }, */
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const education = [
  {
    title: "Bachelors in Computer Science",
    school_name: "Medicaps University , Indore",
    icon: Medicaps,
    iconBg: "#383E56",
    date: "August 2019 - August 2023",
    points: [
      "Completed Bachelor's degree in Computer Science with a CGPA of 7.55/10.",
      "Gained comprehensive knowledge and practical experience in various programming languages, including Java, Python, and JavaScript.",
      "Studied and applied concepts of Database Management Systems (DBMS), Operating Systems (OS), and Computer Networking.",
      "Successfully completed coursework in computer science fundamentals, algorithms, data structures, and software engineering principles.",
      "Developed skills in problem-solving, critical thinking, and logical reasoning through various coding assignments and projects.",
      "Collaborated with peers on team projects, fostering effective communication and teamwork.",
      "Actively participated in code reviews, providing valuable feedback to fellow students and enhancing the quality of software development.",
    ],
  },
  {
    title: "Higher Secondary Education",
    school_name: "St. Aloysius Senior Secondary School ,Jabalpur",
    icon: Aloysius,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Aug 2019",
    points: [
      "Successfully completed higher secondary education with a percentage of 63.50%.",
      "Studied core subjects including Physics, Chemistry, and Mathematics, building a strong foundation in the sciences.",
      "Developed problem-solving and analytical skills through coursework and practical experiments.",
      "Demonstrated proficiency in mathematics and its applications, especially in the context of scientific and engineering principles.",
      "Participated in extracurricular activities, fostering teamwork, leadership, and time management skills.",
    ],
  },
  {
    title: "Secondary Education",
    school_name: "St. Aloysius Senior Secondary School ,Jabalpur",
    icon: Aloysius,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Aug 2017",
    points: [
      "Completed secondary education with a CGPA of 8.8.",
      "Engaged in a range of co-curricular activities, including participation in science exhibitions.",
      "Demonstrated a keen interest in scientific exploration and innovation during science exhibitions.",
      "Developed presentation and communication skills through showcasing projects and interacting with peers and judges.",
      "Actively engaged in academic pursuits, laying a strong foundation for further education in the sciences.",
    ],
  },
];

const experiences = [
  {
    title: "Full Stack  Developer (Full-Time)",
    company_name:
      "FOURTY SEVEN BILLION INFORMATION TECHNOLOGIES PRIVATE LIMITED",
    icon: Billion,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using Java, Python, and React.js, with a focus on microservices architecture.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility using frameworks like React.js, Next.js, and Nest.js.",
      "Utilizing TypeORM and Prisma for efficient and seamless database operations.",
      "Working on multiple projects within a monorepo environment, ensuring efficient code organization and reusability.",
      "Participating in code reviews and providing constructive feedback to other developers, promoting best practices and code quality.",
    ],
  },
  {
    title: "Full Stack Blockchain Developer (Intern)",
    company_name:
      "FOURTY SEVEN BILLION INFORMATION TECHNOLOGIES PRIVATE LIMITED",
    icon: Billion,
    iconBg: "#383E56",
    date: "January 2023 - June 2023",
    points: [
      "Developing and maintaining smart contracts on multiple blockchains, including Ethereum, Avalanche, and Polygon.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality blockchain solutions.",
      "Implementing blockchain technology and protocols to build decentralized applications (DApps) and blockchain-based systems.",
      "Working on the development of the Metaplex Candy Machine for non-fungible tokens (NFTs), ensuring seamless user experiences and functionality.",
      "Participating in code reviews and providing constructive feedback to other developers in the blockchain space.",
    ],
  },
];

const projects = [
  {
    name: "Multichain Cryptocurrency Swap",
    description:
      "Multichain cryptocurrency swap enables the exchange of digital assets across different blockchain networks.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Rest Apis",
        color: "green-text-gradient",
      },
      {
        name: "Next UI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent1,
    source_code_link:
      "https://drive.google.com/file/d/1LmU0ULcTYM4__Nh0xTUd2_yw846ixWqM/view?usp=drive_link",
  },
  {
    name: "Notifcation Server With Microservies",
    description:
      "A notification server with microservices provides a scalable and modular infrastructure for managing and delivering notifications in a distributed system.",
    tags: [
      {
        name: "Nest Js",
        color: "blue-text-gradient",
      },
      {
        name: "Rest Api",
        color: "green-text-gradient",
      },
      {
        name: "Monorepos",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://drive.google.com/file/d/1NLdPriSx5r6gOner1naxG_aHrOrcp41p/view?usp=sharing",
  },
  {
    name: "Asset Tokenization Platform",
    description:
      "I have worked on a asset tokenization platform using Next.js, Solidity, and GraphQL for seamless and secure digital asset representation.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Next Js",
        color: "green-text-gradient",
      },
      {
        name: "Graphql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://uniland.47billion.com/",
  },
];

export { services, technologies, education, experiences, projects };
