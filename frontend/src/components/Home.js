import React from 'react';
import coverimg from '../assets/images/coverimg.jpg';

const Home = () => {
  return (
    <div className='container'>
      <div className='homeFullDiv'>
        <div className='currentlyReadingShelf homeSecondaryColumn'>
          <h3 className="gr-h3">
            Currently Reading
          </h3>
          <div className=''>


            <div className='gr-mediaBox'>
              <a href="/">
                <img alt="Passing" className="gr-mediaBox__media gr-book__image" src={coverimg} />
              </a>
              <div className='gr-mediaBox__desc gr-mediaBox__desc--clearfixOverflow'>
                <a href="/" className="gr-book__titleLink gr-hyperlink gr-hyperlink--naked">Passing</a>
              </div>
              <div className="gr-book__author"><span data-reactid=".vtnz8gh8o8.0.1.$=1$57640287.1.2.0">by </span>
                <a href="/" className="gr-book__authorLink gr-hyperlink gr-hyperlink--naked">Nella Larsen</a>
              </div>
              <div aria-live="polite">
                <button class="gr-button gr-button--quiet u-marginTopTiny gr-button--small">Update progress</button>
              </div>
            </div>
          </div>
          <footer>

          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home