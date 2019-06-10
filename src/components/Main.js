import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import About from './content/About'
import Work from './content/Work'
import Intro from './content/Intro'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

const Main = (props) =>  {

  const handleClick = (e) => {
    console.log(props.isArticleVisible)
    if(e.path[0].id === "wrapper" && props.isArticleVisible){
      console.log("this worked")
      props.onCloseArticle()
    }
  }


  useEffect(()=>{
    document.addEventListener('mousedown', (event) => handleClick(event))
  }, [props.isArticleVisible])
    let close = <div className="close" onClick={() => {
      props.onCloseArticle()
    }}></div>

    return (
      <div id="main"
           style={props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <Intro
          active={props.article === 'intro'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />

        <article id="work"
                 className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt=""/></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec
            lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc
            rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel
            lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about"
                 className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt=""/></span>
          <p>Country Victoria was our home until our early 20’s, all our extended family
          remain in the area -Melbourne is our home now with our children and
          grandchildren we have a well-worn track down the Hume Highway and
          through picturesque Yea and will continue to do so happily for years to come.
          We have always invested in residential property with just the last few years
          seeing the area we grew up in with a different perspective.
          Cash flow property is our investment vehicle and once we worked out a
          profitable system that works for us, we would not invest any other way.
          Many years ago we had invested in the same area with ordinary results and
          were therefore not seeing the opportunity right in front of us due to this past
          experience. With a few adjustments and a new perspective we found cash flow
            was the answer for us.</p>
          {close}
        </article>

        <article id="contact"
                 className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special"/></li>
              <li><input type="reset" value="Reset"/></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Main
