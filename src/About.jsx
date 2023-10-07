import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFaceSmileWink,
	faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";
import "./CSS Files/about.css";

function About() {
	const languages = [
		"HTML/HTML5",
		"CSS/CSS3",
		"JavaScript/ES6",
		"ReactJs",
		"Github/Git",
		"Bootstrap CSS",
		"SQL",
	];

	return (
		<section className="about-section" id="About">
			<h1 className="about-title">
				About<span style={{ color: "#FF004F" }}>.</span>
			</h1>
			<div className="section-divider"></div>
			<div className="content-wrapper">
				<div className="about-text">
					<p>
						As a fresh graduate from the BIS department, I have practical a
						experience by building several projects and I've acquired
						certifications in various technologies.
					</p>
					<br />
					<p>
						My primary interest is in computers and software topics. I am
						dedicated to ongoing learning and actively seeking opportunities to
						expand my knowledge and skills in this field
					</p>
					{/* <br />
					<p>
						In my personal life, I enjoy spending
						time playing video games, and , and working out.{" "}
					</p>
					<br />
					<p>
						Feel free to reach out if you would like to explore the potential of
						working together!
					</p> */}
				</div>
				<div className="right-section">
					<div className="tools">
						<h1>
							<FontAwesomeIcon
								icon={faFaceSmileWink}
								style={{ color: "#ff005a" }}
							/>{" "}
							Languages/Frameworks
						</h1>
						<div className="lang-container">
							{languages.map((language, index) => (
								<span key={index}>{language}</span>
							))}
						</div>
						<br />
						{/* <h1>
							<FontAwesomeIcon
								icon={faFaceSmileBeam}
								style={{ color: "#ff005a" }}
							/>{" "}
							Learning
						</h1>
						{learning.map((item, index) => (
							<span key={index}>{item}</span>
						))} */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
