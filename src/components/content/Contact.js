import React from 'react'

const Contact = props => {

  return (
    <article id="contact"
             className={`${props.active && 'active'} ${props.articleTimeout && 'timeout'}`}
             style={{ display: 'none' }}>
      <h2 className="major">Contact</h2>
      <h3>Phone</h3>
      <p>You can contact Vanessa on 0439 726 411</p>
      <br></br>
      <h3>Contact form</h3>
      <form name="contact-form" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"/>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4"></textarea>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" className="special"/></li>
          <li><input type="reset" value="Reset"/></li>
        </ul>
      </form>

      <p>ABN 89 293 196178</p>
      {/* <ul className="icons">
        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
      </ul> */}
      <div className="close" onClick={() => {
        props.onCloseArticle()
      }}></div>
    </article>
  )
}


export default Contact

