import { FaCentos } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import {  MdCleaningServices } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";

import clean4 from './assets/clean4.jpg'
import clean5 from './assets/clean5.jpg'
import clean6 from './assets/clean6.jpg'
import lady1 from './assets/laddy1.jpg'
import lady2 from './assets/ladyy.jpg'

export const services = [
    {
        icon: <FaCentos />,
        head : 'Residential Cleaning',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Commercial Cleaning',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Deep Cleaning',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Carpet Cleaning',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Window Cleaning',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Post-Construction Cleaning',
        desc : 'A short description of the service your company provides and how it helps your clients business increase revenue using the ',
        action : 'Explore',
        link : <GrLinkNext />,
    },
];


export const details = [
    {
      icon: <IoCall />,
      head : 'Consultation',
      desc : 'We collect detailed requirements from stakeholders to understand project goals, scope and constraints. We develop a detailed plan including timeline and resources and milestones',
    },
    {
      icon : <BsCashCoin />,
      head: 'Affordable Price',
      desc: ' We create designs specifications, including user interfaces, databases and system integration points, build prototype to visualize and gather feedback'
    },
    {
      icon: <RiTeamFill />,
      head: 'Professional Team',
      desc: 'We write actual code to implement the features and functionalities using appropriate programming languages'
    },
    {
      icon: <MdCleaningServices />,
      head : 'Swift Delivery',
      desc: 'We conduct various testing phases including unit testing and useer acceptance testing to identify and fix bugs the deploy.'
    }
  ]

  export const projects = [
    {
      image : clean4,
      title : 'Martins Hospital Cleaning',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : clean5,
      title : 'Oland Company Cleaning',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image : clean6,
      title : 'Roland Agency Cleaning',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    }
  ]

  export const feedback =[
    {
      image: lady1,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady2,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady1,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
  
  ];