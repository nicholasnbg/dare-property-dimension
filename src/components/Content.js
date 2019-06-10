import React from 'react'

const Content = (props) => {

  return (
    <article
      id={props.articleId}
      className={`${props.active &&'active'} ${props.articleTimeout && 'timeout'}`}
      style={{display: 'none'}}
    >
      <h2 className={"major"}>{props.title}</h2>
      {props.paragraphs.map((paragraph, i) => (
        <p key={i}>
          {paragraph}
        </p>
      ))}

      <div className="close" onClick={() => {
        props.onCloseArticle()
      }} />
    </article>
  )
}

export default Content
