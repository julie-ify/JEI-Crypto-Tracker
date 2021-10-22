/* eslint-disable */
import React from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';

const Pagination = (props) => {
  const { NumberOfPages, currentPage, handlePageChange } = props;
  const range = lodash.range(1, NumberOfPages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {range.map((page) => (
          <li
            key={page}
            className={currentPage === page ? 'page-item active' : 'page-item'}
          >
            <a className="page-link" onClick={() => handlePageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  NumberOfPages: propTypes.number.isRequired,
};
export default Pagination;
