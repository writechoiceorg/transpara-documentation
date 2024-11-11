import React, { useState, useMemo } from 'react';
import '../../css/faqs.css';

const JsonToList = ({ jsonData }) => {
  const [filter, setFilter] = useState('');

  // Filtering logic
  const filteredData = useMemo(() => {
    return jsonData.filter((item) =>
      item.q.toLowerCase().includes(filter.toLowerCase())
    );
  }, [jsonData, filter]);

  return (
    <>
      <div className="filters_container">
        <div className="search_container faq_search_container">
          <label htmlFor="filterInput" className="filter_label">
            Search
          </label>
          <div className="search_input_container faq_search_input_container">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M4.99991 8.99983C7.209 8.99983 8.99983 7.209 8.99983 4.99991C8.99983 2.79082 7.209 1 4.99991 1C2.79082 1 1 2.79082 1 4.99991C1 7.209 2.79082 8.99983 4.99991 8.99983Z" stroke="#494949" strokeWidth="0.999978" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.0001 9.99978L7.8252 7.82483" stroke="#494949" strokeWidth="0.999978" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              id="filterInput"
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <ul>
          <hr />
          {filteredData.length > 0 &&
            filteredData.map((item, index) => (
              <h4 key={index}>
                <a href={`/docs/faq/${item.link}`}>{item.q}</a>
                <hr />
              </h4>
            ))}
        </ul>
      </div>
      <div className="filters_container">
        <span className="filter_label">
          {
            filteredData.length ? `Showing ${filteredData.length} entries` :  "No entries found"
          }
        </span>
      </div>
    </>
  );
};

export default JsonToList;
