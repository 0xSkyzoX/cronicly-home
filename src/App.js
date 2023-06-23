import React from 'react'
import Navbar from './components/navbar'
import "./App.css"
import { useEffect } from 'react'
import ScrollToButton from "./components/ScrollToButton";
import Footer from './components/footer';
function App() {
  useEffect(() => {
    var btnContainer = document.getElementById("tab-menu");
var btns = btnContainer.getElementsByClassName("home-tab-menu-item");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    } 
    this.className += " active";
  });}
  })
  return (
    <div className='App'>
      <Navbar />
      <main className='app-main-container'>
        <div className='main-inside'>
          <div className='main-inside-text text-container'>
            <h1 className='text-b main-index'>Go Global.</h1>
            <h1 className='text-b main-second'>Transcend Business Banking.</h1>
            <p className='text-p'>Award-winning fintech solutions, customisable to your business needs. Grow your business with a global account that lets you pay, collect and convert better than the banks.</p>
            <button className='button-style-green'>Talk to our specialists</button>
          </div>
        </div>
      </main>
      <div className='flags-list licensed-country'>
        <h2>Licensed And Regulated In</h2>
        
          <div className='flag-list container-flags'>
            <div>
              <img alt=''  src='./images/flags/sg.png' className='flags-list-lisenced' />
              <p>Singapore</p>
            </div>
            <div>
              <img alt=''  src='./images/flags/uk.png' className='flags-list-lisenced' />
              <p>UK</p>
            </div>
            <div>
              <img alt=''  src='./images/flags/hg.png' className='flags-list-lisenced' />
              <p>Hong Kong</p>
            </div>
            <div>
              <img  alt='' src='./images/flags/mc.png' style={{ height: "40px", objectFit: "cover" }} className='flags-list-lisenced' />
              <p>Macao</p>
            </div>
            <div>
              <img alt=''  src='./images/flags/ind.png' className='flags-list-lisenced' />
              <p>Indonesia</p>
            </div>
        </div>
        <a className='a-style-1 text-center mobile-friendly' href='/licenses'>Find out more about our licenses here</a>
        <div style={{display: 'flex', justifyContent: "center"}}>
        <h1 className='text-b financial-text' ><span>Financial Services</span> To Fuel Your Growth</h1>
        </div>
       
        <div >
          <div style={{ height: "fit-content" }} >
            
            <div className="home-tab-menu" id='tab-menu'>
            <ScrollToButton toId="payments" duration="1000" children="Payments" className="home-tab-menu-item w-inline-block active" />
            <ScrollToButton toId="collections" duration="1000" children="Collections" className="home-tab-menu-item w-inline-block"/>
            <ScrollToButton toId="conversions" duration="1000" children="Conversions" className="home-tab-menu-item w-inline-block"/>
            <ScrollToButton toId="account" duration="1000" children="Global Account" className="home-tab-menu-item w-inline-block"/>
            <ScrollToButton toId="cards" duration="1000" children="Cronicly Cards" className="home-tab-menu-item w-inline-block"/>
            <ScrollToButton toId="credits" duration="1000" children="Credit Line" className="home-tab-menu-item w-inline-block"/>
            </div>
            <div className='sections-container'>
                <div id="tab-inside-container">
                <div id='payments' className='tab-menu-section'>
                <img  alt="" src='./images/home-tab-payment.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Payments</h1>
                  <p className='text-p text-tab-menu'>
                  Make faster and cheaper payments to over 100+ countries around the world.
                  </p>
                  <a href="/payments" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='collections' className='tab-menu-section' style={{flexDirection: "row-reverse"}}>
                <img alt=""  src='./images/home-tab-collection.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Collections</h1>
                  <p className='text-p text-tab-menu'>
                  Receive payments in local currency from international customers and partners. Save significantly on exchange rates.
                  </p>
                  <a href="/collections" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='conversions' className='tab-menu-section'>
                <img alt=""  src='./images/home-tab-conversion.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Conversions</h1>
                  <p className='text-p text-tab-menu'>
                  Convert to multiple foreign currencies and save more with our highly competitive exchange rates.
                  </p>
                  <a href="/conversions" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='account' className='tab-menu-section' style={{flexDirection: "row-reverse"}}>
                <img alt=""  src='./images/Frame.png' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Global Account</h1>
                  <p className='text-p text-tab-menu'>
                  Unlock previously untapped markets. Collect and pay like a local, hold up to 34 currencies and convert anytime you want. Start locking in the good rates and save more money.
                  </p>
                  <a href="/global-account" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='cards' className='tab-menu-section'>
                <img alt=""  src='./images/Frame2.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Cronicly Cards</h1>
                  <p className='text-p text-tab-menu'>
                  Control company expenses. Spend in multiple currencies anywhere around the world.
                  </p>
                  <a href="/card" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='credits' className='tab-menu-section' style={{flexDirection: "row-reverse"}}>
                <img alt=""  src='./images/home-tab-credit.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Credit Line</h1>
                  <p className='text-p text-tab-menu'>
                  Resolve cash-flow problems with our fuss-free credit solutions
                  </p>
                  <a href="/credit" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
                </div>
              
              </div>
              <div className='sections-container-mobile' >
                <div id="tab-inside-container" >
                <div id='payments' className='tab-menu-section' style={{flexDirection: "column"}}>
                <img alt=""  src='./images/home-tab-payment.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Payments</h1>
                  <p className='text-p text-tab-menu'>
                  Make faster and cheaper payments to over 100+ countries around the world.
                  </p>
                  <a href="/payments" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='collections' className='tab-menu-section' style={{flexDirection: "column"}}>
                <img  alt="" src='./images/home-tab-collection.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Collections</h1>
                  <p className='text-p text-tab-menu'>
                  Receive payments in local currency from international customers and partners. Save significantly on exchange rates.
                  </p>
                  <a href="/collections" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='conversions' className='tab-menu-section' style={{flexDirection: "column"}}>
                <img alt=""  src='./images/home-tab-conversion.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Conversions</h1>
                  <p className='text-p text-tab-menu'>
                  Convert to multiple foreign currencies and save more with our highly competitive exchange rates.
                  </p>
                  <a href="/conversions" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='account' className='tab-menu-section' style={{flexDirection: "column"}}>
                <img alt=""  src='./images/Frame.png' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Global Account</h1>
                  <p className='text-p text-tab-menu'>
                  Unlock previously untapped markets. Collect and pay like a local, hold up to 34 currencies and convert anytime you want. Start locking in the good rates and save more money.
                  </p>
                  <a href="/global-account" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='cards' className='tab-menu-section' style={{flexDirection: "column"}}>
                <img  alt="" src='./images/Frame2.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Cronicly Cards</h1>
                  <p className='text-p text-tab-menu'>
                  Control company expenses. Spend in multiple currencies anywhere around the world.
                  </p>
                  <a href="/card" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
              <div id='credits' className='tab-menu-section' style={{flexDirection: "column",}}>
                <img alt=""  src='./images/home-tab-credit.svg' width="550"/>
                <div className='text-tab-menu-spot'>
                  <h1 className='text-b text-tab-manu-title'>Credit Line</h1>
                  <p className='text-p text-tab-menu'>
                  Resolve cash-flow problems with our fuss-free credit solutions
                  </p>
                  <a href="/credit" className="home-tab-pane-btn w-button">Learn more</a>
                </div>
              </div>
                </div>
              
              </div>
              
          </div>
          
        </div>

      </div>
      <div className='security-home-container'>
        <div className='security-home-inside'>
          <div>
            <img alt=""  src='./images/home-security-uk.svg'></img>
          </div>
          <div className='security-home-text-container'>
          <div className='security-home-text-spot'>
            <h1 className='text-b security-text-title'>We’re Serious About <span>Security</span></h1>
            <ul className='security-home-items'>
              <li><img alt=""  src='./images/tick-icon.svg' /><span>Receive real-time alerts with our dedicated fraud team</span></li>
              <li><img alt=""  src='./images/tick-icon.svg' /><span>24/7 account & system monitoring</span></li>
              <li><img  alt="" src='./images/tick-icon.svg' /><span>Protect your account and transactions with 2-factor authentication</span></li>
              <li><img alt=""  src='./images/tick-icon.svg' /><span>TranSwap is fully regulated and licensed to handle money by central banks and regulators around the world</span></li>
            </ul>
          </div>
          </div>
         
        </div>
      </div>
      <div className='instructions-home-container'>
        <div className='instructions-home-inside'>
          <h1 className='text-b inst-hc'>Sign Up For A TranSwap Account In <span>3 Simple Steps</span></h1>
          <div style={{display: "flex", justifyContent: "center"}}>
          <div className='instructions-img-container'>
            <div>
<img alt=""  src='./images/home-step-1.svg'/>
<img alt=""  src='./images/1.png'/>
            </div>
            <div>
              <img alt=""  src='./images/home-step-2.svg'/>
              <img alt=""  src='./images/2.png'/>
            </div>
            <div>
              <img alt=""  src='./images/home-step-3.svg'/>
              <img alt=""  src='./images/3.png'/>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='support-text-top-footer'>
        <h1>Receive full support from our local success teams at every step of process.</h1>
        <button className='button-style-green footer-top-support'>Talk to our specialists</button>
      </div>
      <Footer />
    </div>
  )
}

export default App