import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Success Highlights
          </p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Globalink Research Fellowship"
            subTitle="Supports research collaborations between Canada and select partner organizations and eligible countries and regions."
            result="Mitacs"
            des="Recipient of MITACS Globalink Research Fellowship, awarded [$9000] grant for conducting research at MacEwan University, Canada."
          />
          <ResumeCard
            title="Ranked 114th in a global competitive coding contest"
            subTitle="CodeChef is one of the biggest Competitive Programming platforms in India."
            result="CodeChef"
            des="Ranked 114th out of 22,477 participants in CodeChef December Long Challenge 2020 (Div-2)"
          />
          <ResumeCard
            title="Ranked 1st in multiple college-level coding contests"
            subTitle="Coding contests held for selection of core team members and representing the university in global coding contests."
            result="CodeChef SRM NCR Chapter"
            des="Ranked 1st out of over 600 participants in the CodeChef SRM NCR Chapter (university's coding club) Core Team selection and the SRM ICPC team selection coding contest."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
