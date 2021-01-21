import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const ProjectsContext = createContext()

const ProjectsContextProvider = props => {
	const [projects, setProjects] = useState('')
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		const projectsQuery = `*[_type == "client"]{
			clientName, logo, "imageUrl": websiteImage.asset->url, description, websiteLink
		}`
		sanityClient.fetch(projectsQuery).then(projects => {
			const projectsArray = []
			projects.forEach(projects => {
				projectsArray.push(projects)
			})
			setProjects(projectsArray)
			setLoaded(true)
		})
		return
	}, [])
	return (
		<ProjectsContext.Provider value={{ projects }}>
			{loaded ? props.children : null}
		</ProjectsContext.Provider>
	)
}

export default ProjectsContextProvider
