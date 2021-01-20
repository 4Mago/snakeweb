import React from 'react'
import styled from 'styled-components'
const Header = styled.h2`
	display: inline;
	position: relative;
	&::after {
		position: absolute;
		left: -15%;
		top: 50%;
		z-index: -1;
		content: '';
		display: block;
		width: 130%;
		height: 23px;
		background: rgba(64, 109, 245, 0.63);
	}
`
const HeaderText = props => {
	return <Header>{props.children}</Header>
}

export default HeaderText
