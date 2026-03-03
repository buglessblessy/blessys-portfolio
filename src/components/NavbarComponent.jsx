import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const NavbarComponent = ({ scrollToSection }) => {
  const navLinks = ["home", "about", "skills", "projects", "contact"];

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-slate-950/40 backdrop-blur-2xl border-b border-white/5 py-4">
      <Container>
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
        >
          <Navbar.Brand href="#home" onClick={(e) => scrollToSection(e, "home")} className="text-2xl font-black tracking-tighter text-white cursor-pointer">
            BLESSY<span className="text-indigo-500">.A</span>
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle className="border-0 bg-white/10" />
        
        <Navbar.Collapse>
          <Nav className="ms-auto gap-8 font-bold uppercase text-[11px] tracking-[0.2em] items-center">
            {navLinks.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.2 }} 
                className="flex items-center"
              >
                <Nav.Link 
                  href={`#${item}`} 
                  onClick={(e) => scrollToSection(e, item)} 
                  className="text-white hover:text-indigo-400 transition-colors relative group p-0"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                </Nav.Link>
              </motion.div>
            ))}
            
            {/* GET CV BUTTON - Direct Download */}
            <motion.a
              href="/Blessys-React-Resume.pdf" // Must be in public folder
              download="Blessys-React-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 border-none rounded-full px-8 py-2 text-[10px] font-black tracking-widest text-white transition-all
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         shadow-[0_0_20px_rgba(79,70,229,0.3)] no-underline cursor-pointer"
            >
              <Download size={14} /> GET CV
            </motion.a>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;