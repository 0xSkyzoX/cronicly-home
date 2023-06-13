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
                         <li><a href='/payments'>Payments</a></li>
                         <li><a href='/collections'>Collections</a></li>
                         <li><a href='/conversions'>Conversions</a></li>
                         <li><a href='/global-account'>Global Account</a></li>
                         <li><a href='/cards'>Cards</a></li>
                         <li><a href='/credit'>Credit</a></li>
                    </ul>
               </div>
               <div className="footer-top-item">
                    <h2>Our Company</h2>
                    <ul>
                         <li><a href='about-us'>About Us</a></li>
                         <li><a href='news'>News & Media</a></li>
                         <li><a href='licenses'>Licenses</a></li>
                    </ul>
               </div>
               <div className="footer-top-item">
                    <h2>Resources</h2>
                    <ul>
                         <li><a href='blog'>Blog</a></li>
                         <li><a href='help'>Help Center</a></li>
                         <li><a href='partnerships'>Partnerships</a></li>
                         <li><a href='developers'>Developers</a></li>
                         <li><a href='safely'>Safely & securely</a></li>
                    </ul>
               </div>
               <div className="footer-top-item">
                    <h2>Members</h2>
                    <ul>
                         <li><a href='login'>Log In</a></li>
                         <li><a href='register'>Sign Up</a></li>
                    </ul>
               </div>
               <div className="footer-top-item">
                    <h2 className='last-footer-title'>Subscribe to our news</h2>
                    <input type="text" placeholder='Email Address' className='footer-input-email' required disabled/>
                    <p>We care about protecting your data.</p>
                    <h4>Follow us</h4>
                    <div>
                         <img alt='' src='./images/fb.svg'/>
                         <img alt='' src='./images/tw.svg'/>
                         <img alt='' src='./images/in.svg'/>
                         <img alt='' src='./images/lin.svg'/>
                    </div>
               </div>
               </div>
               
          </div>
          <div className='footer-bottom'>
               <div className='footer-bottom-one'>
                    <img alt="" src='./images/logo-h.png' className='footer-logo'/>
                    <p>Cronicly Technologies (UK) Ltd is authorised and regulated by the Financial Conduct Authority under the Electronic Money Regulations 2011 the purposes of issuing electronic money and provide payment services. Firm Reference Number 963951.</p>
               </div>
               <div className='footer-bottom-two'>
                    <p>©2023 Cronicly - Singapore / Hong Kong / Indonesia / Macao / United Kingdom</p>
                    <ul>
                         <li><a href='/'>Terms of Service (UK)</a></li>
                         <li><a href='/'>Safeguarding</a></li>
                         <li><a href='/'>Privacy Notice</a></li>
                         <li><a href='/'>Cookie Policy</a></li>
                    </ul>
               </div>
          </div>
     </div>
    </footer>
     
    
  )
}

export default Footer