import React, { useState } from 'react';

   const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
   
     const toggleMenu = () => {
       setMenuOpen(!menuOpen);
     };
   
     return (
       <nav aria-label="portfolio navigation">
         <ul>
           <li>
             <a href="#" aria-label="Home">Home</a>
           </li>
           <li>
             <a href="#" aria-label="About">About</a>
           </li>
           <li>
             <button aria-label="Projects" aria-expanded={menuOpen} onClick={toggleMenu}>
               Projects
               <span aria-hidden="true">&#9660;</span>
             </button>
             {menuOpen && (
               <ul>
                 <li>
                   <a href="#" aria-label="Project 1">Project 1</a>
                 </li>
                 <li>
                   <a href="#" aria-label="Project 2">Project 2</a>
                 </li>
                 <li>
                   <a href="#" aria-label="Project 3">Project 3</a>
                 </li>
               </ul>
             )}
           </li>
           <li>
             <a href="#" aria-label="Contact">Contact</a>
           </li>
         </ul>
       </nav>
     );
   };
   
   export default Navbar;
   