import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Reactjs = () => {
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
					<h4>React.js</h4>
					<p className='project-text'>
						Showcase of the ReactJS projects I've built.
					</p>
				</div>

				<div className='projects-list'>
					<section className='project-item'>
						<div className='rjs-container'>
							<Link className='underline' to='/nextjs'>
								Rock, Paper, Scissors, Lizard, Spock
							</Link>
							<p className='project-text'>Game made for fun.</p>
						</div>
					</section>

					<section className='project-item'>
						<div className='rjs-container'>
							<Link className='underline' to='/nextjs'>
								Calculator
							</Link>
							<p className='project-text'>Simple Calculator.</p>
						</div>
					</section>

					<section className='project-item'>
						<div className='rjs-container'>
							<Link className='underline' to='/nextjs'>
								Personal Portfolio
							</Link>
							<p className='project-text'>This website.</p>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Reactjs;
