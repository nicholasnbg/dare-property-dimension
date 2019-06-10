import React from 'react'
import Content from '../Content'

const paragraphs = [
  `Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec
            lorem luctus ultrices.`,
  `Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc
            rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel
            lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.`
]

const Work = (props) =>
  <Content
    articleId={"work"}
    paragraphs={paragraphs}
    active={props.active}
    articleTimeout={props.articleTimeout}
    onCloseArticle={props.onCloseArticle}
  />

export default Work
