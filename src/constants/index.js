import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    python,
    postgre,
    c,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    telus, 
    tigo,
    carrent,
    jobit,
    tripguide,
    connect4,
    memeflix,
    quehubo,
    threejs,
    linkedin,
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
    {
      id: "resume",
      title: "Resume",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgreSQL",
      icon: postgre,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "FedEx Call Center Agent",
      company_name: "Telus International",
      icon: telus,
      iconBg: "#E6DEDD",
      date: "July 2019 - December 2019",
      points: [
        "Demonstrating strong communication skills and attention to detail while accurately documenting customer interactions and maintaining high levels of professionalism in a fast-paced call center environment.",
        "Providing exceptional customer service to FedEx customers, effectively addressing inquiries, resolving issues, and ensuring timely delivery solutions.",
        "Utilizing problem-solving skills to handle escalated calls and achieve customer satisfaction while adhering to company policies and procedures.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Milicom | Tigo Guatemala",
      icon: tigo,
      iconBg: "#E6DEDD",
      date: "January 2024 - April 2024",
      points: [
        "Leveraging SQL expertise to craft efficient queries for the creation of essential processes within the Tigo Agile platform, facilitating seamless operations and workflow management.",
        "Playing a key role in the development of APIs for the Tigo platform, contributing to the enhancement of its functionality and performance.",
        "Assisting in the development and maintenance of web applications, ensuring responsive design and optimizing performance for a better user experience.",
      ],
    },
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: tigo,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];

  
  const certificates = [
    {
      certificate:
        "Introduction to SQL, covering database management essentials, queries, and data manipulation techniques.",
      name: "SQL Essential Training",
      designation: "CFO",
      company: "LinkedIn Learning",
      image: linkedin,
    },
    {
      certificate:
       "Understanding NoSQL databases and their advantages over traditional relational databases.",
      name: "NoSQL Essential Training",
      designation: "COO",
      company: "LinkedIn Learning",
      image: linkedin,
    },
    {
      certificate:
       "Comprehensive guide to JavaScript, covering core concepts, advanced features, and practical applications.",
      name: "JavaScript Essential Training",
      designation: "CTO",
      company: "LinkedIn Learning",
      image: linkedin,
    },
  ];
  
   const projects = [
    {
      name: "Connect 4 AI",
      description:
        "A Connect 4 AI utilizing heuristics, minimax, and alpha-beta pruning algorithms for strategic move selection in a competitive gaming environment.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "ai",
          color: "green-text-gradient",
        },
        {
          name: "heuristics",
          color: "pink-text-gradient",
        },
        {
          name: "minimax",
          color: "orange-text-gradient",
        },
      ],
      image: connect4,
      source_code_link: "https://github.com/javim7/Connect4-AI",
    },
    {
      "name": "Memeflix",
      "description": "A streaming service (and Netflix clone) project, featuring database integration with technologies including React, HTML, CSS, MySQL, and AWS.",
      "tags": [
        {
          "name": "react",
          "color": "blue-text-gradient"
        },
        {
          "name": "html",
          "color": "green-text-gradient"
        },
        {
          "name": "css",
          "color": "pink-text-gradient"
        },
        {
          "name": "mysql",
          "color": "orange-text-gradient"
        },
        {
          "name": "aws",
          "color": "white-text-gradient"
        }
      ],
      "image": memeflix,
      "source_code_link": "https://github.com/her20053/Proyecto-2-BD"
    },
    {
      "name": "Quehubo 2.0",
      "description": "A secure chat application featuring end-to-end encryption for individual and group chats, utilizing RSA and AES-128 CBC algorithms.",
      "tags": [
        {
          "name": "mernstack",
          "color": "blue-text-gradient"
        },
        {
          "name": "encryption",
          "color": "green-text-gradient"
        },
        {
          "name": "security",
          "color": "pink-text-gradient"
        },
      ],
      "image": quehubo,
      "source_code_link": "https://github.com/javim7/Proyecto1-Cifrado-Informacion"
    }
  ];
  
  export { services, technologies, experiences, certificates, projects };