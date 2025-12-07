import { projectImages } from "@/app/assets";
const projectList = [
    {
        name: "Personal Website",
        description: "A personal website to showcase my projects and resume.",
        technologies: ["Next.js", "TypeScript", "CSS"],
        link: "https://github.com/Nathan-Shammami/Personal-Website",
        image:projectImages.personalSite.src
    },{
        name: "AR Pokedex",
        description: "An augmented reality Pokedex app that allows users to view and interact with 3D models of Pokemon in their real-world environment.",
        technologies: ["React Native", "ViroReact", "TypeScript"],
        link: "https://github.com/Nathan-Shammami/AR-pokedex",
        image: projectImages.viro.src
    },{
        name: "Sparty's Snowblower",
        description: "A keyframe animation software with a snowblower machine created using OOP principles in C++.",
        technologies: ["C++", "Wx Widgets", "OOP"],
        link: "",
        image: projectImages.spartysSnowblower.src
    },{
        name: "Spartan Hero",
        description: "",
        technologies: ["C++", "Wx Widgets", "OOP"],
        link: "",
        image: projectImages.spartanHero.src
    },{
        name: "Homelab",
        description: "A collection of services and applications running on my home server.",
        technologies: ["Docker", "Kubernetes", "Linux"],
        link: "",
        image:projectImages.homelab.src
    }
]

export default projectList;