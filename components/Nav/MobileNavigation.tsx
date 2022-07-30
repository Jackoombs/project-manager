import { useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import { motion } from "framer-motion"
import NavList from "./NavList"
import { type } from "os"

const MobileNavigation = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const handleClick = () => {
    setMenuOpen(state => !state)
  }

  const variants = {
    open: { 
      opacity: 1, x: 0, 
      transition: {
        opacity: { duration: 0.7 },
        type: "spring",
        mass: 0.5
      }
    },
    closed: { 
      opacity: 0, x: "-100%",
      transition: {
        x: { duration: 0, delay: 0.7},
        type: "spring",
        mass: 0.5
      }
    }
  }

  return (
    <nav  className="flex items-center lg:hidden">
      <button className="text-orange-500 text-5xl" onClick={handleClick}>
        {menuOpen ? <AiOutlineClose /> : <RiMenu4Line /> }
      </button>
      <motion.ul 
        className="w-screen absolute flex flex-col gap-8 justify-start px-16 left-0 top-28"
        animate={menuOpen ? "open" : "closed"}
        variants={variants}
      >
        <NavList />
      </motion.ul>
    </nav>
  )
}

export default MobileNavigation