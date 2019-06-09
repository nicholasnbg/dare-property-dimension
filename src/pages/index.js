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
  const [wrapperRef, setWrapperRef] = useState(false)

  useEffect(() => {
    setTimeoutId(setTimeout(() => {
      setLoading('');
    }, 100))
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      if(timeoutId){
        clearTimeout(timeoutId)
      }
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleOpenArticle = (article) => {
    setIsArticleVisible(!isArticleVisible)
    setArticle(article)

    setTimeout(() => {
      setFuncTimeout(!timeout)
    }, 325)

    setTimeout(() => {
      setArticleTimeout(!articleTimeout)
    }, 350)
  }

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout)
    setTimeout(() => {
      setFuncTimeout(!timeout)
    }, 325)

    setTimeout(()=>{
      setIsArticleVisible(!isArticleVisible)
      setArticle('')
    }, 350)
  }

  const handleClickOutside = (event) => {
    if(wrapperRef && !wrapperRef.contains(event.target)) {
      if(isArticleVisible) {
        handleCloseArticle();
      }
    }
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
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={timeout} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default IndexP
