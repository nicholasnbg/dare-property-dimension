import React from 'react'
import Content from '../Content'
import ResultPic from '../ResultPic'
import unit_before from '../../images/unit_bedroom_before.jpg'
import unit_after from '../../images/unit_bedroom_after.jpg'
import kitchen_before from '../../images/unit_kitchen_before.jpg'
import kitchen_after from '../../images/unit_kitchen_after.jpg'


const Results = (props) => {
  return (
    <article
      id={props.articleId}
      className={`${props.active &&'active'} ${props.articleTimeout && 'timeout'}`}
      style={{display: 'none'}}
    >
      <h2 className={"major"}>{props.title}</h2>
      <div className="close" onClick={() => {
        props.onCloseArticle()
      }} />

      <ResultPic before={unit_before} after={unit_after} />
      <ResultPic before={kitchen_before} after={kitchen_after} />
    </article>
  )
}

  export default Results

