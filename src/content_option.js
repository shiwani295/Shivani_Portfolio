import reacticon from "./Asset/img/react.png";
import reduxicon from "./Asset/img/redux.png";
import javascripticon from "./Asset/img/javascript.png";
import tailwindicon from "./Asset/img/tailwindcss.png";
import boostrapicon from "./Asset/img/boot.png";
import htmlicon from "./Asset/img/html.png";
import cssicon from "./Asset/img/css.png";
import firbaseicon from "./Asset/img/firebase.png";
import nextjs from "./Asset/img/nextjs.png";
import git from "./Asset/img/github.png";
import afterarrowpart1icon from "./Asset/img/graph.png";
import gmailicon from "./Asset/img/gmail.png";
import ecommerceicon from "./Asset/img/ecom.png";
import foodicon from "./Asset/img/food.png";
import firebaseicon from "./Asset/img/firebase.png";
import cartimg from "./Asset/whyhire/cart.png";
import emailimg from "./Asset/whyhire/email.png";
import fileuploadimg from "./Asset/whyhire/fileupload.png";
import picuploadimg from "./Asset/whyhire/picupload.png";
import registrationimg from "./Asset/whyhire/registration.png";
import client1logoicon from "./Asset/Clientimg/sharpner.png";
import client2logoicon from "./Asset/Clientimg/theoutrace.png";
import resume from "./Asset/resume/Resume_April.pdf";
import project1 from "./Asset/Portfolioimg/food.png";
import project4 from "./Asset/Portfolioimg/Ecomweb.png";
const meta = {
  title: "Shivani Tiwari",
  description: "I’m ShivaniTIwari Front-end Developer _ Web developer",
};
const footer = {
  reserved: " © 2023 . All Rights Reserved",
};
const socialprofils = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
};

//slider

const sliderheader = {
  text: "Hey It's Me",
  peratext1: "Shivani Tiwari",
  peraspan: "  I'm a Passionate Front End Developer",
  paratest2:
    "with expertise in React js, JavaScript, HTML, CSS, Tailwind css,  MaterialUI, Bootstrap and more. With 30K+ lines of code written,I deliver cutting-edge solutions to bring your revolutionary ideas to life. Let's work together to create something amazing. Contact me today!",
};
const sliderResume = resume;

const sliderbtn = [
  { icon: reacticon },
  { icon: reduxicon },
  { icon: javascripticon },
  { icon: tailwindicon },
  { icon: boostrapicon },
  { icon: htmlicon },
  { icon: cssicon },
];

///After arrow

const Afterarrowcontent = {
  part1: afterarrowpart1icon,
  part2uppertext: "Software to help you move forward,",
  part2uppertextspan: "faster",
  part2lowercontent:
    "Let me make marketing, selling, fulfilling and servicing your clients a breeze. Use my creative approach to create, structure and most importantly, help you scale your business achieving not just what you require but more.",
};

//skillhomepage

const skillhomepagecontent = {
  text1: "Have handled feature",
  text2: "complexity similar to",
};

const skillhomepage_img = {
  gmail: gmailicon,
  ecommerce: ecommerceicon,
  food: foodicon,
  firebase: firebaseicon,
};

//why shoud here me

const why_hire = {
  cart1title: " Integrating Cart functionality",
  cart2title: "  Pic Upload functionality",
  cart3title: " Integrating Email functionality",
  cart4title: " File Uploads functionality",
  spantitle: "Why",
  title: " You Should Hire Me !",
  subtitle: "I can Integrate any feature in your web app.",
};

const why_hire_img = {
  cart: cartimg,
  emailsrc: emailimg,
  fileuploadsrc: fileuploadimg,
  picuploadsrc: picuploadimg,
  registrationsrc: registrationimg,
};

const carouselData = [
  {
    h3title: "Sharpener",
    spandata: "Sharpener.tech",
    aboutheading: "About",
    aboutparagraph:
      "Empowering the youth of India by providing learning access and job guidance from professionals in the best product companies.",
    client: client1logoicon,
  },
  {
    h3title: "Theoutrace",
    spandata: "Theoutrace.com",
    aboutheading: "About",
    aboutparagraph:
      "Theoutrace is a recruitment platform that provides hiring-related services to corporate agencies and to job seekers in India and overseas.",
    client: client2logoicon,
  },
];

// contact

const skillbtn = [
  { icons: reacticon },
  { icons: reduxicon },
  { icons: javascripticon },
  { icons: tailwindicon },
  { icons: boostrapicon },
  { icons: htmlicon },
  { icons: cssicon },
  { icons: firbaseicon },
];
const aboutskill = {
  react: reacticon,
  redux: reduxicon,
  js: javascripticon,
  tw: tailwindicon,
  bs4: boostrapicon,
  html5: htmlicon,
  cs3: cssicon,
  firebase: firbaseicon,
  git: git,
  next: nextjs,
};

const project = {
  title: "PORTFOLIO",
  projectparagraph:
    "In my portfolio project built with React.js, I showcase my skills and accomplishments through an elegant and interactive user interface.",
  projectimg1: project1,
  projectimg4: project4,
};

export {
  meta,
  footer,
  socialprofils,
  sliderheader,
  sliderbtn,
  sliderResume,
  Afterarrowcontent,
  skillhomepagecontent,
  skillhomepage_img,
  why_hire,
  why_hire_img,
  carouselData,
  skillbtn,
  aboutskill,
  project,
};
