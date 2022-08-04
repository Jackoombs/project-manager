import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import NavList from "./NavList";

const MobileNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen((state) => !state);
  };

  return (
    <nav className="flex items-center lg:hidden">
      <button
        className="text-orange-500 text-4xl sm:text-5xl"
        onClick={handleClick}
      >
        {menuOpen ? <AiOutlineClose /> : <RiMenu4Line />}
      </button>
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.ul
            className="w-screen bg-slate-800 z-10 absolute flex flex-col gap-8 justify-start px-16 py-8 left-0 top-20"
            initial={{
              scale:0,
              opacity: 0,
              originX: 1,
              originY: 0,
            }}
            animate={{ 
              opacity: 1,
              scale:1,
              transition: {
                duration: 0.6,
                type: "spring"
              }
            }}
            exit={{
              scale: 0,
              originX: 1,
              originY: 0,
              opacity: 0,
              transition: {
                type: "linear",
                duration: 0.15
              },
            }}
          >
            <NavList />
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavigation;
