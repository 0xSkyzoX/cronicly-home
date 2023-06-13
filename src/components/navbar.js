import React, { useEffect, useState } from 'react'
import "./css/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faArrowRight, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
function Navbar() {
     const [isScrolled, setIsScrolled] = useState(false)
     const [isFlagSelectionVisible, setIsFlagSelectionVisible] = useState(false)
     const [isSidebarVisible, setIsSidebarVisible] = useState(false)
     const [solutions, setSolutions] = useState(false)
     const [company, setCompany] = useState(false)
     const [resources, setResources] = useState(false)
     useEffect(() => {
          window.onscroll = () => { scrollT() }
          function scrollT() {
               if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    setIsScrolled(true)
               } else {
                    setIsScrolled(false)
               }
          }
     }, [])


     return (
          <>
               <header className='navbar-container' id={isScrolled ? "visible" : "invisible"}>

                    <div className='navbar-inside' >
                         <div>
                              <img alt="" src='./images/logo-h.png' className='cronicly-logo' />
                         </div>

                         <div className='nav-items-container'>
                              <ul className='nav-items-inside'>
                                   <div className='solutions'>
                                        <li>Solutions <FontAwesomeIcon icon={faChevronDown} className="navbar-item-subico" /></li>
                                        <div className='subnav-container'>
                                             <div className='subnav-inside'>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "32px", marginRight: "1rem" }} src='./images/solutions/payments.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Payments</h2>
                                                            <p>Send Money abroad</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "32px", marginRight: "1rem" }} src='./images/solutions/collections.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Collections</h2>
                                                            <p>Collect funds securely</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "32px", marginRight: "1rem" }} src='./images/solutions/convert.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Conversions</h2>
                                                            <p>Secure exchange rates</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "32px", marginRight: "1rem" }} src='./images/solutions/multi-card.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Global Account</h2>
                                                            <p>Multi-currency accounts</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "32px", marginRight: "1rem" }} src='./images/solutions/cards.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Card</h2>
                                                            <p>Issue cards & manage spending</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/solutions/credits.png'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Credit</h2>
                                                            <p>Secure working capital</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='company'>
                                        <li>Our Company <FontAwesomeIcon icon={faChevronDown} className="navbar-item-subico" /></li>
                                        <div className='subnav-container'>
                                             <div className='subnav-inside'>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/company/about.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>About Us</h2>
                                                            <p>All about Cronicly</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/company/bag.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Careers</h2>
                                                            <p>Work at Cronicly</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/company/info.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>News & Media</h2>
                                                            <p>Our latest publications</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/company/safe.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Licenses</h2>
                                                            <p>More about out licenses</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='resources'>
                                        <li>Resources <FontAwesomeIcon icon={faChevronDown} className="navbar-item-subico" /></li>
                                        <div className='subnav-container'>
                                             <div className='subnav-inside'>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/resources/blog.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Blog</h2>
                                                            <p>Latest news and insights</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/resources/help.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Help Center</h2>
                                                            <p>Contact us for support</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/resources/license.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Partnerships</h2>
                                                            <p>Collaboration and opportunities</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/resources/dev.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Developers</h2>
                                                            <p>API & other resources</p>
                                                       </div>
                                                  </div>
                                                  <div className='subnav-item'>
                                                       <img alt="" className='subnav-icon' style={{ width: "35px", height: "36px", marginRight: "1rem", aspectRatio: "auto" }} src='./images/resources/safe.svg'></img >
                                                       <div className='subnav-text'>
                                                            <h2>Safely & Securely</h2>
                                                            <p>How to indentify Cronicly</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                              </ul>
                         </div>
                    </div>
                    <div className='navbar-auth-items'>
                         <a href='/login' className='login-btn'>Log in</a>
                         <div className='signup-section'><a href='/signup' style={{ textDecoration: "none" }}>Sign up <FontAwesomeIcon icon={faArrowRight} className="signup-arrow" /></a></div>
                         <div >
                              <div className='flags-section' onClick={() => { setIsFlagSelectionVisible(!isFlagSelectionVisible) }}>
                                   <img alt="" src='./images/flags/uk.png' style={{
                                        width: "20px", height: "20px", marginLeft: "-7px", marginRight: "7px",
                                        padding: " 2px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", borderRadius: "50%", marginTop: "auto", marginBottom: "auto"
                                   }} className='svg-flag-icon' />

                                   <p>United Kingdom</p><FontAwesomeIcon icon={faChevronDown} className="navbar-item-subico flag"
                                        style={{ position: "relative", top: "0px" }}
                                   />
                              </div>
                              <div style={{ display: "flex", justifyContent: "center" }}>
                                   <div className='flags-menu' style={isFlagSelectionVisible ? { position: "absolute", animation: "flag-selection 0.1s ease-in-out" } : { animation: "flag-selection 0.1s ease-in-out", display: "none", }}>
                                        <div className='flag-menu-item'>
                                             <img alt="" src='./images/flags/uk.png' style={{
                                                  width: "20px", height: "20px", marginLeft: "-7px", marginRight: "7px",
                                                  padding: " 2px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", borderRadius: "50%", marginTop: "auto", marginBottom: "auto"
                                             }} className='svg-flag-icon' />
                                             <p>United Kingdom</p>
                                        </div>
                                        <div className='flag-menu-item'>
                                             <img alt="" src='./images/flags/hg.png' style={{
                                                  width: "20px", height: "20px", marginLeft: "-7px", marginRight: "7px",
                                                  padding: " 2px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", borderRadius: "50%", marginTop: "auto", marginBottom: "auto"
                                             }} className='svg-flag-icon' />
                                             <p>Hong Kong</p>
                                        </div>
                                        <div className='flag-menu-item'>
                                             <img alt="" src='./images/flags/ind.png' style={{
                                                  width: "20px", height: "20px", marginLeft: "-7px", marginRight: "7px",
                                                  padding: " 2px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", borderRadius: "50%", marginTop: "auto", marginBottom: "auto"
                                             }} className='svg-flag-icon' />
                                             <p>Indonesia</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <FontAwesomeIcon icon={faBars} className="bars-btn-mobile" onClick={() => {
                              setIsSidebarVisible(!isSidebarVisible)
                         }} />
                    </div>


               </header>
               <div id='sidebar-container' className={isSidebarVisible ? "active" : "inactive"}>
                    <div className='sidebar-top'>
                         <FontAwesomeIcon icon={faXmark} className="sidebar-xmark" onClick={() => { setIsSidebarVisible(!isSidebarVisible) }} />
                         <img alt="" src='./images/logo-h.png' className='cronicly-logo' />
                    </div>
                    <div className='sidebar-inside'>
                         <div className='auth-buttons-spot'>
                              <button className='sidebar-login-btn'>Log in</button>
                              <button className='sidebar-signup-btn'>Sign up</button>
                         </div>
                         <div className='dropdown-link-items'>
                              <div className='dropdown-item'>
                                   
                                   <ul className={solutions ? "active" : "inactive"}>
                                        <li>Payments</li>
                                        <li>Collections</li>
                                        <li>Conversions</li>
                                        <li>Global Account</li>
                                        <li>Cards</li>
                                        <li>Credit</li>
                                   </ul>
                                   <div className="show-items-btn"  onClick={() => setSolutions(!solutions)}>
                                        <h2>Solutions</h2>
                                        <FontAwesomeIcon icon={faChevronDown} className="down-chevron"/>
                                   </div>
                              </div>
                              <div className='dropdown-item'>
                                   
                                   <ul className={company ? "active" : "inactive"}>
                                        <li>About Us</li>
                                        <li>Careers</li>
                                        <li>News & Media</li>
                                        <li>Licenses</li>
                                   </ul>
                                   <div className="show-items-btn"  onClick={() => setCompany(!company)}>
                                        <h2>Our Company</h2>
                                        <FontAwesomeIcon icon={faChevronDown} className="down-chevron"/>
                                   </div>

                              </div>
                              <div className='dropdown-item'>
                                   
                                   <ul className={resources ? "active" : "inactive"}>
                                        <li>Blog</li>
                                        <li>Help Center</li>
                                        <li>Partnerships</li>
                                        <li>Developers</li>
                                        <li>Safely & Securely</li>
                                   </ul>
                                   <div className="show-items-btn" onClick={() => setResources(!resources)}>
                                        <h2>Resources</h2>
                                        <FontAwesomeIcon icon={faChevronDown} className="down-chevron"/>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>

     )
}

export default Navbar