import React from "react";
import "aos/dist/aos.css";
import {
  SiExpress,
  SiFigma,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

const Work: React.FC = () => {
  const works: {
    imgSrc: string;
    title: string;
    desc: string;
    githublink: string;
    livelink: string;
    icons: any[];
  }[] = [
    {
      imgSrc: "/images/patra.png",
      title: "Patra",
      desc: "A realtime messaging web application built with MERN & socket.io.",
      githublink: "https://github.com/rohanshrestha09/Patra",
      livelink: "https://patranp.herokuapp.com",
      icons: [
        <SiMongodb size={21} title="MongoDB" />,
        <SiReact size={21} title="React" />,
        <SiTailwindcss size={21} title="TailwindCSS" />,
        <FaNode size={21} title="Node" />,
        <SiExpress size={21} title="Express" />,
        <SiTypescript size={21} title="TypeScript" />,
      ],
    },
    {
      imgSrc: "/images/blog.png",
      title: "BlogSansar",
      desc: `A site that lets you read and create your own blogs.`,
      githublink: "https://github.com/rohanshrestha09/BlogSansar",
      livelink: "https://blogsansar.herokuapp.com",
      icons: [
        <SiMongodb size={21} title="MongoDB" />,
        <SiReact size={21} title="React" />,
        <SiTailwindcss size={21} title="TailwindCSS" />,
        <FaNode size={21} title="Node" />,
        <SiNestjs size={21} title="Nest" />,
        <SiTypescript size={21} title="TypeScript" />,
      ],
    },
    {
      imgSrc: "/images/portfolio.png",
      title: "Portfolio Website",
      desc: "My own portfolio website with Next, daisyui, & TailwindCSS",
      githublink: "https://github.com/rohanshrestha09/Portfolio-Next",
      livelink: "https://rohanshrestha.vercel.app",
      icons: [
        <SiNextdotjs size={21} title="Next" />,
        <SiTailwindcss size={21} title="TailwindCSS" />,
        <SiTypescript size={21} title="TypeScript" />,
      ],
    },
    {
      imgSrc: "/images/insta.png",
      title: "Instagram Clone",
      desc: "Instagram Clone made with Nextjs, TypeScript, TailwindCSS",
      githublink: "https://github.com/rohanshrestha09/Instagram-Clone",
      livelink: "https://igt-clone.herokuapp.com",
      icons: [
        <SiNextdotjs size={21} title="Next" />,
        <SiTailwindcss size={21} title="TailwindCSS" />,
        <SiTypescript size={21} title="TypeScript" />,
      ],
    },
    {
      imgSrc: "/images/figma.png",
      title: "Discord Clone",
      desc: "Discord Clone done with Figma",
      githublink: "https://github.com/rohanshrestha09/Discord-Figma",
      livelink: "https://github.com/rohanshrestha09/Discord-Figma",
      icons: [<SiFigma size={21} title="Figma" />],
    },
  ];
  return (
    <div
      className="w-full flex flex-col items-center overflow-hidden relative"
      id="works"
    >
      <div
        className="mockup-code before:hidden min-w-0 bg-transparent pt-6 lg:pt-14 sm:pt-8"
        data-aos="fade-left"
      >
        <pre data-prefix="$" className="text-3xl lg:text-5xl">
          <code>My Projects</code>
        </pre>
      </div>
      {works.map((element: any, index: number) => (
        <div
          data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
          data-aos-duration="800"
          className={`xl:w-full sm:w-[40rem] w-full 2xl:h-[38rem] xl:h-[32rem] sm:h-[35rem] h-[33rem] sm:my-8 my-4 flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
          key={index}
        >
          <img
            src={element.imgSrc}
            alt=""
            className={`xl:block hidden absolute 2xl:h-[31rem] xl:h-[25rem] w-[53%] z-10 ${
              index % 2 === 0 ? "right-0" : "left-0"
            } mt-8 rounded-xl`}
          />
          <div className="card xl:card-side xl:w-[70%] w-full h-full bg-[#2A303C]">
            <figure className="h-3/4 sm:h-1/2">
              <img
                src={element.imgSrc}
                alt="Album"
                className={`xl:hidden h-full w-full`}
              />
            </figure>
            <div
              className={`w-full p-4 sm:card-body flex flex-col justify-between h-full ${
                index % 2 === 0 ? "xl:items-start" : "xl:items-end"
              }`}
            >
              <div className="mockup-code bg-transparent xl:w-[63%] overflow-hidden">
                <pre data-prefix="$" className="text-xl">
                  <code>{element.title}</code>
                </pre>
                <div
                  data-prefix=">"
                  className="text-success text-xl inline-flex before:content-['>'] before:w-0 before:opacity-[0.5] pr:[1.25rem] before:mr-[1.8ch] break-words"
                >
                  <code>
                    <p>{element.desc}</p>
                  </code>
                </div>
                <pre
                  data-prefix="~"
                  className="text-xl hover:bg-rose-500 transition-all hover:text-white"
                >
                  <code>
                    <a href={element.githublink} target="_blank">
                      Check Repository
                    </a>
                  </code>
                </pre>
                <pre
                  data-prefix="~"
                  className="text-xl hover:bg-rose-500 transition-all hover:text-white"
                >
                  <code>
                    <a href={element.livelink} target="_blank">
                      View Live
                    </a>
                  </code>
                </pre>
              </div>
              <div
                className={`card-actions w-full ${
                  index % 2 === 0 ? "xl:justify-end" : "xl:justify-start"
                } items-center`}
              >
                <div className={`flex gap-5`}>
                  {element.icons.map((el: any, index: number) => (
                    <span key={index}>{el}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
