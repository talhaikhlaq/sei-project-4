import React from 'react'
import Navbar from './Navbar'

class AboutUs extends React.Component {
  render() {
    return(
      <main>
        <Navbar />
        <div id="aboutus" className="section">
          <h2 id="aboutus" className="subtitle">Meet The Developer</h2>
        </div>

        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <h2 id="about-name">Talha Ikhlaq</h2>
                  <p id="about-info"> Age: 31, Occupation: OverReacting Developer</p>
                  <div id="about-picture"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
export default AboutUs
