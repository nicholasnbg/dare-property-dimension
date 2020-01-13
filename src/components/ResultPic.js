import React from 'react'

const ResultPic = ({before, after}) => {
  return(
    <div className="result-pic-container">
      <img src={before} alt="" className="before"/>
      <img src={after} alt="" className="after"/>
    </div>
  )
}

export default ResultPic;