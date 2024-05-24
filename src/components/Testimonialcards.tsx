"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving.card";
const testimonials = [
  {
    name: "Sarah Jones",
    title: "Fitness Instructor",
    quote:
      "Their fitness app completely changed my workout routine. It's so much more engaging than just going to the gym!",
    rating: 4.8,
  },
  {
    name: "David Williams",
    title: "Author",
    quote:
      "This writing course helped me overcome writer's block and finally finish my novel. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "Teacher",
    quote:
      "Their language learning program is fantastic for kids. My students are having a blast and actually retaining the information.",
    rating: 4.7,
  },
  {
    name: "Chen Li",
    title: "Entrepreneur",
    quote:
      "Their business coaching program was invaluable in helping me launch my startup. I couldn't have done it without their guidance.",
    rating: 5,
  },
  {
    name: "Omar Khan",
    title: "Web Designer",
    quote:
      "This design software is so user-friendly and powerful. It allows me to create stunning websites in a fraction of the time.",
    rating: 4.9,
  },
  {
    name: "Sophia Garcia",
    title: "Musician",
    quote:
      "Their online music lessons are perfect for beginners like me. The instructors are patient and encouraging.",
    rating: 4.5,
  },
  {
    name: "Alex Miller",
    title: "Photographer",
    quote:
      "I love their photo editing software! It's easy to use and has all the features I need to take my photos to the next level.",
    rating: 5,
  },
  {
    name: "Catherine Moore",
    title: "Yoga Teacher",
    quote:
      "Their yoga classes online are a lifesaver! They offer a variety of styles and difficulty levels, so there's something for everyone.",
    rating: 4.6,
  },
  {
    name: "Daniel Johnson",
    title: "Software Developer",
    quote:
      "This coding bootcamp was an amazing learning experience. I landed a great job after graduation thanks to their career support.",
    rating: 5,
  },
  {
    name: "Isabella Hernandez",
    title: "Graphic Designer",
    quote:
      "Their online design templates are a great time-saver. They're stylish and easy to customize for my projects.",
    rating: 4.8,
  },
];

const Testimonialcards = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-8 z-10">
        The Voice of Success
      </h2>

      <div className="flex justify-center w-full overflow-hidden px-2 sm:px-6 lg:px-4 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonialcards;
