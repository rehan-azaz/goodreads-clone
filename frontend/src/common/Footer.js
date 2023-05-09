import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='Footer__contents'>


          <div className="Footer__column">
            <h3 className="Footer__heading">Company</h3>
            <ul className="Footer__list">
              <li><a href="/about/us">About us</a></li>
              <li><a href="/jobs">Careers</a></li>
              <li><a href="/about/terms">Terms</a></li>
              <li><a href="/about/privacy">Privacy</a></li>
              <li><a href="https://help.goodreads.com/s/article/Goodreads-Interest-Based-Ads-Notice">Interest Based Ads</a></li>
              <li><a href="/adprefs">Ad Preferences</a></li>
              <li><a href="/help?action_type=help_web_footer">Help</a></li>
            </ul>
          </div>
          <div className="Footer__column">
            <h3 className="Footer__heading">Connect</h3>
            <ul className="Footer__list--inline">
              <li>
                <a aria-label="Facebook" href="https://www.facebook.com/Goodreads/">
                  <i className="Icon FacebookIcon">
                    <svg viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9304 5.90625 14.2146 5.90625C15.3087 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1921C13.9499 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z"></path>
                    </svg>
                  </i>
                </a>
              </li>
              <li>
                <a aria-label="Twitter" href="https://twitter.com/goodreads"><i className="Icon TwitterIcon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM14.615 7.725C13.285 7.725 12.205 8.805 12.205 10.135C12.205 10.325 12.225 10.51 12.27 10.685C10.265 10.585 8.49 9.625 7.3 8.165C7.095 8.52 6.975 8.935 6.975 9.375C6.975 10.21 7.4 10.95 8.05 11.38C7.655 11.37 7.285 11.26 6.96 11.08V11.11C6.96 12.28 7.79 13.25 8.895 13.475C8.695 13.53 8.48 13.56 8.26 13.56C8.105 13.56 7.955 13.545 7.805 13.515C8.11 14.475 9 15.17 10.055 15.19C9.23 15.835 8.19 16.22 7.06 16.22C6.865 16.22 6.675 16.21 6.485 16.185C7.54 16.875 8.81 17.275 10.17 17.275C14.605 17.275 17.03 13.6 17.03 10.415C17.03 10.31 17.03 10.205 17.025 10.105C17.495 9.765 17.905 9.34 18.23 8.855C17.8 9.045 17.335 9.175 16.845 9.235C17.345 8.935 17.725 8.465 17.905 7.9C17.44 8.175 16.925 8.375 16.375 8.485C15.935 8.015 15.31 7.725 14.615 7.725Z"></path>
                  </svg>
                </i>
                </a>
              </li>
            </ul>
          </div>

          <div className="Footer__right">
            <p className="Footer__copy">© 2023 Goodreads, Inc.</p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
