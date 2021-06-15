import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

function TableHeader({ headers }) {
  console.log(headers)
  return (
    <Wrapper>
      <tr>
        {headers && headers.length > 0 && headers.map((c,index)=>(
          <th key={index}>
            {c.title}
          </th>
        ))}
      </tr>
    </Wrapper>
  )

}

TableHeader.propTypes = {
  headers: PropTypes.any,
};

export default TableHeader;
