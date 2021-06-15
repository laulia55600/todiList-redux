import React from 'react';

export default props => {
    return (
        <li className='list-group-item d-flex flex-row justify-content-between
        align-items-center list-group-item-action'>
          <span>xx</span>
          <span>
          <input className="mx-3" type="checkbox" />
          <button className="btn btn-sm btn-danger">Delete</button>
          </span>
        </li>
    )
 }