import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'


export const AboutContext = createContext()

const AboutContextProvider = props => {
	const [about, setAbout] = useState('')
    const [loaded, setLoaded] = useState(false)
    
	useEffect(() => {
		const aboutQuery = `*[_type == "about"]`
		sanityClient.fetch(aboutQuery).then(about => {
			about.forEach(about => {
				setAbout(about)
			})
			setLoaded(true)
		})
		return
	}, [])
	return (
		<AboutContext.Provider value={{ about }}>
			{loaded ? props.children : null}
		</AboutContext.Provider>
	)
}

export default AboutContextProvider
