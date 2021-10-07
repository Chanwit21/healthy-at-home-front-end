import React from 'react';
import './Pagination.css';

function Pagination(props) {
  const { length, onPage, setOnPage } = props;

  const createPagination = (number) => {
    const result = [];
    for (let i = 1; i <= number; i++) {
      result.push(
        <li key={i - 1}>
          <button
            onClick={(e) => {
              setOnPage(i);
              window.scrollTo(0, 0);
            }}
            style={{ fontWeight: onPage === i ? '900' : '' }}
          >
            {i}
          </button>
        </li>
      );
    }
    return result;
  };

  const start = onPage === 1 ? 0 : onPage === length ? onPage - 3 : onPage - 2;
  const end = onPage === 1 ? onPage + 2 : onPage === length ? length : onPage + 1;
  // console.log({ start, end });

  const paginations = createPagination(length).slice(start < 0 ? 0 : start, end > length ? length : end);

  return (
    <div className='pagination'>
      <ul>
        <li>
          <button
            disabled={onPage === 1}
            onClick={() => {
              setOnPage((cur) => {
                if (cur > 1) return cur - 1;
                return cur;
              });
              window.scrollTo(0, 0);
            }}
          >
            <i className='bi bi-arrow-left-short'></i>
          </button>
        </li>
        {paginations}
        <li>
          <button
            disabled={onPage === length}
            onClick={() => {
              setOnPage((cur) => {
                if (cur < length) return cur + 1;
                return cur;
              });
              window.scrollTo(0, 0);
            }}
          >
            <i className='bi bi-arrow-right-short'></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
