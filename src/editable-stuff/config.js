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
    "Hello, my name is Muhammad Uzair. I'm a Full Stack Developer with a robust technical skill set, specialized in the MERN and MEAN stacks, along with proficiency in GraphQL, GCP, Shopify App development, AWS Lambdas, DynamoDB, S3, Docker, and CI/CD practices. Based in Lahore, Pakistan, I've honed my skills through diverse experiences, from developing scalable applications at SoftAims and PureLogics to enhancing cross-platform applications at Aurora Solutions. I'm passionate about leveraging technology to solve complex problems and drive business growth. In my free time, I explore new technologies and contribute to open source projects.",
  resume:
    "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
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
      companylogo: "path/to/softaims/logo", // Update with actual path if available
      date: "Oct 2023 - Present",
    },
    {
      role: "Full Stack Engineer",
      company: "PureLogics",
      companylogo: "path/to/purelogics/logo", // Update with actual path if available
      date: "Jun 2023 - Sep 2023",
      description:
        "Led a team of five in developing a Shopify app and managing a Shopify store. Engaged in daily client interactions to meet project deadlines and contributed to business growth through technical interviews and strategic project management. Skills: Shopify App, MERN Stack, Software Design, Shopify.",
    },
    {
      role: "Software Engineer",
      company: "Aurora Solutions",
      companylogo: "path/to/aurora/solutions/logo", // Update with actual path if available
      date: "Aug 2021 - Jun 2023",
      description:
        "Developed efficient cross-platform applications as a core team member. Focused on creating accessible applications without currency, language, or trend barriers. Skills: Flutter, MongoDB, GCP, React.js, Node.js, GraphQL, Docker, CI/CD, Angular CLI, AWS.",
    },
    {
      role: "Flutter Developer",
      company: "MGS Apps Technology",
      companylogo: "path/to/mgs/apps/technology/logo", // Update with actual path if available
      date: "Jan 2021 - Jun 2021",
      description:
        "Worked as a Flutter developer focusing on Islamic apps, managed authentication and crashing issues, Firebase and Firestore operations, API integrations, and app testing on Android. Skills: Flutter, Firebase.",
    },
  ],
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };