import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Path = props => (
	<motion.path
		fill='transparent'
		strokeWidth='3'
		stroke='hsl(0, 0%, 18%)'
		strokeLinecap='round'
		{...props}
	/>
)

const Button = styled.button`
	outline: none;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: absolute;
	z-index: 999;
	top: 23px;
	right: 20px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: transparent;

	@media screen and (min-width: 968px) {
		opacity: 0;
		display: none;
	}
`

const MenuToggle = ({ setHover, toggle }) => {
	return (
		<Button
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={toggle}
		>
			<svg width='23' height='23' viewBox='0 0 23 23'>
				<Path
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<Path
					d='M 2 9.423 L 20 9.423'
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</Button>
	)
}

export default MenuToggle
