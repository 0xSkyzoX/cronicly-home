import React from 'react'
import "./css/footer.css"
function Footer() {
  return (
     
          <footer className='footer-container'>
     <div className='footer-inside'>
          <div className='footer-top'>
               <div className='footer-top-items-container'>
               <div className="footer-top-item">
                    <h2>Solutions</h2>
                    <ul>
                         <li><a>Payments</a></li>
                         <li><a>Collections</a></li>
                         <li><a>Conversions</a></li>
                         <li><a>Global Account</a></li>
                         <li><a>Cards</a></li>
                         <li><a>Credit</a></li>
                    </ul>
               </div>
               <div className="footer-top-item">
                    <h2>Our Company</h2>
                    <ul>
                         <li><a>About Us</a></li>
                         <li><a>News & Media</a></li>
                         <li><a>Licenses</a></li>
                    </ul>
               </div>
               <div className="footer-top-item">
                    <h2>Resources</h2>
                    <ul>
                         <li><a>Blog</a></li>
                         <li><a>Help Center</a></li>
                         <li><a>Partnerships</a></li>
                         <li><a>Developers</a></li>
                         <li><a>Safely & securely</a></li>
                    </ul>
               </div>
               <div className="footer-top-item">
                    <h2>Members</h2>
                    <ul>
                         <li>Log In</li>
                         <li>Sign Up</li>
                    </ul>
               </div>
               <div className="footer-top-item">
                    <h2 className='last-footer-title'>Subscribe to our news</h2>
                    <input type="text" placeholder='Email Address' className='footer-input-email' required disabled/>
                    <p>We care about protecting your data.</p>
                    <h4>Follow us</h4>
                    <div>
                         <img src='./images/fb.svg'/>
                         <img src='./images/tw.svg'/>
                         <img src='./images/in.svg'/>
                         <img src='./images/lin.svg'/>
                    </div>
               </div>
               </div>
               
          </div>
          <div className='footer-bottom'>
               <div className='footer-bottom-one'>
                    <img src='./images/logo-h.png' className='footer-logo'/>
                    <p>Cronicly Technologies (UK) Ltd is authorised and regulated by the Financial Conduct Authority under the Electronic Money Regulations 2011 the purposes of issuing electronic money and provide payment services. Firm Reference Number 963951.</p>
               </div>
               <div className='footer-bottom-two'>
                    <p>©2023 Cronicly - Singapore / Hong Kong / Indonesia / Macao / United Kingdom</p>
                    <ul>
                         <li><a>Terms of Service (UK)</a></li>
                         <li><a>Safeguarding</a></li>
                         <li><a>Privacy Notice</a></li>
                         <li><a>Cookie Policy</a></li>
                    </ul>
               </div>
          </div>
     </div>
    </footer>
     
    
  )
}

export default Footer