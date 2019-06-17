import React from 'react'
import Content from '../Content'

const paragraphs = [
  `What we offer you is what we do on a daily basis in our own business. All the
services we provide we are involved with ourselves so it makes sense to help
others at the same time. We have learnt by taking action and learning what
works and we keep repeating and streamlining this successful strategy.
`,
  `1. Source wholesale cash flow residential property opportunities-usually
properties with no buyer appeal which can be easily turned around to
produce cash flow from day one.
2. Cosmetic Renovation - a cost effective option to increase return for your
rental or property before listing for sale.
3. Property Staging - for sales and rentals to maximise returns.
4. Sourcing properties to rent - exhausted from the grind of attending
opens, we can help with your search.
5. Long distance purchases - need some clarity and unbiased facts without
visiting a property, we can highlight important aspects (take photos) and
check out those things not in the listing photos (please note this is not a
building inspection)`
]

const Services = (props) =>
  <Content
    articleId={"services"}
    paragraphs={paragraphs}
    active={props.active}
    articleTimeout={props.articleTimeout}
    onCloseArticle={props.onCloseArticle}
  />

export default Services
