import gadget from '../assets/img/hi-gadget2.png'
import foodImg from '../assets/img/food-recipe-explore.png'
import examImg from '../assets/img/exams.png'

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
        title: "Examination Upload application",
        description: "I worked as the backend developer on this project. The application is used for data entry and only authorized users can perform certain operations in the application.",
        tags:["NodeJs", "Express", "JWT", "Cloudinary", "Postgresql"],
        img: examImg,
        github_link:"https://github.com/Samuel202093/exam_server",
        url: ""
    },
    {
        id: 2,
        title: "Hi-Gadget E-commerce Application",
        description: "I worked as the fullstack developer on this project. Users places order and then makes payment online.",
        tags:["React","Tailwindcss", "Redux", "nodejs", "MongoDB", "Nodemailer", "Stripe", "Chartjs"],
        img: gadget,
        github_link: "https://github.com/Samuel202093/e-commerce-frontend",
        url: "https://hi-gadget.netlify.app"
        
    },
    {
        id: 3,
        title: "Job-Zone Application",
        description: "I worked as the frontend developer on this project. It has features of filteration, sorting and pagination.",
        tags:["React","Tailwindcss", "SWR", "React-toastify", "UseContext"],
        github_link: "https://github.com/Samuel202093/job_search",
        url: "https://job-search-api.netlify.app"
    },
    {
        id: 4,
        title: "Food-recipe Application",
        description: "I worked as the frontend developer on this project. It has features of filteration, sorting and pagination.",
        tags:["React","Tailwindcss", "SWR", "React-toastify", "UseContext", "swiperjs"],
        img: foodImg,
        github_link: "https://github.com/Samuel202093/food_recipe",
        url: "https://food-recipe-port.netlify.app"
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
        name: 'Framer-motion',
        percent: 70
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
        name: 'MongoDb',
        percent: 70
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
        name: 'Excellent Communication',
        percent: 87
    },
    {
        name: 'Adaptability/Flexibility',
        percent: 80
    },
    {
        name: 'Creativity',
        percent: 85
    },
    {
        name: 'Teamwork',
        percent: 90
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
        name: 'Self-awareness/Self-learning',
        percent: 95
    },
    {
        name: 'Persistence',
        percent: 85
    },
    {
        name: 'Time-Management',
        percent: 88
    }
]