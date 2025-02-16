import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "Build Your Gameplan",
      description:
        "We build out your 90-day content strategy & develop your style",
      tags: ["#strategy", "#planning", "#content"],
      icon: "🎯",
      accent: "from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Create Content",
      description: "We create everything from the scripts to posting videos",
      tasks: [
        { name: "Video Script", status: "complete", tag: "#build" },
        { name: "Thumbnail Design", status: "pending", tag: "#design" },
        { name: "Video Editing", status: "pending", tag: "#create" },
        { name: "Posting Videos", status: "pending", tag: "#launch" },
      ],
      icon: "🎬",
      accent: "from-[#4facfe] to-[#00f2fe]",
    },
    {
      title: "Enjoy Results",
      description: "Build an audience and turn them into booked calls",
      metrics: [
        "Booked Call",
        "New Subscriber",
        "1/10 Video",
        "+1,000 Subscribers",
        "Found on YouTube",
        "New Client",
      ],
      icon: "📈",
      accent: "from-[#43e97b] to-[#38f9d7]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-[#090517] min-h-screen text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 bg-gray-900/50 rounded-full mb-6 backdrop-blur-lg border border-gray-800"
          >
            <span className="text-gray-400 font-medium">How it works?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Our 3 Step Process
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl text-gray-400"
          >
            To Book Calls From YouTube
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                style={{
                  background: `linear-gradient(to right, ${step.accent})`,
                }}
              />
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-xl p-8 h-full hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r rounded-t-xl opacity-20 ${step.accent}" />

                <div className="text-4xl mb-6 bg-gray-800/50 w-16 h-16 rounded-xl flex items-center justify-center">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 mb-6 text-lg">{step.description}</p>

                {step.tasks && (
                  <div className="space-y-3">
                    {step.tasks.map((task, taskIndex) => (
                      <div
                        key={taskIndex}
                        className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-colors duration-200"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-3 ${
                            task.status === "complete"
                              ? "bg-green-500"
                              : "bg-gray-600"
                          }`}
                        />
                        <span className="font-medium">{task.name}</span>
                        <span className="ml-auto text-gray-500 text-sm">
                          {task.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {step.metrics && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {step.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-800 hover:border-gray-700 transition-colors duration-200"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {step.tags && (
                  <div className="flex flex-wrap gap-3 mt-6">
                    {step.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-gray-400 text-sm font-medium hover:text-gray-300 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
