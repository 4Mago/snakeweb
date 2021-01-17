import React, { useContext } from 'react'
import styled from 'styled-components'
import SampleCTA from '../cta/samplecta.component'
import { ProjectContext } from '../../store/Project.context'
import ClientImage from '../misc/client-image.component'
import HeaderText from '../misc/header-text.component'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const OuterContainer = styled.div`
	margin-top: 5%;
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto;
	height: 400px;
	margin-top: 10vh;
	gap: 20px;

	@media screen and (min-width: 1300px) {
		justify-content: space-around;
		margin-bottom: 5vh;
	}
	@media screen and (max-width: 700px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 5vh 4%;
		gap: 10vh;
		height: 550px;
		margin-top: 0;
	}
	@media screen and (max-width: 450px) {
	}
`

const ImgContainer = styled.div`
	height: auto;
	width: 100%;
	max-width: 600px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		width: 80%;
		height: 80%;
	}
	@media screen and (max-width: 900px) {
		width: 100%;
		padding: 0;
	}
	@media screen and (max-width: 700px) {
		height: auto;
	}
	&::after {
		position: relative;
		top: -55%;
		right: 10%;
		z-index: -1;
		content: '';
		display: block;
		width: 70%;
		height: 70%;
		background: #ff847f;

		@media screen and (max-width: 1000px) {
			width: 80%;
			height: 80%;
			top: -70%;
			padding: 0;
		}
		@media screen and (max-width: 800px) {
			width: 82%;
			right: 7%;
			margin-left: 3%;
		}
	}
`
const TextContainer = styled(motion.div)`
	max-width: 600px;
	margin-right: 20px;
	@media screen and (max-width: 1000px) {
		padding: 0;
		margin-right: 0;
	}
	@media screen and (max-width: 900px) {
		width: 100%;
		padding: 0;
	}
`

const Text = styled(motion.p)`
	text-align: right;
	max-width: 600px;
	padding-bottom: 25px;

	@media screen and (max-width: 700px) {
		text-align: center;
		padding: 0;
	}
	@media screen and (max-width: 400px) {
		font-size: 14px;
	}
`

const transition = { duration: 0.6, ease: [0.43, 0.013, 0.23, 0.96] }
const variants = {
	visible: { opacity: 1, transition: transition },
	hidden: { opacity: 0, transition: transition },
}

const Sample = ({ inView }) => {
	const { project } = useContext(ProjectContext)
	let sample = project[Math.floor(Math.random() * (project.length - 1))]

	return (
		<motion.div
			variants={variants}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
		>
			<OuterContainer>
				<HeaderText>Tidigare Projekt</HeaderText>

				<Container>
					<ImgContainer>
						<Link to={`/project/${sample.clientName.toLowerCase()}`}>
							<ClientImage image={sample.websiteImage} />
						</Link>
					</ImgContainer>
					<TextContainer>
						<HeaderText>{sample.clientName}</HeaderText>
						<Text>{sample.description}</Text>
						<SampleCTA>Kontakt</SampleCTA>
					</TextContainer>
				</Container>
			</OuterContainer>
		</motion.div>
	)
}

export default Sample
