import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(64, 109, 245, 0.63);
	border-radius: 12px 7px;
	border: none;
	width: 160px;
	max-height: 60px;
	margin: 0 30px;
	cursor: pointer;

	@media screen and (max-width: 700px) {
		position: fixed;
		top: 90vh;
		left: 15%;
		width: 60%;
		height: 5vh;
		background: rgba(64, 109, 245, 1);
		box-shadow: 0 5px 2px rgba(40, 40, 255, 0.2);
		z-index: 999;
	}
	@media screen and (max-width: 400px) {
		left: 0;
		width: 80%;
	}
`
const MenuLink = styled(Link)`
	text-decoration: none;
`

const Text = styled.p`
	color: white;
	font-size: 16px;
	padding-right: 20px;
	text-decoration: none;

	@media screen and (max-width: 700px) {
		font-size: 3.5vw;
	}
`
const Icon = styled.img``
const CTA = props => {
	return (
		<Button id='button'>
			<MenuLink to='/kontakt'>
				<Text>{props.children}</Text>
			</MenuLink>
			<svg
				width='8'
				height='18'
				viewBox='0 0 8 18'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M1 1C8.62672 8.79006 8.90954 8.75176 1 17'
					stroke='white'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
			<Icon src='' />
		</Button>
	)
}

export default CTA
