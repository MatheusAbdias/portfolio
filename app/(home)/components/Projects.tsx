import React from "react";
import {
  SiAmazonaws,
  SiDjango,
  SiPostgresql,
  SiPython,
  SiRedis,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Web catalog for vehicles (Cliqdrive)",
      tech: [SiPython, SiDjango, SiAmazonaws, SiPostgresql, SiRedis],
      link: "https://cliqdrive.com.br/",
      cover: "/cliqdrive.png",
      background: "bg-indigo-500",
    },
    {
      title: "White label Platform (Finder)",
      tech: [SiPython, SiDjango, SiAmazonaws, SiPostgresql, SiRedis],
      link: "https://www.finder.b2bit.company/login/",
      cover: "/finder.png",
      background: "bg-green-500",
    },
  ];
  return (
    <div className="py-10 p-10 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link key={index} href={project.link} target="_blank">
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1>{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
