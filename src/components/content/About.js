import React from 'react'
import Content from '../Content'

const paragraphs = [
  `Country Victoria was our home until our early 20’s, all our extended family
          remain in the area -Melbourne is our home now with our children and
          grandchildren we have a well-worn track down the Hume Highway and
          through picturesque Yea and will continue to do so happily for years to come.`,
          `We have always invested in residential property with just the last few years
          seeing the area we grew up in with a different perspective.`,
          `Cash flow property is our investment vehicle and once we worked out a
          profitable system that works for us, we would not invest any other way.
          Many years ago we had invested in the same area with ordinary results and
          were therefore not seeing the opportunity right in front of us due to this past
          experience. With a few adjustments and a new perspective we found cash flow
            was the answer for us.`
]

const About = (props) =>
  <Content
    articleId={"about"}
    paragraphs={paragraphs}
    active={props.active}
    articleTimeout={props.articleTimeout}
    onCloseArticle={props.onCloseArticle}
  />

export default About
