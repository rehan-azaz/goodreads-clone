import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useQuery } from "@apollo/client";

import { ALL_BOOKS } from "../graphql/queries";
import { getAuthToken, getUserRole } from "../helpers/auth";
import Loader from "../common/Loader";
import CreateBookModal from "../common/modals/CreateBookModal";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [userRole, setUserRole] = useState("");

  const [isModalOpen, setIsModelOpen] = useState(false);

  const columns = [
    {
      name: "Cover",
      selector: (row) => row.coverImg,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Author",
      selector: (row) => row.author,
      sortable: true,
    },
    {
      name: "Avg Rating",
      selector: (row) => row.avgRating,
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "Shelves",
      selector: (row) => row.shelves,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => row.actions,
      sortable: true,
    },
  ];

  const { loading, error, data } = useQuery(ALL_BOOKS, {
    context: {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    },
  });

  console.log({ loading, error, data });

  const closeModal = () => {
    setIsModelOpen(!isModalOpen);
  };

  useEffect(() => {
    if (data && data.books) {
      setBooks(processDataList(data.books));
    } else {
      setBooks([]);
    }
  }, [data]);

  const processDataList = (data) => {
    const list = [];
    for (let i = 0; i < data.length; i++) {
      const row = {
        title: (data[i] && data[i].title) || "-",
        author: (data[i] && data[i].author) || "-",
        coverImg:
          (data[i] && data[i].coverImg && (
            <img src={data[i].coverImg} alt={data[i].title || ""} />
          )) ||
          "",
      };

      list.push(row);
    }

    return list;
  };

  useEffect(() => {
    setUserRole(getUserRole());
  }, []);

  return (
    <div className="container">
      {loading && <Loader />}
      <div className="homeFullDiv">
        {userRole === "admin" && (
          <CreateBookModal modalIsOpen={isModalOpen} closeModal={closeModal} />
        )}
        <div className="currentlyReadingShelf homeSecondaryColumn">
          <h3 className="gr-h3">Currently Reading</h3>
          <div className="">
            <div className="gr-mediaBox">
              <a href="/">
                <img
                  alt="Passing"
                  className="gr-mediaBox__media gr-book__image"
                  src={""}
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
                <button className="gr-button gr-button--quiet u-marginTopTiny gr-button--small">
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
                className="gr-buttonAsLink currentlyReadingShelf__addBook"
                value="Add a book"
                type="button"
                autoComplete="off"
              />
            </span>
            <span>
              <span> · </span>
            </span>
            <span>
              <span>
                <button className="gr-buttonAsLink">General update</button>
              </span>
            </span>
          </span>
          {/* 2nd section */}
          <section className="gr-homePageRailContainer u-paddingBottomMedium showForLargeWidth">
            <h3 className="sectionHeading">Want to Read</h3>
            <div>
              <div className="shelfDisplay">
                <a className="shelfDisplay__bookCoverLink" href="/">
                  <img
                    src={""}
                    alt="coverimg"
                    className="gr-bookCover gr-bookCover--thumbnailSmall"
                  />
                </a>
                <div className="u-marginTopXSmall">
                  <a>View all books</a>
                </div>
              </div>
            </div>
          </section>
          {/* 3rd section */}
          <section className="showForLargeWidth">
            <h3 className="sectionHeading">Bookshelves</h3>
            <div>
              <div className="userShelvesBookCounts">
                <div className="userShelvesBookCounts__counts">
                  <a className="u-displayBlock" href="/user_shelves/539558125">
                    1
                  </a>
                  <a
                    className="u-displayBlock"
                    href="/user_shelves/539558126"
                    aria-label="Currently Reading shelf. 1 books."
                    data-reactid=".257496dsocc.0.$currently-reading"
                  >
                    1
                  </a>
                  <a
                    className="u-displayBlock"
                    href="/user_shelves/539558127"
                    aria-label="Read shelf. 0 books."
                    data-reactid=".257496dsocc.0.$read"
                  >
                    0
                  </a>
                </div>
                <div data-reactid=".257496dsocc.1">
                  <a
                    className="userShelvesBookCounts__nameLink"
                    href="/user_shelves/539558125"
                    aria-label="Want to Read shelf. 1 books."
                    data-reactid=".257496dsocc.1.$to-read"
                  >
                    Want to Read
                  </a>
                  <a
                    className="userShelvesBookCounts__nameLink"
                    href="/user_shelves/539558126"
                    aria-label="Currently Reading shelf. 1 books."
                    data-reactid=".257496dsocc.1.$currently-reading"
                  >
                    Currently Reading
                  </a>
                  <a
                    className="userShelvesBookCounts__nameLink"
                    href="/user_shelves/539558127"
                    aria-label="Read shelf. 0 books."
                    data-reactid=".257496dsocc.1.$read"
                  >
                    Read
                  </a>
                </div>
                <div
                  className="userShelvesBookCounts__buffer"
                  data-reactid=".257496dsocc.2"
                ></div>
              </div>
            </div>
          </section>
        </div>

        {/* my book section */}
        <div className="rightSection">
          <div className="js-dataTooltip">
            <div className="createBook-container">
              <button
                onClick={(e) => {
                  setIsModelOpen(true);
                }}
                type="button"
                className="btnEmail"
              >
                Add New Book
              </button>
            </div>

            {books && (
              <DataTable
                columns={columns}
                data={books}
                pagination
                paginationComponentOptions={{
                  selectAllRowsItem: true,
                  selectAllRowsItemText: "All",
                }}
                customStyles={{
                  headRow: {
                    fontWeight: "bold",
                  },
                }}
              />
            )}
            {/* <table id="books" className="table stacked" border="0">
              <thead>
                <tr id="booksHeader" className="tableList">
                  <th alt="cover" className="field cover">
                    <a>cover</a>
                  </th>
                  <th alt="title" className="field title">
                    <a>title</a>
                  </th>
                  <th alt="author" className="field author" c>
                    <a>author</a>
                  </th>
                  <th alt="avg_rating" className="field avg_rating">
                    <a>avg rating</a>
                  </th>
                  <th alt="rating" className="field rating">
                    <a>rating</a>
                  </th>
                  <th alt="shelves" className="field shelves">
                    shelves
                  </th>
                  <th alt="review" className="field review">
                    <a>review</a>
                  </th>
                  <th alt="date_read" className="field date_read">
                    <a>date read</a>
                  </th>
                  <th alt="date_added" className="field date_added">
                    <a href="/">date</a>
                  </th>
                </tr>
              </thead>
              <tbody id="booksBody">
                <tr id="review_5515448925" className="bookalike review">
                  <td className="field cover">
                    <div className="value">
                      <div className="js-tooltipTrigger tooltipTrigger">
                        <a href="/">
                          <img
                            id="cover_review_5515448925"
                            src={""}
                            alt="cover_review"
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="field title">
                    <div className="value">
                      <a href="/">
                        Atomic Habits: An Easy &amp; Proven Way to Build Good
                        Habits &amp; Break Bad Ones
                      </a>
                    </div>
                  </td>
                  <td className="field author">
                    <div className="value">
                      <a href="/">Clear, James</a>
                      <span title="Goodreads Author!">*</span>
                    </div>
                  </td>
                  <td className="field avg_rating">
                    <div className="value"> 4.38</div>
                  </td>

                  <td className="field rating">
                    <div className="value">
                      <div className="stars">
                        <a href="/" className="star off">
                          1 of 5 stars
                        </a>
                        <a href="/" className="star off">
                          2 of 5 stars
                        </a>
                        <a href="/" className="star off">
                          3 of 5 stars
                        </a>
                        <a href="/" className="star off">
                          4 of 5 stars
                        </a>
                        <a href="/" className="star off">
                          5 of 5 stars
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="field shelves">
                    <div className="value">
                      <span id="shelfList165239369_40121378">
                        <span id="shelf_5152779412">
                          <a
                            className="shelfLink"
                            title="View all books in Rehan Khan's to-read shelf."
                            href="/"
                          >
                            to-read
                          </a>
                        </span>
                      </span>
                      <br />
                      <a className="shelfChooserLink smallText" href="/">
                        [edit]
                      </a>
                    </div>
                  </td>
                  <td className="field review">
                    <div className="value">
                      <a href="/">Write a review</a>
                    </div>
                  </td>
                  <div className="editable_date date_read_new">
                    <span className="greyText">not set</span>
                    <a className="floatingBoxLink smallText" href="/">
                      [edit]
                    </a>
                  </div>
                  <td className="field date_added">
                    <div className="value">
                      <span title="April 27, 2023">Apr 27, 2023</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;