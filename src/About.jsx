import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFaceSmileWink,
	faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";
import "./CSS Files/about.css";
import AOS from "aos";
import "aos/dist/aos.css";

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

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section className="about-section" id="About">
			<h1 className="about-title">
				About<span style={{ color: "#FF004F" }}>.</span>
			</h1>
			<div className="section-divider"></div>
			<div className="content-wrapper">
				<div
					className="about-text"
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-easing="ease-in-sine"
				>
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
				</div>
				<div
					className="right-section"
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-easing="ease-in-sine"
				>
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
