import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Career Highlights
          </p>
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Visiting Software Researcher"
            subTitle="MacEwan University (Jun 2022 - Sep 2022)"
            result="Edmonton, AB, Canada"
            bullets={[
              "Conducted in-depth analysis of various AR teaching methods targeting kinesthetic learners.",
              "Developed marker-less AR applications to enhance users’ understanding of Computer Science concepts.",
              "Utilized Unity 3D, ARCore, FreeCAD, and C# to create innovative AR applications.",
            ]}
          />
          <ResumeCard
            title="Software Engineering Intern"
            subTitle="SuperShare (Jun 2021 - Oct 2021)"
            result="Bengaluru, India"
            bullets={[
              "Collaborated with the Android team to implement social media login features using Google and Facebook sign-in, increasing user sign-ups by 40%.",
              "Designed and implemented an auto-entering feature for mobile number and OTP authentication, reducing the login process time by 50%.",
              "Resolved several UI-related bugs in the app, resulting in a smoother user experience and reducing negative feedback by 25%.",
              "Employed MVVM architecture pattern and technologies like Workers, Broadcast Receivers, Jetpack Compose, and Clevertap.",
            ]}
          />
          <ResumeCard
            title="Competitive Programming Lead"
            subTitle="CodeChef SRM NCR Chapter (Jul 2020 - Jan 2022)"
            result="Delhi, India"
            des="Led the CodeChef SRM NCR Chapter. Managed a core team of 50 members, and mentored a community group of over 1000 members, upskilling them in Competitive Programming and Software Development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
