"use client";
import Link from "next/link";
import React from "react";
import coursedata from "../data/musicdata.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { CardContainer } from "./ui/3d-card";
import { Button } from "./ui/moving-border";
interface Course {
 
  title: string;
  description: string;
  image: string;
 
}
const musicCourses = [
  {
    title: "Music Theory Fundamentals",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    description: "Master the building blocks of music, including scales, chords, harmony, and rhythm. Gain a strong foundation for composing, performing, and analyzing music."
  },
  {
    title: "Learn to Play Piano: Beginner to Pro",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    description: "Develop your piano skills from scratch or refine your existing knowledge. Learn proper technique, sight-reading, playing by ear, and a variety of musical styles."
  },
  {
    title: "The Ultimate Guide to Guitar",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    description: "Unlock the potential of the guitar! This course covers essential chords, strumming patterns, fingerpicking techniques, music theory for guitarists, and different genres."
  },
  {
    title: "Become a Singing Sensation",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    description: "Improve your vocal skills, develop your range, and learn proper breathing techniques. Explore different singing styles, develop confidence, and unleash your inner singer."
  },
  {
    title: "Music Production for Beginners",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    description: "Turn your musical ideas into reality! Learn the basics of music production software, recording techniques, mixing, and mastering to create professional-sounding music."
  },
  {
    title: "The History of Rock and Roll",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    description: "Embark on a journey through the evolution of rock and roll music. Explore its origins, iconic artists, subgenres, and the cultural impact of this influential genre."
  },
  {
    title: "Music Composition: From Inspiration to Song",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    description: "Learn the art of songwriting! Develop your creativity, explore different composition techniques, song structure, melody writing, and music theory for composers."
  },
  {
    title: "Music for Relaxation and Mindfulness",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    description: "Discover the power of music for relaxation and stress relief. Explore the music theory behind calming music, create your own soundscapes, and learn about music therapy techniques."
  },
  {
    title: "The Art of Music Performance",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D", // Replace with actual image path
    description: "Take your musical performance skills to the next level. Learn stage presence techniques, how to manage performance anxiety, and tips for captivating your audience."
  },
];

const FeaturedCourses = () => {
  //   console.log(coursedata.coursedata)
  return (
    <div className="py-12">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase md:text-3xl">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn more about our courses
        </p>
      </div>
      <div className="mt-10 mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center w-[90%] mx-auto">
          {musicCourses.map((course: Course) => {
            return (
              <div className="flex flex-col border-2 border-gray-600 p-3 rounded-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover rounded-lg  border-2  border-blue overflow-hidden"
                />
                <div className="mt-4 p-2">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="mt-2 text-md text-neutral-500">
                    {course.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
         View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
