import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/dare-logo.png'
import icon from '../images/dare-house.png'
import dareText from '../images/dare-text.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
          <img src={icon} alt="dare property logo"/>
        </div>
        <div className="content">
            <div className="inner">
              <img id="dare-text" src={dareText} alt=""/>
              <p>We SOURCE CASH POSITIVE property, we RENOVATE property, HOW CAN WE HELP YOU?</p><p>Call today and find out</p>
            </div>
        </div>
        <nav>
            <ul style={{"margin-right": "1px"}}>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('story')}}>Story</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('results')}}>Results</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('services')}}>Services</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('itsSimple')}}>It's Simple</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('testimonials')}}>Testimonials</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
        <div className="social">
            Social icons
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
