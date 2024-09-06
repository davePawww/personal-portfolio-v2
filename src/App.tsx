import "./App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<main>
			<header>
				<h3>Dave Paurillo</h3>
			</header>
			<body>
				<section>
					<p>
						<i>
							Turning designs into functional and visually
							compelling webpages. Creating magical experiences
							with the help of animations.
						</i>
					</p>
				</section>

				<section>
					<p>
						In the past, I've worked as a Full Stack Engineer at{" "}
						<a
							className='underline'
							href='https://www.oneaston.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							OneAston(CBTW)
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
							Accenture
						</a>{" "}
						as a Software Engineer. I was deployed in Google @
						Android Enterprise where I started to create an impact
						by creating in-house apps that helped my team be
						efficient in our day to day tasks. In Accenture, I was
						able to hone my leadership skills as I was tasked to
						handle a small team.
					</p>
				</section>

				<section className='build'>
					<div className='building'>
						<h4>In development</h4>
						<Link className='underline' to='/craft'>
							Craft
						</Link>
						<p className='project-text'>
							Some of the things I am building to improve my
							skills.
						</p>
					</div>

					<div className='projects'>
						<h4>Projects</h4>
						<div>
							<a
								className='underline'
								href='https://github.com/DavePaurillo/CRBRS-Trading'
								target='_blank'
								rel='noopener noreferrer'
							>
								Cerberus
							</a>
							<p className='project-text'>
								LMS system for traders in the Cerberus
								community.
							</p>
						</div>
					</div>
				</section>

				<section>
					<h4>Now</h4>
					<p>
						I left Accenture after 5 years to focus on my health and
						to regain myself. As I continue my lifelong journey as a
						developer, all I want to do is build websites. I want to
						be able to always give my 100% because it gives me great
						joy and pleasure when I see people using and admiring my
						work.
					</p>

					<p>
						I'm currently looking for a full remote work. I'm also
						open for relocation w/ visa sponsorship and assistance.
					</p>
				</section>
				<section>
					<h4>
						<i>Connect</i>
					</h4>
					<p>
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
			</body>
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
