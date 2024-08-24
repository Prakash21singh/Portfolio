import Image from "next/image";
import Link from "next/link";

export const content = [
  {
    title: "Snapgram",
    description:
      "Snapgram is an Instagram clone featuring an aesthetic user interface. It offers users the ability to create posts, like and save content, delete posts, explore new content, and engage in chats. The platform is built with robust login functionality, ensuring secure and seamless access for users.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Link
          href={"https://snap-gram-beta.vercel.app"}
          className="w-full h-full">
          <Image
            src="https://res.cloudinary.com/dipnel4vv/image/upload/v1724422831/bg6xjxuoxobvpqvcc4sv.png"
            width={600}
            height={600}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </Link>
      </div>
    ),
  },
  {
    title: "Coshare",
    description:
      "Co-Share is a dynamic platform designed with robust authentication and a sleek user interface. It allows users to upload files and images, share them with others, download files from other users, and manage their uploads by editing or deleting them. The platform also includes social features, enabling users to follow or unfollow others, fostering a collaborative and interactive environment.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-900),var(--gray-500))] flex items-center justify-center text-white">
        <Link href={"co-share-client.vercel.app"} className="w-full h-full">
          <Image
            src={
              "https://res.cloudinary.com/dipnel4vv/image/upload/v1724423247/qm9uz6e4vpghdslmakuo.png"
            }
            alt="coshare"
            width={600}
            height={600}
            className="w-full h-full object-cover object-center"
          />
        </Link>
      </div>
    ),
  },
  {
    title: "Threads",
    description:
      "Threads is a platform where users can sign in, complete onboarding, and create threads. It offers features for commenting on threads, viewing comments, following other users, viewing profiles, and creating communities, fostering a rich and interactive user experience.",
    content: (
      <div className="h-full w-auto flex items-center justify-center text-white">
        <Link
          href={"https://github.com/prakash21singh/threads"}
          className="w-full h-full">
          <Image
            src="https://res.cloudinary.com/dipnel4vv/image/upload/v1724423196/hur2mjxzjuch9xjoejqh.png"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </Link>
      </div>
    ),
  },
];

export const items = [
  {
    quote:
      "Prakash's ability to deliver clean, well-organized code is exceptional. His attention to detail ensures that the codebase is both maintainable and scalable, which has been crucial for our long-term success. Not only does Prakash consistently meet tight deadlines, but he also maintains a high standard of quality. We greatly value Prakash's dedication to writing neat code and providing scalable solutions.",
    name: "Rohit Sharma",
    title: "Efficiency-Focused Developer",
  },
  {
    quote:
      "Working with Prakash has been a game-changer for our development process. His ability to deliver high-quality, scalable code in record time has significantly improved our project outcomes. Prakash's code is always clean and easy to understand, which makes future maintenance a breeze. He consistently goes above and beyond to ensure that the service he provides is top-notch, and his quick turnaround times have been instrumental in keeping our projects on schedule.",
    name: "Priya Patel",
    title: "Timely and Quality-Oriented Professional",
  },
  {
    quote:
      "Prakash stands out for his exceptional code delivery. The code he writes is not only clean and efficient but also highly scalable, which has allowed us to expand our system with ease. Prakash's fast delivery without compromising on quality has been a key factor in meeting our tight deadlines. Prakash is a reliable and skilled developer who consistently delivers neat, scalable code that meets our needs perfectly.",
    name: "Sanjay Verma",
    title: "Scalable Solutions Expert",
  },
];
