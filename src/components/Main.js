import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {
      this.props.onCloseArticle()
    }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main"
           style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro"
                 className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt=""/></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue.
            Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi
            nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
            porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
            aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.</p>
          {close}
        </article>

        <article id="work"
                 className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt=""/></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec
            lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc
            rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel
            lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about"
                 className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt=""/></span>
          <p>Country Victoria was our home until our early 20’s, all our extended family
          remain in the area -Melbourne is our home now with our children and
          grandchildren we have a well-worn track down the Hume Highway and
          through picturesque Yea and will continue to do so happily for years to come.
          We have always invested in residential property with just the last few years
          seeing the area we grew up in with a different perspective.
          Cash flow property is our investment vehicle and once we worked out a
          profitable system that works for us, we would not invest any other way.
          Many years ago we had invested in the same area with ordinary results and
          were therefore not seeing the opportunity right in front of us due to this past
          experience. With a few adjustments and a new perspective we found cash flow
            was the answer for us.</p>
          <p>Once people knew we invested in regional Victoria we received well-meaning
          advice about the pitfalls, undeterred we continued to work on our strategy and
          the results became what we were aiming for and 8 &amp; 9% gross returns were
            normal we started to get asked how?</p>
          <p>We noticed friends and acquaintances would go to the country to see for
          themselves, be so amazed by the much lower prices and positive rental return
          they would ask around and purchase a property. BUT it’s not just any property
          that will produce ongoing cash flow and every time a better investment option
            would be secured with more local area knowledge.</p>
          <p>As with any suburbs there can be one end of the street you wouldn’t buy into
          as no one will rent from you and others ok, knowing what house/unit will rent
          for the highest return and how much rental you will achieve can be very
            different from what you are advised.</p>
          <p>We purchase lower price point property, tidy them up cosmetically and
          improve the quality of housing for people to live. We know what to pay, what
          return to expect and where to buy, we sell our renovated houses or keep them
          for cash flow depending on the deal at the time. Its simply about the numbers
            every time.</p>

          <p>Recently there was a discussion had with a representative from a capital city
          sourcing property on behalf of clients, the criteria, a better area and style of
            house to attract a better tenant (his words).</p>
          <p>This strategy is often why investors purchase a single investment property in
          regional Victoria and then decide it isn’t what they thought. We see this so
          often (we did it ourselves), regional investing is a very specific market-the
            above criteria in our experience is not the way to maximise cash flow returns.</p>

          <p>We DONT advise or RECOMMEND property, or SELL to you- we simply help
          investors who want to grow their portfolio with cash flow.
          We secure properties regularly and wholesale opportunities are just one of our
            services on offer.</p>
          {close}
        </article>

        <article id="contact"
                 className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
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
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
