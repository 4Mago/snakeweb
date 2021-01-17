import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const HeaderContext = createContext()

const HeaderContextProvider = props => {
	const [header, setHeader] = useState('')
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		const headerQuery = `*[_type == "header"]`
		sanityClient.fetch(headerQuery).then(header => {
			header.forEach(header => {
				setHeader(header)
			})
			setLoaded(true)
		})
		return
	}, [])
	return (
		<HeaderContext.Provider value={{ header }}>
			{loaded ? props.children : null}
		</HeaderContext.Provider>
	)
}

export default HeaderContextProvider
