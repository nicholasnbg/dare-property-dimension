import React from 'react'

const Contact = props => {

  return (
    <article id="buyers"
             className={`${props.active && 'active'} ${props.articleTimeout && 'timeout'}`}
             style={{ display: 'none' }}>
      <h2 className="major">Buyer Criteria Form</h2>
      <form name="buyer-criteria" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="buyer-criteria" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div className="field half">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" id="phone"/>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"/>
        </div>
        <div className="field">
          <label htmlFor="area-target">Is there an area you are targetting?</label>
          <textarea name="area-target" id="area-target" rows="3"></textarea>
        </div>
        <div className="field">
          <label htmlFor="area-avoid">Is there an area you avoid?</label>
          <textarea name="area-avoid" id="area-avoid" rows="3"></textarea>
        </div>
        <div className="field">
          <label htmlFor="flip-hold">Do you flip or hold rentals? What profits/returns to you expect?</label>
          <textarea name="flip-hold" id="flip-hold" rows="3"></textarea>
        </div>
        <div className="field">
          <label htmlFor="challenges">What are your biggest challenges?</label>
          <textarea name="challenges" id="challenges" rows="3"></textarea>
        </div>
        <div className="field">
          <label htmlFor="cash-purchase">Will this be a cash purchase?</label>
          <textarea name="cash-purchase" id="cash-purchase" rows="3"></textarea>
        </div>
        <div className="field">
          <label htmlFor="units-houses">Do you prefer units or houses?</label>
          <textarea name="units-houses" id="units-houses" rows="3"></textarea>
        </div>
        <div className="field">
          <label htmlFor="number-bedrooms">How many bedrooms?</label>
          <textarea name="number-bedrooms" id="number-bedrooms" rows="3"></textarea>
        </div>
        <div className="field">
          <label htmlFor="find-us">How did you find our business?</label>
          <textarea name="find-us" id="find-us" rows="3"></textarea>
        </div>
        <div className="field">
          <label htmlFor="other-reqs">Are there any other requirements you would like us to consider?</label>
          <textarea name="other-reqs" id="other-reqs" rows="3"></textarea>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" className="special"/></li>
          <li><input type="reset" value="Reset"/></li>
        </ul>
      </form>

      <p>ABN 89 293 196178</p>
      <div className="close" onClick={() => {
        props.onCloseArticle()
      }}></div>
    </article>
  )
}


export default Contact
