import React, { useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AboutContext } from '../store/about.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	text-align: center;
	justify-content: center;
	color: #4a1f1f;
	font-family: poppins;
	h1 {
		padding: 0 35px 0 0;
	}
`

const Motion = styled(motion.div)`
`

const SegmentContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 50vh;
	gap: 100px;
	padding: 15px;
	margin: 15px;
`

const Segment = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const Textcontainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	height: 50vh;
`

const Photo = styled.img`
	width: auto;
	height: 50vh;
	margin: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const AboutText = styled.div`
	padding: 15px;
	margin: 15px;
	text-align: center;
`

const About = () => {
	const { about } = useContext(AboutContext)

	return (
		<Motion
			exit={{ opactiy: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
		>
	<Container>
			<SegmentContainer>
				<br />
			<h1>{about.title}</h1>
				<Segment>
					<Photo
					alt='hero image'
					className='heroimage'
					id='heroimage'
					src={urlFor(about.image).url()}/>
				</Segment>
				<Textcontainer>
				<AboutText>{about.description}</AboutText>
			</Textcontainer>
		</SegmentContainer>
	</Container>
</Motion>
	)
}
export default About
