import React from 'react'
import Content from '../Content'
import ResultPic from '../ResultPic'
import unit_before from '../../images/unit_bedroom_before.jpg'
import unit_after from '../../images/unit_bedroom_after.jpg'
import kitchen_before from '../../images/unit_kitchen_before.jpg'
import kitchen_after from '../../images/unit_kitchen_after.jpg'
import kitchen1_before from '../../images/kitchen1bef.jpg'
import kitchen1_after from '../../images/kitchen1aft.jpg'
import living1_before from '../../images/living1bef.jpg'
import living1_after from '../../images/living1aft.jpg'
import living2_before from '../../images/living2bef.jpg'
import living2_after from '../../images/living2aft.jpg'
import bath1_before from '../../images/bath1bef.jpg'
import bath1_after from '../../images/bath1aft.jpg'
import kitchen2_before from '../../images/kitchen2bef.jpg'
import kitchen2_after from '../../images/kitchen2aft.jpg'
import ext1_before from '../../images/ext1bef.jpg'
import ext1_after from '../../images/ext1aft.jpg'

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

      <ResultPic before={living2_before} after={living2_after} />
      <ResultPic before={unit_before} after={unit_after} />
      <ResultPic before={kitchen_before} after={kitchen_after} />
      <ResultPic before={kitchen1_before} after={kitchen1_after} />
      <ResultPic before={living1_before} after={living1_after} />
      <ResultPic before={bath1_before} after={bath1_after} />
      <ResultPic before={kitchen2_before} after={kitchen2_after} />
      <ResultPic before={ext1_before} after={ext1_after} />

    </article>
  )
}

  export default Results

