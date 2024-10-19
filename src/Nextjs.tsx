import { Link } from "react-router-dom";
import "./NextJS.css";
import { BsArrowLeft } from "react-icons/bs";

const NextJS = () => {
	return (
		<>
			<Link className='back' to='/'>
				<BsArrowLeft /> <h5 className='back-text'>Back</h5>
			</Link>

			<div className='craft-wrapper'>
				<h4>Craft</h4>
				<div className='craft-projects'>
					<section>
						<h4>Next.js</h4>
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
					</section>

					<section>
						<h4>React</h4>
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
					</section>

					<section>
						<h4>Css</h4>
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
					</section>

					<section>
						<h4>Animations</h4>
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
					</section>
				</div>
			</div>
		</>
	);
};

export default NextJS;
