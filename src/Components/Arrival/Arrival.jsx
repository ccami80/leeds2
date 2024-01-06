import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Item } from "../Item/Item";
import "./Arrival.css";

export const Arrival = () => {
  const {
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
  } = useContext(ShopContext);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const maxPagesToShow = 6;
    const pages = [];

    for (let i = 1; i <= totalPages && i <= maxPagesToShow; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="arrival">
      <div className="title">
        <h1>함께보면 좋은 상품이에요</h1>
        <p>카트</p>
      </div>
      <div className="arrival-item">
        {currentItems.map((item, i) => {
          return (
            <div key={i} className="grid-item">
              <Item
                name={item.name}
                id={item.id}
                image={item.image}
                imageDepth={item.image_depth}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button
          onClick={goToFirstPage}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "disabled" : ""}
        >
          {"<<"}
        </button>

        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "disabled" : ""}
        >
          {"<"}
        </button>

        {renderPageNumbers()}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={currentPage === totalPages ? "disabled" : ""}
        >
          {">"}
        </button>

        <button
          onClick={goToLastPage}
          disabled={currentPage === totalPages}
          className={currentPage === totalPages ? "disabled" : ""}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};
