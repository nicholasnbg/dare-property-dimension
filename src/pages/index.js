import React, {Component, useState, useEffect} from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const IndexP = (props) => {
  const [loading, setLoading] = useState('')
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [timeout, setFuncTimeout] = useState(false)
  const [timeoutId, setTimeoutId] = useState(false)
  const [articleTimeout, setArticleTimeout] = useState(false)
  const [article, setArticle] = useState('')

  useEffect(() => {
    setTimeoutId(setTimeout(() => {
      setLoading('');
    }, 100))
    return () => {
      if(timeoutId){
        clearTimeout(timeoutId)
      }
    }
  }, [])

  const handleOpenArticle = (article) => {
    console.log({isArticleVisible})
    setIsArticleVisible(true)
    setArticle(article)

    setTimeout(() => {
      setFuncTimeout(true)
    }, 325)

    setTimeout(() => {
      setArticleTimeout(true)
    }, 350)
  }

  const handleCloseArticle = () => {
    setArticleTimeout(false)
    setTimeout(() => {
      setFuncTimeout(false)
    }, 325)

    setTimeout(()=>{
      setIsArticleVisible(!isArticleVisible)
      setArticle('')
    }, 350)
  }

  return (
    <Layout location={props.location}>
      <div className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
          />
          <Footer timeout={timeout} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default IndexP
