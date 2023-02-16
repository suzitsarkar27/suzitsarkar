import React from "react";

const Card = ({item}) => {
  return (
    <>
    <div>
      <div className="box btn_shadow">
        <img src={item.image} alt="" />
        <h2>{item.name}</h2>
        <p>{item.discription}</p>

        <a href="/">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
   </>
  );
};

export default Card;
