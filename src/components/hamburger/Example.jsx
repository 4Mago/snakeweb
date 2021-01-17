import React, { useRef, useState, useEffect } from 'react'
import { motion, useCycle } from 'framer-motion'
import MenuToggle from './MenuToggle'
import Navigation from './Navigation'

import styled from 'styled-components'

const sidebar = {
	open: () => ({
		clipPath: `circle(${1000 * 2 + 200}px at 260px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 260px 40px)',

		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
}

const Container = styled.div`
	position: fixed;
	height: 100vh;
	width: 100%;
	z-index: 9;
	display: none;
	@media screen and (min-width: 968px) {
		display: visible;
	}

`

const Nav = styled(motion.nav)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 0;
	z-index: 99;
`

const Background = styled(motion.div)`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	width: 300px;
	background: #fff;
	opacity: 0.4;
	transition: opacity 0.4s ease-in-out;
	@media screen and (min-width: 968px) {
		opacity: 0;
		display: none;
	}
	@media screen and (max-width: 700px) {
		opacity: 0.7;
	}
`

const Example = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const [hover, setHover] = useState(false)
	const BackgroundToggle = useRef(null)
	useEffect(() => {
		let style = BackgroundToggle.current.style
		if (hover || isOpen) {
			style.opacity = 0.8
		} else {
			style.opacity = 0.4
		}
	}, [isOpen, hover])
	return (
		<>
			<Container
				style={isOpen ? { display: 'block' } : { display: 'none' }}
				onClick={() => (isOpen ? toggleOpen() : null)}
			></Container>
			<Nav initial={false} animate={isOpen ? 'open' : 'closed'}>
				<Background ref={BackgroundToggle} variants={sidebar} />
				<Navigation isOpen={isOpen} toggle={() => toggleOpen()} />
				<MenuToggle setHover={setHover} toggle={() => toggleOpen()} />
			</Nav>
		</>
	)
}

export default Example
