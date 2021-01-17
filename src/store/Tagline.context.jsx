import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const TaglineContext = createContext()

const TaglineContextProvider = props => {
	const [tagline, setTagline] = useState('')
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		const taglineQuery = `*[_type == "tagline"]`
		sanityClient.fetch(taglineQuery).then(tagline => {
			tagline.forEach(tagline => {
				setTagline(tagline)
				setLoaded(true)
			})
		})
		return
	}, [])
	return (
		<TaglineContext.Provider value={{ tagline }}>
			{loaded ? props.children : null}
		</TaglineContext.Provider>
	)
}

export default TaglineContextProvider
