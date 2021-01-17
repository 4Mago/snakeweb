import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProjectContext } from '../../store/Project.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}
const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;

	@media screen and (max-width: 400px) {
		margin-top: 100vh;
	}
`

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
`
const Card = styled.div`
	display: flex;
	height: 500px;
	width: 500px;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 0 1em 2em 1em;
	box-sizing: border-box;
`

const Title = styled.h2``
const ProjectText = styled.p``
const ProjectImage = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
`

const Projects = () => {
	const { project } = useContext(ProjectContext)

	return (
		<Container>
			<Grid>
				{project
					? project.map((item, id) => (
							<Card key={id}>
								<Link
									style={{ textDecoration: 'none' }}
									to={`/project/${item.clientName.toLowerCase()}`}
								>
									<ProjectImage
										alt='website image'
										src={urlFor(item.websiteImage).url()}
									/>

									<Title>{item.clientName}</Title>
									<ProjectText>{item.description}</ProjectText>
								</Link>
							</Card>
					  ))
					: null}
			</Grid>
		</Container>
	)
}

export default Projects
