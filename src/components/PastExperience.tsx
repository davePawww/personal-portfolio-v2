export default function PastExperience() {
	return (
		<section className='main'>
			<p>
				<i>
					Turning designs into functional and visually compelling webpages.
					Creating magical experiences with the help of animations.
				</i>
			</p>

			<OneAston />
			<Accenture />
		</section>
	)
}

function OneAston() {
	return (
		<p>
			In the past, I worked as a Frontend Developer at{" "}
			<a
				className='underline'
				href='https://www.oneaston.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i>OneAston(CBTW)</i>
			</a>{" "}
			where I built a solid foundation in web development, honing my skills in
			crafting responsive, user-centric interfaces and mastering the
			fundamentals of the craft.
		</p>
	)
}

function Accenture() {
	return (
		<p>
			Seeking new challenges and opportunities for growth, I transitioned from
			OneAston after four years to join{" "}
			<a
				className='underline'
				href='https://www.accenture.com/ph-en'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i>Accenture</i>
			</a>{" "}
			as a Software Engineer. At Accenture, I was deployed to Google’s Android
			Enterprise team, where I made a meaningful impact by developing in-house
			web applications that streamlined daily workflows and improved team
			efficiency. Additionally, I had the opportunity to hone my leadership
			skills by managing small teams, further strengthening my ability to guide
			and support others in achieving shared goals.
		</p>
	)
}
