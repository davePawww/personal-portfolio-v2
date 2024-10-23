import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NextJS = () => {
	useGSAP(() => {
		gsap.set([".back", ".title-container", ".projects-list"], {
			opacity: 0,
		});

		gsap.to([".back", ".title-container", ".projects-list"], {
			ease: "power4.in",
			duration: 0.6,
			opacity: 1,
			stagger: 0.1,
		});
	});

	return (
		<>
			<Link className='back' to='/'>
				<BsArrowLeft className='arrow-back' />{" "}
				<h5 className='back-text'>
					<i>Index</i>
				</h5>
			</Link>

			<div className='craft-wrapper'>
				<div className='title-container'>
					<h4>NextJS</h4>
					<p className='project-text'>
						Showcase of the NextJS projects I've built.
					</p>
				</div>

				<div className='projects-list'>
					<section className='project-item'>
						<div className='njs-container'>
							<Link className='underline' to='/nextjs'>
								Cerberus Trading
							</Link>
							<p className='project-text'>
								A Landing page and LMS for a Filipino Trading
								Community.
							</p>
						</div>
					</section>

					<section className='project-item'>
						<div className='njs-container'>
							<Link className='underline' to='/nextjs'>
								IP Address Tracking
							</Link>
							<p className='project-text'>
								Trying to learn more on how to track IP
								addresses.
							</p>
						</div>
					</section>

					<section className='project-item'>
						<div className='njs-container'>
							<Link className='underline' to='/nextjs'>
								Countries
							</Link>
							<p className='project-text'>
								Simple fetch with REST Coutries API and a light
								and dark theme toggle switch.
							</p>
						</div>
					</section>

					<section className='project-item'>
						<div className='njs-container'>
							<Link className='underline' to='/nextjs'>
								Advice Generator
							</Link>
							<p className='project-text'>
								Click and you get an advice.
							</p>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default NextJS;
