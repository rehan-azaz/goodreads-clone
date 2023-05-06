import React from 'react';
import coverimg from '../assets/images/coverimg.jpg';

const BookDetails = () => {
  return (
    <main>
      <div className='container'>
        <div className="BookPage__gridContainer">
          <div className="BookPage__leftColumn">
            <div className="Sticky">
              <div class="BookCover__image">
                <img src={coverimg} alt="coverimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BookDetails