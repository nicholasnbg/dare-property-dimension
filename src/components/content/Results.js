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
      <p>We purchase residential property in regional Victoria and
      manufacture growth to achieve gross returns of 8/9 % .</p>
      <p>The examples below are properties that needed work, the numbers
      worked and with a cosmetic tidy up adding perceived value and
      increasing the rent by $30/50 a week ensuring low maintenance in
      demand investment returning a minimum gross return of 8% .</p>
      <ul>
        <li>3 x 1 residential property purchase price $146,000, rental after
        spending $3,200 to tidy up $240 per week.</li>
        <li>3 x 1 residential property purchase price $140,000, very bad
        condition spent $11,500 and achieved a rental return of $290 per
        week.</li>
        <li>3 x 1 residential property purchase price $156,000, spent $10,500
        and achieved a rental return of $295 per week.</li>
        <li>2 x 1 unit, purchase price $100,000, rental return after spending
$11,500 was $220 per week.</li>
        <li>current project, purchase price $100,000 on a residential block of
approx. 800 m, a 3 x 1 house with a renovation spend of $15,000, will
return a weekly rent of $290 minimum.</li>
      </ul>
      <p>The properties above were good deals without any renovations they
could have been settled and rented easily without any work-we
renovate to keep our options open to on sell when we choose.</p>
      <div className="close" onClick={() => {
        props.onCloseArticle()
      }} />

      <ResultPic before={unit_before} after={unit_after} />
      <ResultPic before={kitchen_before} after={kitchen_after} />
    </article>
  )
}

  export default Results

