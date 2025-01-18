import Project from "./Project"

export default function Creations() {
	return (
		<section className='creations'>
			<div>
				<h4>Creations</h4>
				<p className='title-description'>
					<i>Things I built. Live and on-going projects.</i>
				</p>
			</div>

			<div className='creations-list'>
				<Project
					url='https://www.cerberustrading.net'
					name='CRBRS'
					description='An LMS for a private trading firm.'
				/>
				<Project
					url='https://paurillo-dave.vercel.app/'
					name='Personal Portfolio'
					description='This awesome website.'
				/>
				<Project
					url='https://github.com/davePawww/dev-overflow'
					name='DevOverflow'
					description='A better version of StackOverflow.'
				/>
				<Project
					url='https://github.com/davePawww/Bloggr'
					name='Bloggr'
					description='A platform where I put my distilled thoughts.'
				/>
				<Project
					url='https://github.com/davePawww/petsoft'
					name='PetSoft'
					description='A pet management system.'
				/>
				<Project
					url='https://github.com/davePawww/evento'
					name='Evento'
					description='A simple event management system.'
				/>
			</div>
		</section>
	)
}
