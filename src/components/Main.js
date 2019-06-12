import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import About from './content/About'
import Work from './content/Work'
import Intro from './content/Intro'
import Contact from './content/Contact'

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

    return (
      <div id="main"
           style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <Intro
          active={props.article === 'intro'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />

        <Work
          active={props.article === 'work'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />

        <About
          active={props.article === 'about'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />

        <Contact
          active={props.article === 'contact'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />
      </div>
    )
}

export default Main
