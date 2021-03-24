import React from 'react'

const Testimonials = props => {
  return (
    <article
      id={props.articleId}
      className={`${props.active && 'active'} ${props.articleTimeout &&
        'timeout'}`}
      style={{ display: 'none' }}
    >
      <h2 className={'major'}>Testimonials</h2>
      <h3>Parkglade Properties</h3>
      <p>
        Dare sourced a residential property for us in an area we were unfamiliar
        with, it is exactly the income producing asset we were looking for.
        Price and return by far exceeded our expectations, we are very grateful,
        many thanks Vanessa.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <h3>Alex K</h3>
      <p>
        Dare gave our home the cosmetic makeover it needed to achieve top price
        when the market was slowing, I highly recommend their services we would
        have spent much more and not achieved the same results ourselves. Love
        your work.
      </p>
      <div
        className="close"
        onClick={() => {
          props.onCloseArticle()
        }}
      />
    </article>
  )
}

export default Testimonials
