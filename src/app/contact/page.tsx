"use client";
import { Meteors } from "@/components/ui/Meteors";
import { Button } from "@/components/ui/moving-border";
import React from "react";

const Contact = () => {
  return (
    <div className="relative top-20">
      
      <h1 className="mt-20 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-neutral-400 bg-opacity-50">
        Contact Us
      </h1>
      <div className="flex  flex-col mt-5 items-center justify-center">
       <input placeholder="Email" className="w-1/2 md:w-1/3 p-2 m-2 rounded-md bg-transparent text-white border-2 border-blue-700"></input>
       <textarea placeholder="Tell us about your story"  className="w-1/2 md:w-1/3 p-2 m-2 rounded-md  bg-transparent text-white border-2 border-blue-700"></textarea>
       <Button brderRadius='1.75rem' className="text-sm">Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
