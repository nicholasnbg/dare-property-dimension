import React, { useEffect } from 'react'

import Buyers from './content/Buyers'
import Services from './content/Services'
import Results from './content/Results'
import Contact from './content/Contact'
import Story from './content/Story'
import ItsSimple from './content/ItsSimple'


import Testimonials from './content/Testimonials'

const Main = (props) =>  {

  const handleClick = (e) => {
    if(
      ((e.path && e.path[0].id === "wrapper") || 
      (e.target && e.target.id == "wrapper")) 
      && props.isArticleVisible){
      props.onCloseArticle()
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown', (event) => handleClick(event))
  }, [props.isArticleVisible])

    return (
      <div id="main"
           style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <Story
          active={props.article === 'story'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />

        <Results
          active={props.article === 'results'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
          title={"Results"}
        />

        <Services
          active={props.article === 'services'}
          articleTimeout={props.articleTimeout}
          title={"Services"}
          onCloseArticle={props.onCloseArticle}
        />

        <ItsSimple
          active={props.article === 'itsSimple'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />

        <Testimonials
          active={props.article === 'testimonials'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />

        <Contact
          active={props.article === 'contact'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />
        <Buyers
          active={props.article === 'buyers'}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />
      </div>
    )
}

export default Main
