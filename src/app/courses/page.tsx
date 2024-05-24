"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { CardDescription, CardTitle } from "@/components/ui/card-hover";
import Image from "next/image";
import React from "react";
const courseProjects = [
  {
    title: "Building a Smart Chatbot",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Develop a conversational AI using natural language processing techniques. Train your bot to understand and respond to user queries in an informative and engaging way.",
    technologies: ["Natural Language Processing (NLP)", "Machine Learning"],
    difficulty: "Intermediate",
  },
  {
    title: "Image Classification with Convolutional Neural Networks (CNNs)",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Train a CNN model to identify objects in images. Explore techniques like image preprocessing, feature extraction, and model training to achieve high accuracy.",
    technologies: ["Deep Learning", "CNNs", "Computer Vision"],
    difficulty: "Advanced",
  },
  {
    title: "Music Genre Classification with Machine Learning",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Build a system that automatically classifies music based on genre using audio features and machine learning algorithms. Discover the power of music information retrieval.",
    technologies: [
      "Machine Learning",
      "Audio Processing",
      "Music Information Retrieval (MIR)",
    ],
    difficulty: "Intermediate",
  },
  {
    title: "Recommender Systems with Collaborative Filtering",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Create a recommender system that suggests relevant products or content to users based on their past behavior and preferences. Explore collaborative filtering techniques for personalized recommendations.",
    technologies: [
      "Machine Learning",
      "Recommender Systems",
      "Collaborative Filtering",
    ],
    difficulty: "Intermediate",
  },
  {
    title: "Building a Stock Price Predictor with Time Series Analysis",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Develop a model to forecast future stock prices using historical data and time series analysis techniques. Explore concepts like ARIMA models and LSTMs for financial forecasting.",
    technologies: [
      "Machine Learning",
      "Time Series Analysis",
      "Financial Forecasting",
    ],
    difficulty: "Advanced",
  },
  {
    title: "Generating Art with Generative Adversarial Networks (GANs)",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Delve into the world of GANs by creating your own AI-powered artwork! Explore different GAN architectures and experiment with generating creative content.",
    technologies: [
      "Deep Learning",
      "Generative Adversarial Networks (GANs)",
      "Creative AI",
    ],
    difficulty: "Advanced",
  },
  {
    title: "Building a Self-Driving Car Simulator with Reinforcement Learning",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Create a simulated environment where an AI agent learns to navigate a virtual car using reinforcement learning techniques. Explore reward functions, exploration vs. exploitation strategies, and decision-making algorithms.",
    technologies: [
      "Reinforcement Learning",
      "Simulation Environments",
      "Autonomous Vehicles",
    ],
    difficulty: "Advanced",
  },
  {
    title: "Developing a Fake News Detector with Natural Language Processing",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Combat misinformation with an AI system that can identify fake news articles. Explore techniques like sentiment analysis, topic modeling, and factual consistency checking.",
    technologies: [
      "Natural Language Processing (NLP)",
      "Machine Learning",
      "Fake News Detection",
    ],
    difficulty: "Intermediate",
  },
  {
    title: "Building a Chess-Playing AI with Minimax Algorithm",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Create a chess-playing AI using the minimax algorithm for decision making. Explore techniques like state space exploration, alpha-beta pruning, and evaluation functions.",
    technologies: ["Game AI", "Minimax Algorithm", "Search Algorithms"],
    difficulty: "Intermediate",
  },
  {
    title: "Building a Music Composer with Generative AI",
    image:
      "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experiment with the creative potential of AI by building a system that composes original music. Explore techniques like generative models and music generation algorithms.",
    technologies: ["Deep Learning", "Generative AI", "Music Generation"],
    difficulty: "Advanced",
  },
];
const AllCourses = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h3 className="text-3xl font-bold text-center ">
        All Courses ({courseProjects.length})
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {courseProjects.map((project, index) => {
          return (
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                 {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    height="1000"
                    width="1000"
                    src={project.image}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </div>
  );
};

export default AllCourses;
