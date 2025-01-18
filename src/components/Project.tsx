type Props = {
	url: string
	name: string
	description: string
}

export default function Project({ url, name, description }: Props) {
	return (
		<section className='creation-item'>
			<div className='ci-container'>
				<a
					className='underline'
					href={url}
					target='_blank'
					rel='noopener noreferrer'
				>
					{name}
				</a>
				<p className='project-text'>{description}</p>
			</div>
		</section>
	)
}
