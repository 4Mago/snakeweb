import { motion } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'


const ImageSlider = () => {
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
        <motion.div>
            {projectsArray.map((slider, index) => {
                return <img src={urlFor(header.image).url()} alt='this is an imageslider'
                />
            })}
        </motion.div>
    )
}

export default ImageSlider
