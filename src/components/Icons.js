import React from "react";

const Icons = (props) => {
    const {title,imgUrl,id,description}=props;
  return (
    <div className="watch-icon-property" key={id}>
      <div className='temp'>
        <div className='icon-border tooltip'>
          <img src={imgUrl} className='img-icon'/>
          <span className="tooltip-text">{description}</span>
        </div>
        <p className='font-20 text-dark text-center'>{title}</p>
      </div>
    </div>
  );
};
export default Icons;

