import React, { useState } from "react";
import { Link } from "gatsby";
import {FaAlignRight} from "react-icons/all";
import links from "../constants/links";
import socialIcons from "../constants/social-icons";
import logo from "../images/logo.png";


export default function Navbar() {
  const [isOpen, setNav] = useState(false);
  const toggleNav = ()=>{setNav(isOpen => !isOpen)};
  return (<nav >
    <div >
      <div >

        <img src={logo}  alt="backroads logo"/>
        <button type={"button"} onClick={toggleNav}>

          <FaAlignRight/>

        </button>

      </div>

      <ul >
        {links.map( (item, index)=>{
          return (<li key={index}>
            <Link to={item.path}>{item.text}</Link>
          </li>);
        })}
      </ul>
      <div>
        {socialIcons.map(
          (item, index)=>{
            return (
              <a key={index} href={item.url} target={"_blank"} rel={"noopener noreferrer"}>{item.icon}</a>
            )
        }
        )}
      </div>
    </div>
  </nav>);
}