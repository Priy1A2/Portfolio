export const projects = [

  {
    id: 0, 
    title: 'ChatApp', 
    description: 'A full-stack real-time chat application built with the MERN stack and Socket.io, featuring secure JWT-based authentication, efficient state management with Zustand, and real-time online user tracking for a smooth messaging experience.',
    // image: 'YOUR_IMAGE_URL_HERE', 
    github: 'https://github.com/Priy1A2/Synverse', 
    // live: 'YOUR_LIVE_LINK_HERE',
    techStack: 'MongoDB, Express, React, Node.js, Socket.io, Zustand, Tailwind CSS'
  },

  { 
    id: 1, 
    title: 'Intelligent IDE', 
    description: 'An AI-assisted web-based IDE built using Flask and modern web technologies, integrating the Gemini API to support code generation, debugging, and testing, with secure API handling and OAuth 2.0-based authentication.',
    // image: 'YOUR_IMAGE_URL_HERE', 
    github: 'https://github.com/Priy1A2/Intelligent-ide-1-', 
    // live: 'YOUR_LIVE_LINK_HERE',
    techStack: 'Python, Flask, JavaScript, HTML, CSS, PostgreSQL, Gemini API'
}
];




export const skills = [
  // Languages
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'C/C++', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'Python', category: 'Languages' },

  // Frameworks & Libraries
  { name: 'React', category: 'Frameworks & Libraries' },
  { name: 'Node.js', category: 'Frameworks & Libraries' },
  { name: 'Express.js', category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries' },

  // Technologies & Tools
  { name: 'MySQL', category: 'Technologies & Tools' },
  { name: 'MongoDB', category: 'Technologies & Tools' },
];


export const experiences = [
  {
    id: 0,
    role: 'Associate Software Developer Intern',
    company: 'Google',
    team: 'Google Ads',
    location: 'Hyderabad, India',
    period: 'June 2025 – August 2025',
    description:
      'Worked on customer-facing features for a large-scale Flutter application, improving data accessibility and UI/UX workflows. Built production-ready components, optimized data retrieval, and collaborated closely with engineers to enhance performance and usability.',
    highlights: [
      'Developed an advanced @mention feature and a filterable dropdown handling 1,000+ key-value pairs',
      'Improved data retrieval speed through testing, debugging, and bug fixes in production',
      'Enhanced UI/UX by consolidating data access into a single trigger, reducing navigation overhead',
      'Contributed to scalable application architecture used by internal support teams'
    ],
    image: '/google.png',
    techStack: 'Flutter, AngularDart, Internal Google Tools'
  }

]

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'Indian Institute of Information Technology, Pune(IIIT Pune)',
    period: 'August 2023 - May 2027',
    description: 'Focused on software engineering and web technologies.',
  },
]