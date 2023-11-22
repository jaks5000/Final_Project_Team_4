import React from 'react'

const Helmet = (props) => {
    document.title ='ITI_Team_4 -'+props.title
  return <div className='w-100'>{props.children}</div>;
};

export default Helmet