import gadget from '../assets/img/hi-gadget2.png'
import foodImg from '../assets/img/food-recipe-explore.png'
import najeePhoto from '../assets/img/najee-photo.png'
import examImg from '../assets/img/exams.png'
import jobImg from '../assets/img/job_search.png'
import adminImg from "../assets/img/admin_dashboard.png"
import laravelImg from "../assets/img/laravel_jobsite_app.png"

export const links = [
    {
        id: 1,
        name: "Home", 
        hash: "#home"
    },
    {
        id: 2,
        name: "About",
        hash: "#about"
    },
    {
        id: 3,
        name: "Projects",
        hash: "#projects"
    },
    {
        id: 4,
        name: "Skills",
        hash: "#skills"
    },
    {
        id: 5,
        name: "Contact",
        hash: "#contact"
    }
]

export const projectData = [
    {
        id: 1,
        title: "Photography Web Application ",
        // description: "I worked as the backend developer on this project. The application is used for data entry and only authorized users can perform certain operations in the application.",
        tags:["NextJs","Typescript","NodeJs", "Tailwindcss", "useContext", "Framer-motion", "Express", "JWT", "Nodemailer", "Cloudinary", "rate-limiter", "idempotency", "MongoDB"],
        img: najeePhoto,
        stack: "Fullstack",
        // github_link:"",
        url: "https://najeesphotography.com"
    },
    {
        id: 2,
        title: "Examination Upload application",
        // description: "I worked as the backend developer on this project. The application is used for data entry and only authorized users can perform certain operations in the application.",
        tags:["NodeJs", "Express", "JWT", "Typescript", "Cloudinary", "Postgresql"],
        img: examImg,
        stack: "Backend",
        github_link:"https://github.com/Samuel202093/exam_server",
        url: ""
    },
    {
        id: 3,
        title: "Hi-Gadget E-commerce Application",
        // description: "I worked as the fullstack developer on this project. Users places order and then makes payment online.",
        tags:["React","Tailwindcss", "Redux", "nodejs", "MongoDB", "Nodemailer", "Stripe", "Chartjs", "Framer-motion"],
        img: gadget,
        stack: "Fullstack",
        github_link: "https://github.com/Samuel202093/e-commerce-frontend",
        url: "https://hi-gadget.netlify.app"
        
    },
    {
        id: 4,
        title: "Job-Zone Application",
        // description: "I worked as the frontend developer on this project. It has features of filteration, sorting and pagination.",
        tags:["React","Tailwindcss", "SWR", "React-toastify", "UseContext"],
        img: jobImg,
        stack: "Frontend",
        github_link: "https://github.com/Samuel202093/job_search",
        url: "https://job-search-api.netlify.app"
    },
    {
        id: 5,
        title: "Food-recipe Application",
        // description: "I worked as the frontend developer on this project. It has features of filteration, sorting and pagination.",
        tags:["React","Tailwindcss", "SWR", "React-toastify", "UseContext", "swiperjs", "External Api"],
        img: foodImg,
        stack: "Frontend",
        github_link: "https://github.com/Samuel202093/food_recipe",
        url: "https://food-recipe-port.netlify.app"
    },
    // {
    //     id: 6,
    //     title: "Admin Dashboard Application",
    //     // description: "I worked as the frontend developer on this project. The admin adds products in the application, suspend and unsuspend users and also integrated chart on the dashboard",
    //     tags:["React", "Tailwindcss", "Typescript","Chartjs", "Zod", "Framer-motion"],
    //     img: adminImg,
    //     stack: "Frontend",
    //     github_link: "https://github.com/Samuel202093/Typescript_Admin_Dashboard",
    //     url: "https://typescriptadmindashboard.netlify.app/"
    // },
    {
        id: 6,
        title: "JobHunt Application",
        // description: "I worked as a fullstack developer on this project. In this project, Only authorized users are allowed to add gigs and manage gigs in this project.",
        tags:["Tailwindcss","Php", "Laravel", "MySql"],
        img: laravelImg,
        stack: "Fullstack",
        github_link: "https://github.com/Samuel202093/jobsite_laravel_project",
        url: ""
    }

]

export const technicalSkills = [
    {
        name: 'Html',
        percent: 95
    },
    {
        name: 'Css',
        percent: 70
    },
    {
        name: 'Tailwindcss',
        percent: 70
    },
    {
        name: 'Javascript',
        percent: 65
    },
    {
        name: 'Reactjs',
        percent: 63
    },
    {
        name: 'Redux',
        percent: 55
    }, 
    {
        name: 'Typescript',
        percent: 75
    },
    {
        name: 'NodeJs',
        percent: 65
    },
    {
        name: 'ExpressJs',
        percent: 75
    },
    {
        name: 'Php',
        percent: 70
    },
    {   
        name: 'Laravel',
        percent: 60
    },
    {
        name: 'GraphQl',
        percent: 65
    },
    {
        name: 'MongoDb',
        percent: 70
    },
    {
        name: 'Mysql',
        percent: 60
    },
    {
        name: 'PostgreSql',
        percent: 75,
    },
    {
        name: 'Git',
        percent: 80
    }
]

export const professionalSkill = [
    {
        name: 'Creativity',
        percent: 85
    },
    {
        name: 'Excellent Communication',
        percent: 87
    },
    {
        name: 'Teamwork',
        percent: 90
    },
    {
        name: 'Adaptability/Flexibility',
        percent: 80
    },
    {
        name: 'Persistence',
        percent: 85
    },
    {
        name: 'Self-awareness/Self-learning',
        percent: 95
    },
    
    {
        name: 'Problem-solving',
        percent: 75
    },
  
    {
        name: 'Responsiveness',
        percent: 95
    }, 
    {
        name: 'Time-Management',
        percent: 88
    }
]