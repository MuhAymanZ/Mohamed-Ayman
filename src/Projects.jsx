import React from "react";
import "./CSS Files/projects.css";

import Telestore from "./Images/Telestore.png";
import GradProject from "./Images/GradProject.png";
import Popcorn from "./Images/Popcorn.png";
import WorldWise from "./Images/WorldWise.png";
import ReactQuiz from "./Images/React Quiz.png";
import TravelList from "./Images/TravelList.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({
	title,
	imageSrc,
	githubLink,
	technologies,
	description,
}) {
	return (
		<div className="project">
			<a href={githubLink} target="_blank" rel="noopener noreferrer">
				<img className="images" src={imageSrc} alt={title} />
			</a>
			<div className="project-info">
				<div className="project-title">
					<h2>{title}</h2>
					<div className="liness"></div>
					<a href={githubLink} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</a>
				</div>
				<h3>
					<span style={{ color: "#FF004F" }}>{technologies}</span>
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<div id="Projects">
			<h1 className="title">
				My Projects <span style={{ color: "#FF004F" }}>.</span>{" "}
			</h1>
			<div className="projects-wrapper">
				<ProjectCard
					title="WorldWise"
					imageSrc={WorldWise}
					githubLink="https://github.com/MuhAymanZ/worldwise"
					technologies="ReactJs,
          React Router,
          Context Api,
          useReducer,
          Css Modules,
          Leaflet Api,
          Fake User Authintication,
          POST / GET / DELETE from a fake api (json-server)"
					description="Worldwise is a web application designed for travelers to capture moments and take notes about their journeys in different countries. By selecting the countries they have visited, users can write about their thoughts and feelings regarding each destination."
				/>

				<ProjectCard
					title="College Council Management System | Graduation Project"
					imageSrc={GradProject}
					githubLink="https://github.com/MuhAymanZ/Grad-Project"
					technologies="HTML, CSS, Javascript, PHP, MySQL, Figma"
					description="It is a web-based platform has been developed to improve council member collaboration and meeting management. It facilitates effective decision-making by providing a structured approach to planning and recording discussions on different topics."
				/>

				<ProjectCard
					title="TeleStore | ITI Project"
					imageSrc={Telestore}
					githubLink="https://github.com/MuhAymanZ/telestore-ecommerce"
					technologies="React JSX, CSS, Bootstrap, Swiper.js, FontAwesome"
					description="TeleStore is a dynamic react ecommerce website, It has features like adding/removing to/from cart, filtering the products and it is fully dynamic and responsive."
				/>

				<ProjectCard
					title="Popcorn"
					imageSrc={Popcorn}
					githubLink="https://github.com/MuhAymanZ/Popcorn"
					technologies="ReactJs,
          Css,
          OMDb API (Fake Movies Api),
          localStorage (Custom hook i made)"
					description="Popcorn is a web react app for rating movies you have watched. you can search, select, see movies details, rate and delete movies from the watched list."
				/>

				<ProjectCard
					title="React Quiz"
					imageSrc={ReactQuiz}
					githubLink="https://github.com/MuhAymanZ/react-quiz"
					technologies="ReactJs,
          CSS,
          Json Server,
          Context Api,
          useReducer"
					description="React Quiz App is a simple quiz application that dynamically fetch questions from a json file (json-server), and track score of answering right within the time limit for the quiz"
				/>
				<ProjectCard
					title="Static Portfolio "
					imageSrc={TravelList}
					githubLink="https://github.com/MuhAymanZ/travel-list"
					technologies="ReactJs,
          Css,
          LocalStorage"
					description="Travel List App is a simple react web application made for managing your trip item list, as you can add items and their number (how many), check for packed items, delete/deleteAll and sort the items in different ways"
				/>
			</div>
		</div>
	);
}

export default Projects;
