import React from "react";

const Species = (props) => {
  const { speciesId, speciesImgUrl,speciesUrl } = props;
  return (
    <div className="species-mrg" key={speciesId}>
      <a href={speciesUrl}>
        <img src={speciesImgUrl} />
      </a>
    </div>
  );
};
export default Species;


