import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const ProjectContext = createContext()

const ProjectContextProvider = props => {
	const [project, setProject] = useState('')
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		const projectQuery = `*[_type == "client"] | order(date desc)`
		sanityClient.fetch(projectQuery).then(project => {
			const projectArray = []
			project.forEach(project => {
				projectArray.push(project)
			})
			setProject(projectArray)
			setLoaded(true)
		})
		return
	}, [])
	return (
		<ProjectContext.Provider value={{ project }}>
			{loaded ? props.children : null}
		</ProjectContext.Provider>
	)
}

export default ProjectContextProvider
