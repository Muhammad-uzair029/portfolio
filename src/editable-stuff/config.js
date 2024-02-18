// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Muhammad",
  middleName: "",
  lastName: "Uzair",
  message: "Empowering Your Business Growth with Innovative Software Solutions",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Muhammad-uzair029",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100009180169129",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/muhammad-uzair-b20452168/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/pp-profile.jpeg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pp-profile.jpeg"),
  imageSize: 375,
  message:
    "Hello, I am a software engineer with a strong foundation in full-stack web development, boasting 3 years of experience in crafting scalable, secure, and reliable web applications across a variety of frameworks and technologies. My journey is marked by a continuous quest for knowledge, allowing me to solve complex problems and adapt to new challenges with ease. I take pride in developing high-quality code that adheres to best practices and industry standards, ensuring that every project I undertake is executed with precision and excellence. My passion lies in turning innovative ideas into reality through meticulous coding and collaborative teamwork, always aiming to push the boundaries of what's possible in the digital world.",
  resume:
    "https://docs.google.com/document/d/10jziF7Qbd_P1SlF8JJDSCX3u6hbQyzb70Kfwi7mhu7o/edit?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Muhammad-uzair029", // Update your GitHub username if different
  reposLength: 6, // Adjust based on the number of projects you want to display
  specificRepos: [], // Add specific repo names here if you want
};

// LEADERSHIP SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Throughout my career, I've embraced leadership roles, successfully leading a team of five at PureLogics to develop a Shopify app and manage a Shopify store. My daily interactions with clients and proactive issue resolution have been pivotal in meeting project milestones and contributing to our business growth. My commitment extends to participating in technical interview calls, underscoring my role in fostering innovation and team collaboration.",
  images: [],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "MERN Stack", value: 95 },
    { name: "MEAN Stack", value: 90 },
    { name: "GraphQL", value: 85 },
    { name: "Docker", value: 80 },
    { name: "AWS", value: 85 },
    { name: "GCP", value: 80 },
    { name: "Shopify App Development", value: 90 },
    { name: "CI/CD", value: 85 },
  ],
  softSkills: [
    { name: "Leadership", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Project Management", value: 85 },
    { name: "Creativity", value: 90 },
    { name: "Adaptability", value: 95 },
    { name: "Collaboration", value: 90 },
    { name: "Client Engagement", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently exploring new opportunities to bring my expertise in full-stack development and leadership to innovative projects. If you're interested in collaborating or if you have any questions, feel free to reach out to me.",
  email: "muhammaduzair8805@gmail.com", // Update with your email
};

// EXPERIENCES SECTION
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer",
      company: "SoftAims",
      companyUrl: "https://thesoftaims.com/",
      date: "Oct 2023 - Present",
      description:
        "Working as a Software Engineer, I have developed and launched an innovative LinkedIn automation tool. Responsible for planning, delivering features, and fixing bugs within the project. Leading two associate software engineers in their project feature planning and time estimations, while providing them with guidelines on client communication. Embracing the company's values by introducing new ideas and creating products from scratch. Collaborating with the business team to make a positive impact on the business development side.",
    },
    {
      role: "Full Stack Engineer",
      company: "PureLogics",
      companyUrl: "https://purelogics.com/",
      date: "Jun 2023 - Sep 2023",
      description:
        "Led a dynamic team of four, focusing on the development and management of a Shopify app and store, demonstrating commitment to product innovation and operational excellence. Responsible for planning, delivering features and fixing bugs on a project while handling Client Communication and expectations as well. Worked closely with Business Administrators on technical interviews, fostering a collaborative environment that was instrumental in driving business growth and pursuing innovation.",
    },
    {
      role: "Software Engineer",
      company: "Aurora Solutions",
      companyUrl: "https://www.aurorasolutions.io/",
      date: "Aug 2021 - Jun 2023",
      description:
        "Served as a Full Stack Engineer and Mobile App Developer on four fast-paced projects, developing them from scratch with a focus on product performance and security. Two of these projects received funding from Antler. Collaborated with development and testing teams to design scalable solutions, focusing on client functionality requirements. Updated old code bases to modern development standards, improving functionality and proficiently followed agile software development using tools and technologies like Trello, Shortcut, Jira, and Git.",
    },
    // Assuming the role at MGS Apps Technology remains unchanged as it was not mentioned in the narrative
    {
      role: "Flutter Developer",
      company: "MGS Apps Technology",
      date: "Jan 2021 - Jun 2021",
      description:
        "Worked as a Flutter developer focusing on Islamic apps, managed authentication and crashing issues, Firebase and Firestore operations, API integrations, and app testing on Android. Skills: Flutter, Firebase.",
    },
  ],
};

const projects  = {
  show: true,
  heading: "Projects",
  data:
[
  {
    name: "Oryn",
    company: "SoftAims",
    description:
      "Oryn is a LinkedIn automation tool tailored for agencies and sales teams. Responsible for development and launch, enhancing user engagement and simplifying activity management with features like account creation, search functionalities, campaign setup, and automated scheduling. Managed the project from requirement gathering to deployment and post-launch support. Integrated AI for personalized, context-aware professional conversations. Launched 'Business Boost' for premium users, automating engagement with targeted posts to enhance business visibility.",
    technologies:
      "React TS, Node TS, Postgress, AWS (EC2, RDS, S3, Elastic IP), Jenkins",
    link: "http://app.oryn.io/",
  },
  {
    name: "NameGlo",
    company: "PureLogics",
    description:
      "NameGlo is an application designed to facilitate the creation of custom neon signs using both glass and LCD technologies, complete with customizable background covers. Led the development and integration of backend, frontend, and Shopify app components for the entire project. Directed a team of four developers in creation and integration of the app on Shopify. Reviewed pull requests to ensure code quality and adherence to project standards. Made critical architectural decisions and led sprint planning sessions with the client.",
    technologies:
      "React JS, Node JS, MongoDB, Shipment APIs, Shopify App integration",
    link: "https://glostudio.design/",
  },
  {
    name: "Kinfolk",
    company: "Aurora Solutions",
    description:
      "Kinfolk, an Antler-funded project, revolutionizes employee experience platforms for HR/People teams, enhancing their impact throughout the employee lifecycle. Developed the Google Calendar Meeting feature to support various time zones and user slot availability. Deployed the back-end of this feature using Lambda functions and created the complex UI challenges with CSS.",
    technologies:
      "React, Node, AWS App Sync, DynamoDB, GraphQL, AWS Lambda Functions",
    link: "https://www.kinfolkhq.com/",
  },
  {
    name: "Score (NeverOffside)",
    company: "Aurora Solutions",
    description:
      "Score is a football club management platform that organizes events and matches, shares news via SMS and Email, and supports web, native Android, and iOS apps. Responsible for development and integration of new features for both the web and mobile applications (Android). Integrated SMS, Email, and Stripe.",
    technologies:
      "React Js, Node Js, GraphQL, Postgres, Native android (Kotlin)",
    link: "https://neveroffside.com/",
  },
]}



export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  projects,
};