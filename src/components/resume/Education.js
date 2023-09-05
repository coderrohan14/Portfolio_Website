import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Science in Computer Science (MSCS)"
            subTitle="University of California Santa Cruz"
            result="4.0"
            des="Currently enrolled for Analysis of Algorithms and Storage Systems courses."
          />
          <ResumeCard
            title="B.Tech in Computer Science and Engineering"
            subTitle="SRM Institute of Science and Technology (2019 - 2023)"
            result="9.21 / 10 CGPA"
            des="Studied core Computer Science subjects such as Data Structures, Algorithms, Computer Networks, Databases, Operating System, etc."
          />
          <ResumeCard
            title="High Schooling"
            subTitle="Delhi Public School, Bhiwani"
            result="86.2%"
            des="Studied subjects such as Computer Science, Mathematics, Physics, and Chemistry."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AWS Serverless Microservices with Patterns & Best Practices"
            subTitle="Udemy - (Jul. 2023 - Sep. 2023)"
            result="Online"
            des="Learned about AWS Serverless microservices architecture and various AWS services such as Lambda, DynamoDB, EventBridge, APIGateway, etc."
            link="https://www.udemy.com/certificate/UC-3f4d8357-ad53-4878-8d89-a454fdd32a24/"
          />
          <ResumeCard
            title="The Complete 2023 Web Development Bootcamp"
            subTitle="Udemy - (Feb. 2022 - Apr. 2022)"
            result="Online"
            des="Learned Full-Stack Web Development using MERN stack along with frontend frameworks and libraries such as Bootstrap, jQuery, etc."
            link="https://www.udemy.com/certificate/UC-3db7501b-accd-4393-9168-45c5811c9244/"
          />
          <ResumeCard
            title="Android App Development"
            subTitle="Internshala Trainings - (May 2020 - Jun. 2020)"
            result="Online"
            des=" Learned Android Development using Kotlin, XML, and Android Studio along with libraries such as Volley, Room Persistence library, etc."
            link="https://drive.google.com/file/d/1rrEyLalwlw9fxThpDg4Fu2u0gSy5wHyv/view?usp=sharing"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
