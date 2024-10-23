import "./App.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
	useGSAP(() => {
		gsap.set(
			[".name", ".main", ".creations", ".now", ".connect", ".footer"],
			{
				opacity: 0,
			}
		);

		gsap.set([".back", ".title-container", ".projects-list"], {
			opacity: 0,
		});

		gsap.to(
			[".name", ".main", ".creations", ".now", ".connect", ".footer"],
			{
				ease: "power4.in",
				duration: 0.6,
				opacity: 1,
				stagger: 0.1,
			}
		);
	});

	return (
		<main>
			<header className='name'>
				<h3>Dave Paurillo</h3>
			</header>
			<div className='container'>
				<section className='main'>
					<p>
						<i>
							Turning designs into functional and visually
							compelling webpages. Creating magical experiences
							with the help of animations.
						</i>
					</p>

					<p>
						In the past, I've worked as a Full Stack Developer at{" "}
						<a
							className='underline'
							href='https://www.oneaston.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i>OneAston(CBTW)</i>
						</a>{" "}
						where I was able to create a strong foundation in web
						development both frontend and backend.
					</p>

					<p>
						In search for growth, I left OneAston after 4 years and
						joined{" "}
						<a
							className='underline'
							href='https://www.accenture.com/ph-en'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i>Accenture</i>
						</a>{" "}
						as a Software Engineer. I was deployed in Google @
						Android Enterprise where I started to create an impact
						by creating in-house web applications that helped my
						team be efficient in our day to day tasks. In Accenture,
						I was able to hone my leadership skills as I was tasked
						to handle a small team.
					</p>
				</section>

				<section className='creations'>
					<div>
						<h4>Creations</h4>
						<p className='title-description'>
							<i>
								Things I built on my spare time. Sample projects
								and some live projects.
							</i>
						</p>
					</div>

					<div className='creations-list'>
						<section className='creation-item'>
							<div className='ci-container'>
								<Link className='underline' to='/nextjs'>
									Next.js
								</Link>
								<p className='project-text'>
									Next.JS projects storage.
								</p>
							</div>
						</section>

						<section className='creation-item'>
							<div className='ci-container'>
								<Link className='underline' to='/reactjs'>
									React
								</Link>
								<p className='project-text'>
									ReactJS projects storage.
								</p>
							</div>
						</section>

						<section className='creation-item'>
							<div className='ci-container'>
								<Link className='underline' to='/animations'>
									Animations
								</Link>
								<p className='project-text'>
									Greensock Animation platform storage.
								</p>
							</div>
						</section>
					</div>
				</section>

				<section className='now'>
					<h4>Now</h4>
					<p className='description'>
						I left Accenture after 5 years to focus on my health and
						to be able to deliver and give my 100% again in my
						craft. As I continue my lifelong journey as a developer,
						all I want to do is build websites. It gives me great
						joy and pleasure when I see people using and admiring my
						work.
					</p>

					<p className='description looking'>
						<i>
							I'm currently looking for a full-time remote work,
							Front-end developer or a Software Engineer role. I'm
							also open for relocation w/ visa sponsorship and
							assistance(Hybrid).
						</i>
					</p>
				</section>
				<section className='connect'>
					<h4>Connect</h4>
					<p className='description'>
						Reach me at{" "}
						<a
							className='underline'
							href='mailto:paurillo.dave@gmail.com'
						>
							paurillo.dave@gmail.com
						</a>{" "}
						or my{" "}
						<a
							className='underline'
							href='https://www.linkedin.com/in/jaean-leo-david-paurillo-26a40b100/'
							target='_blank'
							rel='noopener noreferrer'
						>
							LinkedIn
						</a>
						.
					</p>
				</section>
			</div>
			<footer>
				<div className='footer'>
					<p>
						<i>Curiousity. Obsession.</i>
					</p>
					<p>2024 ©</p>
				</div>
			</footer>
		</main>
	);
}

export default App;
