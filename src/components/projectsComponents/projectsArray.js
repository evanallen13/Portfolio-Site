const firebase = "../../imgs/skillimgs/firebase.png";
const javascript = "../../imgs/skillimgs/js.png";
const react = "../../imgs/skillimgs/react.png";
const html5 = "../../imgs/skillimgs/html5.png";
const css3 = "../../imgs/skillimgs/css3.png";
const node = "../../imgs/skillimgs/node.png"
const bootstrap = "../../imgs/skillimgs/bootstrap.png"


export const projectsArray = [
    {Title: "Contact Manager",
        Img: "../../imgs/projects/contactmanagmentNew.png",
        Github: "https://github.com/evanallen13/IS-455-Project-4.0?files=1",
        Hosting: "https://is455-project-5c969.firebaseapp.com/",
        Skills: [javascript,firebase,html5,css3,node],
        Learned: "This is a project I used JavaScript to create a single page application that cycles through the processes of creating and maintaining contacts.",
    },
    {Title: "Portfolio Website",
        Img: "../../imgs/projects/portfolio.png",
        Github: "https://github.com/evanallen13/Portfolio-Site",
        Hosting: "https://www.evanallen13.com//",
        Skills: [javascript,react,html5,css3,node,bootstrap],
        Learned: "This is the website that you are currently on. All the projects and skill buttons are mapped through state.",
    },
    {Title: "React-Firebase Chat App",
        Img: "../../imgs/projects/chat.png",
        Github: "https://github.com/evanallen13/React-Firebase-Chat",
        Hosting: "https://bacon-21ca3.firebaseapp.com/",
        Skills: [javascript,react,firebase,html5,css3,node,bootstrap],
        Learned: "This is a clone of Apple messager. I used this to learn how to minipluate the state of compnent using Firebase. Also it uses Firebase Auth.",
    },
  ]