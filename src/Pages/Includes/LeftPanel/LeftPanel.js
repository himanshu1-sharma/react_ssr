import React, {useState, useEffect} from "react";
import terms from '../../../img/icons/terms.png'
import lock from '../../../img/icons/lock.png'
import contact from '../../../img/icons/contact.png'
import './LeftPanel.css'
import { NavLink } from "react-router-dom";

const LeftPanel = () => {

    const [active, setActive] = useState();

    const stickyPanel = () => {
        let windowHeight = window.scrollY;
        windowHeight > 80 ? setActive("active") : setActive("");
    }

    useEffect(() => {
        window.addEventListener("scroll", stickyPanel);
    }, [])

  return (
    <>
      <div className={`leftPanel ${active}`}>
        <ul>
          <NavLink exact activeClassName="active" to="/terms">
            <li>
              <img src={terms} alt="terms" className="img-fluid" /> Terms
            </li>
          </NavLink>
          <NavLink exact activeClassName="active" to="/policy">
            <li>
              <img src={lock} alt="lock" className="img-fluid" /> Privacy Policy
            </li>
          </NavLink>
          <NavLink exact activeClassName="active" to="/contactus">
            <li>
              <img src={contact} alt="contact" className="img-fluid" /> Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default LeftPanel;
