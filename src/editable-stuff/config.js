// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "JaeHyun",
  middleName: "",
  lastName: "JOO",
  message: " 기타치고 코딩하는 수상한 경영학도 ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/JaeHyun-JOO-SKKU",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/ju_icy_/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/@SKKUGuitar",
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
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jjh.jpg"),
  imageSize: 375,
  message: (
    <span>
      My name is JaeHyun JOO.
      <br /> <br />
      I have been enrolled at Sungkyunkwan University since 2017. 
      <br />
      My primary major is Business Administration, and I have been double majoring in Software Engineering since 2020.
      <br />
      <br />
      I played as a guitarist for a band called Springbuck for three years, and I continue to pursue music as a hobby through YouTube.
      <br />
      <br />
      Based on my knowledge in Business Administration and Software Engineering, I am working hard to become a project manager at an IT platform company.
      <br />
      <br />
    </span>
  ),
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "JaeHyun-JOO-SKKU",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Education",
  message: (
    <span>
      <strong>2017</strong>: Enrolled in the Department of <strong>Business Administration</strong> at Sungkyunkwan University (Bachelor's degree) 
      <br />
      <br />
      <strong>2020</strong>: Added a double major in <strong>Software Engineering</strong>(Bachelor's degree)
      <br />
      <br />
      <strong>2020</strong>: Completed my Bachelor's degree in Business Administration (Concentration in Finance track, including courses in Financial Management, International Financial Management, and Investment Theory)
      <br />
      <br />
      <strong>2023</strong>: Expected to complete my Bachelor's degree in Software Engineering in December
      <br />
      <br />
      <strong>2024</strong>: Anticipated graduation in February
    </span>
  ),
  images: [
    { 
      img: require("../editable-stuff/ba.JPG"), 
      label: (
        <span>
          Primary Major: <br />Business Administration
        </span>
      ),
      paragraph: "I made many good friends and was able to learn the knowledge and mindset required for being a manager." 
    },
    { 
      img: require("../editable-stuff/soft.JPG"), 
      label: "Double Major: Software Engineering", 
      paragraph: "Again, I met wonderful friends and it helped me to concretize my dream of becoming an IT platform projuct manager." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS", value: 90 },
    { name: "JavaScript", value: 70 },
    { name: "Python", value: 60 },
    { name: "Kotlin", value: 60 },
    { name: "Data Structures", value: 60 },
    { name: "React", value: 55 },
    { name: "C/C++", value: 40 },
    { name: "SQL", value: 40 },
  ],
  softSkills: [
    { name: "Empathy", value: 95 },
    { name: "Collaboration", value: 90 },
    { name: "Creativity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Goal-Oriented", value: 80 },

    { name: "Positivity", value: 75 },
    { name: "Problem Solving", value: 70 },
    { name: "Guitar-play", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: (
    <span>
      I'm currently looking for full-time Project Management opportunities! 
      <br />
      If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at
      <br />
    </span>
  ),

  email: "xhzjtm117@g.skku.edu",
};

const experiences = {
  show: true,
  heading: "Achievements",
  data: [
    {
      role: '2018 EMERGENZA Rock Festival',
      companylogo: require('../assets/img/emergenza.png'),
      date: '4th Place',
      category: 'Band',
    },
    {
      role: '2018 Chungju Rock Festival',
      companylogo: require('../assets/img/chung.png'),
      date: '3th Place',
      category: 'Band',
    },
    {
      role: '2018 Dongducheon Rock Festival',
      companylogo: require('../assets/img/dong.png'),
      date: '4th Place',
      category: 'Band',
    },
    {
      role: '2020 Campus Song Festival',
      companylogo: require('../assets/img/campus.png'),
      date: 'TOP10',
      category: 'Band',
    },
    {
      role: '2021 Finding the Rising Star Final',// Here Add Company Name
      companylogo: require('../assets/img/hwasung.png'),
      date: '3rd Place',
      category: 'Band',
    },
    {
      role: '2018 1st Single Album release',
      companylogo: require('../assets/img/wall.png'),
      date: 'The Wall',
      category: 'Album',
    },
    {
      role: '2021 2nd Single Album release',
      companylogo: require('../assets/img/fade.png'),
      date: 'Fade Away',
      category: 'Album',
    },
    {
      role: '2022 SKKU Capstone Design Contest',
      companylogo: require('../assets/img/capstone.png'),
      date: '1st Place',
      category: 'Coding',
    },
  ]
}

// Blog SECTION
const blog = {
  show: false,
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog };
