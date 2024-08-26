import Appwrite from "@/components/icons/Appwrite";
import Clerk from "@/components/icons/Clerk";
import EjsIcon from "@/components/icons/EjsIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import MongoIcon from "@/components/icons/MongoIcon";
import NextIcon from "@/components/icons/NextIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import TsIcon from "@/components/icons/TsIcon";
import {
  IconBuilding,
  IconCode,
  IconHome,
  IconUserPlus,
} from "@tabler/icons-react";

export const projects = [
  {
    title: "www.snapgram.com",
    href: "https://snap-gram-beta.vercel.app",
    image:
      "https://res.cloudinary.com/dipnel4vv/image/upload/v1724422831/bg6xjxuoxobvpqvcc4sv.png",
    name: "Refined Photo Sharing Community",
    description:
      "Snapgram is an aesthetic Instagram clone offering stylish photo sharing, interactive features, and a refined social experience.",
    stacks: [
      <>
        <div className="w-12 h-12 rounded-full overflow-hidden p-3 outline-none border  flex items-center justify-center">
          <ReactIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border  flex items-center justify-center">
          <Appwrite />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <TailwindIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <TsIcon />
        </div>
      </>,
    ],
  },
  {
    title: "www.coshare.com",
    href: "https://co-share-client.vercel.app",
    image:
      "https://res.cloudinary.com/dipnel4vv/image/upload/v1724423247/qm9uz6e4vpghdslmakuo.png",
    name: "Dynamic File Sharing Platform",
    description:
      "Co-Share is a sleek platform with robust authentication, enabling users to upload, share, and manage files for a collaborative experience.",
    stacks: [
      <>
        <div className="w-12 h-12 object-contain rounded-full p-3 border border-black-300 flex items-center justify-center">
          <ReactIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <NodeIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <ExpressIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <MongoIcon />
        </div>
      </>,
    ],
  },
  {
    title: "www.fashion.com",
    href: "https://github.com/prakash21singh/fassSion",
    image:
      "https://res.cloudinary.com/dipnel4vv/image/upload/v1724560064/avkqddbl5hdbvcfbex24.png",
    name: "Stylish E-commerce Clothing Store",
    description:
      "FashionHub is an e-commerce platform for trendy clothing, offering a seamless experience with a variety of fashion items for all styles.",
    stacks: [
      <>
        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <EjsIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <NodeIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <ExpressIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <MongoIcon />
        </div>
      </>,
    ],
  },
  {
    title: "www.threads.com",
    href: "https://github.com/prakash21singh/threads",
    image:
      "https://res.cloudinary.com/dipnel4vv/image/upload/v1724423196/hur2mjxzjuch9xjoejqh.png",
    name: "Interactive Community Building Platform",
    description:
      "Threads allows users to create threads, comment, follow others, and build communities, offering a rich and interactive social experience.",
    stacks: [
      <>
        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <Clerk />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <TsIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <NextIcon />
        </div>

        <div className="w-12 h-12 rounded-full p-3 border border-black-300 flex items-center justify-center">
          <MongoIcon />
        </div>
      </>,
    ],
  },
];

export const items = [
  {
    quote:
      "Prakash consistently delivers clean, well-organized code that is crucial for our long-term success. His attention to detail and ability to meet tight deadlines is impressive and flexible.",
    name: "Rohit Sharma",
    title: "Efficiency-Focused Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote:
      "Prakash's high-quality, scalable code has greatly improved our project outcomes. His clean code and quick turnaround times have been essential for keeping projects on schedule.",
    name: "Priya Patel",
    title: "Timely and Quality-Oriented Professional",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    quote:
      "Prakash's clean and efficient code, along with his fast delivery, has been key to expanding our system with ease. His reliability and skill are evident in the neat, scalable solutions he provides.",
    name: "Sanjay Verma",
    title: "Scalable Solutions Expert",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export const navItems = [
  {
    name: "Home",
    link: "#",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Skills",
    link: "#expertise",
    icon: <IconUserPlus className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Project",
    link: "#project",
    icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <IconBuilding className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
