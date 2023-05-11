import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BOOK_BY_ID } from "../graphql/queries";
import { getAuthToken } from "../helpers/auth";
import Loader from "../common/Loader";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const { loading, error, data } = useQuery(BOOK_BY_ID, {
    context: {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    },
    variables: { id: id },
  });

  console.log({ loading, error, data });
  useEffect(() => {
    if (data) {
      setBook(data.bookById);
    }
  }, [data]);

  return (
    <main>
      <div className="container">
        {loading === true && <Loader />}
        {error && (
          <div className="error-container">
            <div className="error">{error.message}</div>
          </div>
        )}
        {data && (
          <div className="BookPage__gridContainer">
            <div className="BookPage__leftColumn">
              <div className="Sticky">
                <div className="BookCover__image">
                  <img src={book?.coverImg} alt="coverimg" />
                </div>
              </div>
            </div>
            <div className="BookPage__rightColumn">
              <div className="BookPageTitleSection__title">
                <h1 className="Text Text__title1">{book && book?.title}</h1>
              </div>
              <h3>{book && book?.author}</h3>
              <div className="BookPageMetadataSection__ratingStats">
                <a className="RatingStatistics" href="/">
                  <div
                    className="RatingStatistics__column"
                    aria-label="Average rating of 4.38 stars."
                    role="figure"
                  >
                    <div className="RatingStar--medium">
                      <svg viewBox="0 0 24 24" role="presentation">
                        <path
                          className="RatingStar__fill"
                          d="M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="RatingStar--medium">
                      <svg viewBox="0 0 24 24" role="presentation">
                        <path
                          className="RatingStar__fill"
                          d="M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="RatingStar--medium">
                      <svg viewBox="0 0 24 24" role="presentation">
                        <path
                          className="RatingStar__fill"
                          d="M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="RatingStar--medium">
                      <svg viewBox="0 0 24 24" role="presentation">
                        <path
                          className="RatingStar__fill"
                          d="M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="RatingStar--medium">
                      <svg viewBox="0 0 24 24" role="presentation">
                        <defs>
                          <clipPath
                            id="clip_clhczx56a00yh2v6y71wrsx9y"
                            className="RatingStar__backgroundFill"
                          >
                            <path
                              className="RatingStar__fill"
                              d="M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z"
                            ></path>
                          </clipPath>
                          <path
                            id="path_clhczx56a00yh2v6y71wrsx9y"
                            d="M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z"
                          ></path>
                        </defs>
                        <use
                          clipPath="url(#clip_clhczx56a00yh2v6y71wrsx9y)"
                          href="/"
                          className="RatingStar__backgroundFill"
                        ></use>
                        <path
                          className="RatingStar__fill"
                          d="M6 9.13135H0.503157C0.33975 9.13135 0.186521 9.21071 0.0922364 9.34417C-0.0680877 9.57112 -0.0140806 9.88506 0.212865 10.0454L6 14.1337V9.13135Z M6 17.8422L4.40172 22.6164C4.35092 22.7681 4.37534 22.935 4.46749 23.0658C4.6275 23.293 4.94137 23.3474 5.16853 23.1874L6 22.6018V17.8422Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="RatingStatistics__rating">4.38</div>
                    <div className="RatingStatistics__meta">
                      <span data-testid="ratingsCount">
                        619,723&nbsp;ratings
                      </span>
                      <span data-testid="reviewsCount" className="u-dot-before">
                        42,030&nbsp;reviews
                      </span>
                    </div>
                    {/* <div classNamee="ChoiceAwardBadge">
                    <div classNamee="ChoiceAwardBadge__flag">
                      <span classNamee="Text Text__body3 Text__semibold Text__body-standard">Goodreads Choice Award</span>
                    </div>
                    <span>
                      <a href="https://www.goodreads.com/choiceawards/best-nonfiction-books-2018" data-testid="award">
                        <span classNamee="Text Text__body3 Text__semibold Text__body-standard">Nominee for Best Nonfiction (2018)</span>
                      </a>
                    </span>
                  </div> */}
                    <div className="DetailsLayoutRightParagraph__widthConstrained">
                      <span className="Formatted"></span>
                    </div>
                  </div>
                </a>
                <div
                  data-testid="genresList"
                  className="BookPageMetadataSection__genres"
                >
                  <ul
                    className="CollapsableList"
                    aria-label="Top genres for this book"
                  >
                    <span tabIndex="-1">
                      <span className="BookPageMetadataSection__genrePlainText">
                        <span className="Text Text__body3 Text__subdued">
                          Genres
                        </span>
                      </span>
                      <span className="BookPageMetadataSection__genreButton">
                        <a
                          href="https://www.goodreads.com/genres/non-fiction"
                          className="Button Button--tag-inline Button--small"
                        >
                          <span className="Button__labelItem">Nonfiction</span>
                        </a>
                      </span>
                    </span>
                    <span tabIndex="-1"></span>{" "}
                    <div className="Button__container">
                      <button
                        type="button"
                        className="Button Button--tag-inline Button--small"
                        aria-label="Show all items in the list"
                      ></button>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Button__container">
              <button type="button" className="Button" aria-label="Share">
                <span className="Button__labelItem">
                  <i className="Icon ShareIcon">
                    <svg viewBox="0 0 24 24">
                      <path d="M16.5 2C18.433 2 20 3.567 20 5.5C20 7.433 18.433 9 16.5 9C15.6752 9 14.917 8.71467 14.3187 8.23733L10.6119 10.3965C10.8599 10.8769 11 11.4221 11 12C11 12.619 10.8393 13.2006 10.5573 13.7051L14.2507 15.8184C14.859 15.3076 15.6436 15 16.5 15C18.433 15 20 16.567 20 18.5C20 20.433 18.433 22 16.5 22C14.567 22 13 20.433 13 18.5C13 17.9703 13.1177 17.4681 13.3283 17.0181L9.62754 14.901C9.59678 14.8834 9.56774 14.8639 9.54048 14.8429C8.9661 15.2568 8.26144 15.5 7.5 15.5C5.567 15.5 4 13.933 4 12C4 10.067 5.567 8.5 7.5 8.5C8.30519 8.5 9.04687 8.77189 9.63824 9.22888L13.364 7.056C13.131 6.58729 13 6.05895 13 5.5C13 3.567 14.567 2 16.5 2ZM16.5 16.5C15.3954 16.5 14.5 17.3954 14.5 18.5C14.5 19.6046 15.3954 20.5 16.5 20.5C17.6046 20.5 18.5 19.6046 18.5 18.5C18.5 17.3954 17.6046 16.5 16.5 16.5ZM7.5 10C6.39543 10 5.5 10.8954 5.5 12C5.5 13.1046 6.39543 14 7.5 14C8.60457 14 9.5 13.1046 9.5 12C9.5 10.8954 8.60457 10 7.5 10ZM16.5 3.5C15.3954 3.5 14.5 4.39543 14.5 5.5C14.5 6.60457 15.3954 7.5 16.5 7.5C17.6046 7.5 18.5 6.60457 18.5 5.5C18.5 4.39543 17.6046 3.5 16.5 3.5Z"></path>
                    </svg>
                  </i>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default BookDetails;
