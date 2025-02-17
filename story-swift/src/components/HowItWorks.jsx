import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "Building Your Gameplan",
      description:
        "We dive deep and take a look at what's currently performing in your industry, what has the highest potential to performing, and we find a unique angle to take for your video.",
      metrics: ["Content Strategy"],
      icon: "🎯",
      accent: "from-[#FF8C37] to-[#F53803]",
    },
    {
      title: "Scripting",
      description:
        "We perform extensive research on your niche and your brand in order to nail your voice and speak effectively to your audience.",
      metrics: ["Hook Creation", "Story Structure", "Call-to-Actions"],
      icon: "✍️",
      accent: "from-[#FF8C37] to-[#F53803]",
    },
    {
      title: "Post Production",
      tasks: [
        { name: "Thumbnail Design", tag: "#design" },
        { name: "Video Editing", tag: "#create" },
        { name: "SEO Optimization", tag: "#rank" },
        { name: "Posting Videos", tag: "#launch" },
      ],
      icon: "🎬",
      accent: "from-[#FF8C37] to-[#F53803]",
    },
    {
      title: "Enjoy Results",
      description: "Build an audience and turn them into booked calls",
      metrics: [
        "Booked Call",
        "1/10 Video",
        "+1,000 Subscribers",
        "Found on YouTube",
      ],
      icon: "📈",
      accent: "from-[#FF8C37] to-[#F53803]",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const taskVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      name="Process"
      className="bg-[#090517] min-h-screen text-white py-10 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div className="inline-block px-6 py-3">
            <button
              className="px-8 py-3 bg-black text-white relative z-10 rounded-full
                             before:absolute before:inset-0 before:-z-10 before:rounded-full
                             before:bg-gradient-to-r before:from-[#FF8C37] before:to-[#F53803]
                             before:p-[2px] before:content-[''] after:absolute after:inset-[2px]
                             after:-z-10 after:rounded-full after:bg-black after:content-['']
                             group-hover:before:opacity-80 transition-all duration-300
                             shadow-[0_0_10px_rgba(255,140,55,0.3)]
                             group-hover:shadow-[0_0_20px_rgba(255,140,55,0.5)]
                             group-hover:scale-105
                             [box-shadow:inset_0_2px_15px_rgba(0,0,0,0.7),0_0_10px_rgba(255,140,55,0.3)]
                             group-hover:[box-shadow:inset_0_2px_15px_rgba(0,0,0,0.7),0_0_20px_rgba(255,140,55,0.5)]"
            >
              <span className="text-2xl sm:text-2xl font-medium">
                How It Works
              </span>
            </button>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-bold mb-6 text-white bg-clip-text text-transparent"
          >
            Our 3 Step Process
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl text-white"
          >
            To Book Calls From YouTube
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl border border-transparent bg-gradient-to-r from-[#ffffff] to-[#c5c5c5] p-[1px] h-full">
                <div className="relative bg-[#151515] rounded-3xl p-8 h-full backdrop-blur-xl">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="text-4xl mb-8 bg-gradient-to-r from-[#FF8C37] to-[#F53803] w-16 h-16 rounded-2xl flex items-center justify-center"
                  >
                    {step.icon}
                  </motion.div>

                  <motion.h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#FF8C37] to-[#F53803] bg-clip-text text-transparent">
                    {step.title}
                  </motion.h3>

                  {step.description && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white mb-6 text-lg leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  )}

                  {step.tasks && (
                    <div className="space-y-4">
                      {step.tasks.map((task, taskIndex) => (
                        <motion.div
                          key={taskIndex}
                          variants={taskVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 0.3 + taskIndex * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors duration-300"
                        >
                          <span className="font-medium text-gray-300 text-lg">
                            {task.name}
                          </span>
                          <span className="ml-auto text-[#FF8C37] text-sm">
                            {task.tag}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {step.metrics && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-3"
                    >
                      {step.metrics.map((metric, metricIndex) => (
                        <motion.span
                          key={metricIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-gray-800/30 rounded-full text-base font-medium text-gray-300 hover:bg-gray-800/50 transition-colors duration-300"
                        >
                          {metric}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="text-center mt-16"
        >
          <h4 className="text-5xl font-bold">
            All you have to do is{" "}
            <span className="bg-gradient-to-r from-[#FF8C37] to-[#F53803] bg-clip-text text-transparent">
              RECORD!!!
            </span>
          </h4>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
