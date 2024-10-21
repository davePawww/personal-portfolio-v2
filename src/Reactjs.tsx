import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Reactjs = () => {
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
							<p className='project-text'>Simple Calculator</p>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Reactjs;
