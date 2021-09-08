import React from 'react'
import Species from './Species';

const SpeciesGroup = (props) => {
    return (
      <div className="species-property">
        {props.speciesData&&props.speciesData.map((species) => { //TODO:Datadan gelen verinin okunması.
          return <Species key={species.speciesId} speciesImgUrl={species.speciesImgUrl} speciesUrl={species.speciesUrl} />;
        })}
      </div>//TODO:Okunan verinin species componentine gönderilmesi.
    );
  };
  export default SpeciesGroup;

