import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '@sanity/client'
import ClientImage from './client-image.component'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../cta'
import CTA2 from '../cta'

const Sample = () => {

	const [project, setProject] = useState('')
		useEffect(() => {
			const projectQuery = `*[_type == "client"]{
				clientName, websiteImage
			}`
			sanityClient.fetch(projectQuery).then(project => {
				const projectArray = []
				project.forEach(project => {
					projectArray.push(project)
				})
				setProject(projectArray)
			})
			return
		}, [])

	let sample = project[Math.floor(Math.random() * (project.length))]

	return (
			<OuterContainer>
				<Container>
					<ImgContainer>
							<HeaderText>{sample.clientName}</HeaderText>
							<Link to={`/${sample.clientName.toLowerCase()}`}>
								<ClientImage image={sample.websiteImage} />
							</Link>
					<TextContainer>
						<CTA2> Fler projekt </CTA2>
						<CTA>Nästa</CTA>
					</TextContainer>
					</ImgContainer>
				</Container>
			</OuterContainer>
	)
}

export default Sample


const OuterContainer = styled(motion.div)`
	padding-right: 12vw;
	color: white;
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto;
	height: 30px;

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

const HeaderText = styled(motion.h2)`
margin: 0;
padding: 0;
	font-size: 1 rem;
`

const ImgContainer = styled(motion.div)`
	height: auto;
	max-width: 270px;

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
`
const TextContainer = styled(motion.div)`
	max-width: 300px;
	margin-right: 20px;
	display: flex;
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
	max-width: 300px;
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
