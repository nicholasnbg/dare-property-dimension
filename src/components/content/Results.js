import React from 'react'
import Content from '../Content'
import ResultPic from '../ResultPic'
import unit_before from '../../images/results/unit_bedroom_before.jpg'
import unit_after from '../../images/results/unit_bedroom_after.jpg'
import kitchen_before from '../../images/results/unit_kitchen_before.jpg'
import kitchen_after from '../../images/results/unit_kitchen_after.jpg'
import kitchen1_before from '../../images/results/kitchen1bef.jpg'
import kitchen1_after from '../../images/results/kitchen1aft.jpg'
import living1_before from '../../images/results/living1bef.jpg'
import living1_after from '../../images/results/living1aft.jpg'
import living2_before from '../../images/results/living2bef.jpg'
import living2_after from '../../images/results/living2aft.jpg'
import bath1_before from '../../images/results/bath1bef.jpg'
import bath1_after from '../../images/results/bath1aft.jpg'
import kitchen2_before from '../../images/results/kitchen2bef.jpg'
import kitchen2_after from '../../images/results/kitchen2aft.jpg'
import ext1_before from '../../images/results/ext1bef.jpg'
import ext1_after from '../../images/results/ext1aft.jpg'

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

