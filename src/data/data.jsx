// import React from "react";
import { HiExternalLink } from "react-icons/hi";
import Business from '/projects/business web1.webp'
import Business2 from '/projects/b-w2.webp'
import restaurant from '/projects/restaurant.webp'
import blog_web from '/projects/blog-website.webp'
import maamuus from '/projects/maamuus-restaurant.png'
import porfolio from '/projects/Porfolio-CR.png'
// import movie_app from '/projects/movie-app.png'

import {
    DiAtom, DiBootstrap, DiCss3, DiFirebase, DiGit, DiHtml5,
    DiJsBadge, DiMongodb, DiNodejsSmall, DiPostgresql, DiReact,
    DiResponsive, DiSass, DiTerminal, DiWordpress
} from "react-icons/di";

export const projectsData = [
    {
        title: "Business Website",
        name:
            "Karmove",
        tags: ["React", " Tailwind", " Prisma"],
        imageUrl: Business,
        Details: <HiExternalLink />,
        Detailstext: "Details"
    },
    {
        title: "Business Website",
        name:
            "ROD'eau",
        tags: ["WordPress", " JavaScript",],
        imageUrl: Business2,
        Details: <HiExternalLink />,
        Detailstext: "Details"
    },
    {
        title: "Restaurant Website",
        name:
            "Vu & Friends",
        tags: ["Svelt", " Tailwind",],
        imageUrl: restaurant,
        Details: <HiExternalLink />,
        Detailstext: "Details"
    },
    {
        title: "Blog Website",
        name:
            "TechHub-Blog",
        tags: ["React JS", " Sass",],
        imageUrl: blog_web,
        Details: <HiExternalLink />,
        Detailstext: "Details"
    },
    {
        title: "Portfolio Website",
        name:
            "Code Raz Portfolio",
        tags: ["React", " Tailwind",],
        imageUrl: porfolio,
        Details: <HiExternalLink />,
        Detailstext: "Details"
    },
    {
        title: "Restaurant Website",
        name:
            "Maamuus",
        tags: ["React", " Tailwind", " TypeScript", " Prisma"],
        imageUrl: maamuus,
        Details: <HiExternalLink />,
        Detailstext: "Details"
    },
]

export const skillsData = [
    {
        name: "HTML",
        icon: <DiHtml5 size={20} color="#FF3416" />
    },
    {
        name: "CSS",
        icon: <DiCss3 size={20} color="#31A8FF" />
    },
    {
        name: "JavaScript",
        icon: <DiJsBadge size={24} color="#FFD251" />
    },
    {
        name: "React",
        icon: <DiReact size={30} color="#06B6D4" />
    },
    {
        name: "Atom",
        icon: <DiAtom />
    },
    {
        name: "MongoDB",
        icon: <DiMongodb size={24} color="#10B981" />
    },
    {
        name: "Node.js",
        icon: <DiNodejsSmall size={30} color="#90CA51" />
    },
    {
        name: "PostgreSQL",
        icon: <DiPostgresql size={30} color="#003262" />
    },
    {
        name: "Wordpress",
        icon: <DiWordpress size={24} color="#034BC1" />
    },
    {
        name: "Sass",
        icon: <DiSass size={30} color="#CF6C9C" />
    },
    {
        name: "Git",
        icon: <DiGit size={24} color="#FF3416" />
    },
    {
        name: "Bootstrap",
        icon: <DiBootstrap size={24} color="#5849BE" />
    },
    {
        name: "Firebase",
        icon: <DiFirebase size={30} color="red" />
    },
    {
        name: "Responsive",
        icon: <DiResponsive size={32} />
    },
    {
        name: "terminal",
        icon: <DiTerminal color="#0D1628" />
    },
]