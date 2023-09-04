import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="Selected Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Blog-Wise"
          des="A blogging Full-Stack Web Application with features such as regular email/password and Google OAuth Sign-In options, CSRF attack prevention, theme switching, email verification, and password reset."
          src={projectOne}
          githubLink="https://github.com/coderrohan14/BlogWise"
          websiteLink="https://coderrohan14.github.io/BlogWise-Client/"
        />
        <ProjectsCard
          title="ECommerce-AWS-Serverless"
          des="AWS Serverless E-Commerce app built using AWS CDK and AWS SDK incorporating event-driven microservices architecture."
          src={projectTwo}
          githubLink="https://github.com/coderrohan14/ECommerce-AWS-Serverless"
        />
        <ProjectsCard
          title="Jobs-Application-Management-API"
          des="A REST API built with Node.js, Express.js, and Mongoose, integrating Swagger UI documentation using swagger-ui-express and yamljs."
          src={projectThree}
          githubLink="https://github.com/coderrohan14/Jobs-Application-Management-API"
          websiteLink="https://sore-red-chipmunk-tam.cyclic.app/api-docs/"
        />
        <ProjectsCard
          title="Rail-Companion"
          des="A real-time cloud-update application with QR code-based verification, using Android SDK for developing the application, along with Firebase Firestore Database, CameraX library, and Jetpack Compose."
          src={projectFour}
          githubLink="https://github.com/coderrohan14/RailCompanion"
        />
        <ProjectsCard
          title="Covid-Zap"
          des="An Android application which helped users check the availability of beds in nearby hospitals along with the distance of the hospital from the user’s location during the Covid-19 pandemic, implemented using Covid-19 REST API, Volley, Firebase Auth, Google Maps API, and Geo-coder API."
          src={projectFive}
          githubLink="https://github.com/coderrohan14/CovidZap"
        />
        <ProjectsCard
          title="Shopping-Helper"
          des="An Android shopping list application implemented using Recycler View and Live Data using MVVM architecture where the users can store the shopping items along with their quantity and can also edit them later."
          src={projectSix}
          githubLink="https://github.com/coderrohan14/ShoppingHelper"
        />
      </div>
    </section>
  );
};

export default Projects;
