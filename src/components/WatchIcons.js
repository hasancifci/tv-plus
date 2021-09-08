import React from "react";
import Icons from "./Icons";

const WatchIcons = (props) => {
  return (
    <div className="watch-icon-flex">
      {props.watchData&&props.watchData.map((watch) => {
        return <Icons key={watch.id} title={watch.title || ''} imgUrl={watch.imgUrl} description={watch.description}/>;
      })}
    </div>
  );
};
export default WatchIcons;

