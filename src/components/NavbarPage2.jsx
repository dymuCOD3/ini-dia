import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

function NavbarPage2() {
    const [icon, setIcon] = useState('/scan')
    const [statusTampil, setStatusTampil] = useState('true')
    return (
        <>
            <motion.button
                onClick={() => setStatusTampil(!statusTampil)}
                whileTap={{ y: 1 }}
                animate={{
                    rotate: statusTampil ? 0 : -180,
                    backgroundColor: statusTampil ? (' #16DB65') : ('#eeeeee'),
                    transition: { duration: 0.3 }
                }}>
                <i class="uil uil-angle-up iconButton"></i>
            </motion.button>
            <nav>
                <AnimatePresence initial={false}>
                    {statusTampil ? (
                        <motion.div className='containerNav'
                            initial={{ opacity: 0, y: -500 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                            exit={{ opacity: 0, y: -500, transition: { duration: 0.3 } }}>
                            <ul>
                                <Link to='/' onClick={() => setIcon("/")} className={icon === "/" ? "iconActive" : ""}>
                                    <span onClick={() => setIcon("/")} className={icon === "/" ? "textActive" : ""}>
                                        <i class="uil uil-location-arrow iconNavbar"></i><div className='textNavbar'>Guide</div>
                                    </span>
                                </Link>
                                <Link to='/scan' onClick={() => setIcon("/scan")} className={icon === "/scan" ? "iconActive" : ""}>
                                    <span onClick={() => setIcon("/scan")} className={icon === "/scan" ? "textActive" : ""}>
                                        <i class="uil uil-capture iconNavbar"></i><div className='textNavbar'>Scan</div>
                                    </span>
                                </Link>
                                <Link to='/capture' onClick={() => setIcon("/capture")} className={icon === "/capture" ? "iconActive" : ""}>
                                    <span onClick={() => setIcon("/capture")} className={icon === "/capture" ? "textActive" : ""}>
                                        <i class="uil uil-camera iconNavbar"></i><div className='textNavbar'>Capture</div>
                                    </span>
                                </Link>
                            </ul>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </nav>
        </>
    )
}

export default NavbarPage2