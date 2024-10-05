import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StepCard = ({ step, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="bg-[#1c1c2e] rounded-lg p-6 shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-[#fce54d] rounded-full flex items-center justify-center text-[#090517] font-bold text-xl mr-4">
          {step}
        </div>
        <h3 className="text-[#fce54d] text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-white">{description}</p>
    </motion.div>
  );
};

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#090517] py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={titleVariants}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          How it works
        </motion.h1>
        <div className="max-w-3xl mx-auto">
          <StepCard
            step={1}
            title="Get on Camera"
            description="Allocate time for recording, and let us handle the rest. We will develop video ideas and scripts in advance. We'll guide you through best practices for recording videos that drive performance and conversions."
          />
          <StepCard
            step={2}
            title="We Edit The Videos"
            description="Watch your recordings come to life as we transform them into both long and short-form videos. Enjoy a steady stream of content, allowing you to post daily or multiple times a day."
          />
          <StepCard
            step={3}
            title="Propagate Onto All Platforms"
            description="Leave the distribution to us. We'll take your videos and share them across all platforms. Sit back, relax, and witness the views and conversions roll in effortlessly."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
