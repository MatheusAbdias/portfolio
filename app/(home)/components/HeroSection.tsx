"use client";

import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "./ui/moving-border";
import Title from "./Title";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you!
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Matheus Abdias"}
          </span>
        </h1>

        <TextGenerateEffect
          className="mb-10 md:w-96 text-lg text-gray-300"
          words={
            "Based in BR, I am a backend developer with a passion for creating scalable and maintainable software, with a focus on Python and Golang ecosystem."
          }
        />
      </div>
      <Link href="mailto:matheus_abdias@outlook.com">
        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
          <Title text="Contact Me 📬" />
        </MovingBorderBtn>
      </Link>

      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
