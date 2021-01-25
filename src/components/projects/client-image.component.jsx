import React from 'react'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'

const Image = styled.img`
	width: 100%;
	height: auto;
`

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
	return builder.image(source)
}

const ClientImage = ({ image }) => {
	console.log(image)
	return <Image src={urlFor(image).url()} />
}

export default ClientImage
