import React from 'react'
import styled from 'styled-components'

const ArrowDown = styled.svg`
	transition: 0.25s all ease-in-out;
	animation: mymove 1s infinite alternate;
	@keyframes mymove {
		0% {
			transform: translateY(5px);
		}

		100% {
			transform: translateY(-5px);
		}
	}

	@media screen and (max-width: 700px) {
		display: none;
	}
`
const ArrowCont = styled.div`
	position: absolute;
	top: 85vh;
	left: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	height: 60px;
	width: 60px;
	transition: opacity 0.2s ease-in-out;
	opacity: 0.4;
	&:hover {
		opacity: 0.8;
	}
`

const Arrow = () => {
	return (
		<ArrowCont
			onClick={() =>
				window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
			}
		>
			<ArrowDown
				width='30'
				height='17'
				viewBox='0 0 30 17'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M13.5858 16.4142C14.3668 17.1953 15.6332 17.1953 16.4142 16.4142L29.1421 3.68629C29.9232 2.90524 29.9232 1.63891 29.1421 0.857863C28.3611 0.0768147 27.0948 0.0768148 26.3137 0.857863L15 12.1716L3.68629 0.857865C2.90524 0.0768168 1.63891 0.0768169 0.857863 0.857866C0.0768148 1.63891 0.0768149 2.90524 0.857864 3.68629L13.5858 16.4142ZM13 14L13 15L17 15L17 14L13 14Z'
					fill='white'
				/>
			</ArrowDown>
		</ArrowCont>
	)
}

export default Arrow
