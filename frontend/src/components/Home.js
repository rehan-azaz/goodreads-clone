import React from "react";
import coverimg from "../assets/images/coverimg.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="homeFullDiv">
        <div className="currentlyReadingShelf homeSecondaryColumn">
          <h3 className="gr-h3">Currently Reading</h3>
          <div className="">
            <div className="gr-mediaBox">
              <a href="/">
                <img
                  alt="Passing"
                  className="gr-mediaBox__media gr-book__image"
                  src={coverimg}
                />
              </a>
              <div className="gr-mediaBox__desc gr-mediaBox__desc--clearfixOverflow">
                <a
                  href="/"
                  className="gr-book__titleLink gr-hyperlink gr-hyperlink--naked"
                >
                  Passing
                </a>
              </div>
              <div className="gr-book__author">
                <span data-reactid=".vtnz8gh8o8.0.1.$=1$57640287.1.2.0">
                  by{" "}
                </span>
                <a
                  href="/"
                  className="gr-book__authorLink gr-hyperlink gr-hyperlink--naked"
                >
                  Nella Larsen
                </a>
              </div>
              <div aria-live="polite">
                <button class="gr-button gr-button--quiet u-marginTopTiny gr-button--small">
                  Update progress
                </button>
              </div>
            </div>
          </div>
          <span>
            <span>
              <a href="/">View all books</a>
            </span>
            <span>
              <span> · </span>
            </span>
            <span>
              <input
                class="gr-buttonAsLink currentlyReadingShelf__addBook"
                value="Add a book"
                type="button"
                autocomplete="off"
              />
            </span>
            <span>
              <span> · </span>
            </span>
            <span>
              <span>
                <button class="gr-buttonAsLink">General update</button>
              </span>
            </span>
          </span>
          {/* 2nd section */}
          <section class="gr-homePageRailContainer u-paddingBottomMedium showForLargeWidth">
            <h3 className="sectionHeading">Want to Read</h3>
            <div>
              <div class="shelfDisplay">
                <a class="shelfDisplay__bookCoverLink" href="/">
                  <img
                    src={coverimg} alt="coverimg"
                    className="gr-bookCover gr-bookCover--thumbnailSmall"
                  />
                </a>
                <div class="u-marginTopXSmall">
                  <a>View all books</a>
                </div>
              </div>
            </div>
          </section>
          {/* 3rd section */}
          <section class="showForLargeWidth">
            <h3 className="sectionHeading">Bookshelves</h3>
            <div>
              <div class="userShelvesBookCounts">
                <div class="userShelvesBookCounts__counts">
                  <a class="u-displayBlock" href="/user_shelves/539558125">
                    1
                  </a>
                  <a
                    class="u-displayBlock"
                    href="/user_shelves/539558126"
                    aria-label="Currently Reading shelf. 1 books."
                    data-reactid=".257496dsocc.0.$currently-reading"
                  >
                    1
                  </a>
                  <a
                    class="u-displayBlock"
                    href="/user_shelves/539558127"
                    aria-label="Read shelf. 0 books."
                    data-reactid=".257496dsocc.0.$read"
                  >
                    0
                  </a>
                </div>
                <div data-reactid=".257496dsocc.1">
                  <a
                    class="userShelvesBookCounts__nameLink"
                    href="/user_shelves/539558125"
                    aria-label="Want to Read shelf. 1 books."
                    data-reactid=".257496dsocc.1.$to-read"
                  >
                    Want to Read
                  </a>
                  <a
                    class="userShelvesBookCounts__nameLink"
                    href="/user_shelves/539558126"
                    aria-label="Currently Reading shelf. 1 books."
                    data-reactid=".257496dsocc.1.$currently-reading"
                  >
                    Currently Reading
                  </a>
                  <a
                    class="userShelvesBookCounts__nameLink"
                    href="/user_shelves/539558127"
                    aria-label="Read shelf. 0 books."
                    data-reactid=".257496dsocc.1.$read"
                  >
                    Read
                  </a>
                </div>
                <div
                  class="userShelvesBookCounts__buffer"
                  data-reactid=".257496dsocc.2"
                ></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
