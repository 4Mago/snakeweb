import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styled from "styled-components"
import sanityClient from "../../../Client"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
const MenuLink = styled(Link)`
  text-decoration: none;
  padding-top: 20px;
  width: 100%;
  color: black;
  list-style: none;
`

const UL = styled(motion.ul)`
list-style: none;
position: absolute;
top: 100px;
right: 25px;
width: 100px;
transition: 5s all ease;
text-decoration: none;
`
const List = styled(motion.li)`
  text-decoration: none;
  font-size: 18px;
  color: black;
  height: 50px;
`
const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Navigation = ({ isOpen, toggle }) => {
  const [header, setHeader] = useState("")
  const menuList = useRef(null)

  useEffect(() => {
    let timer
    window.clearTimeout(timer)
    let style = menuList.current.style
    if (style.display === "none") {
      style.display = "block"
    } else {
      timer = window.setTimeout(() => {
        style.display = "none"
      }, 300)
    }
  }, [isOpen])

  useEffect(() => {
    const headerQuery = `*[_type == "footer"]{
    menu
  }`
    sanityClient.fetch(headerQuery).then((header) => {
      header.forEach((header) => {
        setHeader(header)
      })
    })

    return
  }, [])

  return (
    <UL ref={menuList} variants={variants}>
      {header.menu
        ? header.menu.map((item, id) => (
            <List
              onClick={toggle}
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MenuLink to={item.link} key={id}>
                {item.name}
              </MenuLink>
            </List>
          ))
        : null}
    </UL>
  )
}

export default Navigation
