import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useRef, useState } from "react";
import underline  from "../../assets/underline.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_icon from "../../assets/menu_icon.png"
import close_icon from "../../assets/close_icon.png"

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef()
  const openMenu = () =>{
    menuRef.current.style.right="0"
  }

  const closeMenu = () =>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className="navbar">
      <img className="img_log" src={logo} alt="" />
      <img className="my_icon nav-mod-open" src={menu_icon} onClick={openMenu} alt="" />
      <ul ref={menuRef}  className="nav-menu">
      <img className="my_icon nav-mod-close" src={close_icon} alt="" onClick={closeMenu} />
        <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setMenu("home")}>Accueil</p></AnchorLink>{menu==="home"? <img className="underline" src={underline} alt="" /> :<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>A Propos de moi</p></AnchorLink>{menu==="about"? <img className="underline" src={underline} alt="" /> :<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <img className="underline" src={underline} alt="" /> :<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img className="underline" src={underline} alt="" /> :<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img className="underline" src={underline} alt="" /> :<></>}</li>
      </ul>
      <div className="nav-connect">
      <AnchorLink className="anchor-link" offset={50} href="#contact">Connecte avec moi</AnchorLink>
         

      </div>
    </div>
  );
};

export default Navbar;
