"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiAmazonaws,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGitlab,
  SiGoland,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

const Skills: React.FC = () => {
  const skills = [
    { text: "Python", icon: SiPython },
    { text: "Golang", icon: SiGoland },
    { text: "TypeScript", icon: SiTypescript },
    { text: "PostgreSQL", icon: SiPostgresql },
    { text: "Redis", icon: SiRedis },
    { text: "Docker", icon: SiDocker },
    { text: "Gitlab CI/CS", icon: SiGitlab },
    { text: "Terraform", icon: SiTerraform },
    { text: "AWS", icon: SiAmazonaws },
    { text: "Django", icon: SiDjango },
    { text: "FastAPI", icon: SiFastapi },
    { text: "React", icon: SiReact },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        className="flex flex-col items-center justify-center -rotate-6"
        text="Skills 🚀"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
