import React from 'react'
import Content from '../Content'

const paragraphs = [
  `We purchase residential property in regional Victoria and
manufacture growth to achieve gross returns of 8/9 % .
The examples below are properties that needed work, the numbers
worked and with a cosmetic tidy up adding perceived value and
increasing the rent by $30/50 a week ensuring low maintenance in
demand investment returning a minimum gross return of 8% .`,
`*3 x 1 residential property purchase price $146,000, rental after
spending $3,200 to tidy up $240 per week.`,
`*3 x 1 residential property purchase price $140,000, very bad
condition spent $11,500 and achieved a rental return of $290 per
week`,
`*3 x 1 residential property purchase price $156,000, spent $10,500
and achieved a rental return of $295 per week.`,
`*2 x 1 unit, purchase price $100,000, rental return after spending
$11,500 was $220 per week.`,
`*current project, purchase price $100,000 on a residential block of
approx. 800 m, a 3 x 1 house with a renovation spend of $15,000, will
return a weekly rent of $290 minimum.`,
`The properties above were good deals without any renovations they
could have been settled and rented easily without any work-we
renovate to keep our options open to on sell when we choose.`
]

const Results = (props) =>
  <Content
    articleId={"results"}
    title={"Results"}
    paragraphs={paragraphs}
    active={props.active}
    articleTimeout={props.articleTimeout}
    onCloseArticle={props.onCloseArticle}
  />

  export default Results

