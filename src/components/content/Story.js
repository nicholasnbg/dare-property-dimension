import React from 'react'
import Content from '../Content'

const paragraphs = [
  `I am Vanessa Thomas the founder of Dare Property Solutions.`,
  `For over 25 years country Victoria was my home with my extended
  family remaining in the area today.`,
  `Melbourne is where I live now with my husband, children and
  grandchildren all involved in the business in some way.
  Property has always been my passion and having invested in suburbs
  for many years not achieving the returns I was looking for, I came
  back to the area I had grown up in – now seeing the opportunities
  with a different vision.`,
  `Around 10 years ago I had invested in a property in the same area I
  do now, with less than ordinary results, which was due to purchasing
  the wrong type of property (listening to well-meaning advice).
  Due to this past experience I was not open to seeing what was right
  in front of me – with a few adjustments and a new perspective it all
  changed.`,
  `Cash flow property is my investment vehicle now and once a
  profitable system was worked out through multiple purchases and
  lots of hard work, I would not invest in any other way.
  I could write a book with all the mistakes I have made but I wouldn’t
  do it any differently.`,
  `I am as passionate about the quality of living for everyone as I am
  about making a profit. A well maintained, secure property producing
  a weekly income is the outcome I must achieve with each purchase.
  I love what I do and strive to leave a legacy for my family.`,
]

const Story = props => (
  <Content
    articleId={'story'}
    paragraphs={paragraphs}
    title={"Story"}
    active={props.active}
    articleTimeout={props.articleTimeout}
    onCloseArticle={props.onCloseArticle}
  />
)

export default Story
