import React from 'react'
import Content from '../Content'

const paragraphs = [
  `Dare Property Solutions purchase lower price point property, tidy
  them up cosmetically and improve the quality of housing for people
  to live.`,
  `We know what to pay, what return to expect and where to buy, we
  sell our renovated houses or keep them for cash flow depending on
  the deal at the time. It’s all about the numbers every time.`,
 `Recently I heard a discussion with a representative from a capital city
 sourcing property on behalf of clients, the criteria – a better area and
 style of house to attract a better tenant (his words).`,
  `This strategy is often why investors purchase a single investment
  property in regional Victoria and then decide it isn’t what they
  thought it would be. We see this so often (we did it ourselves),
  regional investing is a very specific market – the above criteria in our
  experience is not the way to maximise cash flow returns.`,
  `We secure properties regularly and wholesale opportunities are just
  one of our services on offer.`
]

const ItsSimple = (props) =>
  <Content
    articleId={"itsSimple"}
    paragraphs={paragraphs}
    active={props.active}
    title={"It's Simple"}
    articleTimeout={props.articleTimeout}
    onCloseArticle={props.onCloseArticle}
  />

export default ItsSimple
