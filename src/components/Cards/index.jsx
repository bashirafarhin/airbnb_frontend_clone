import React from "react";
import Card from "./Card";
import "./Cards.css";

function Cards({list}){
    return (
        <div className="cards-flex">
         {list.map((item,index) => (
                <Card card={item} key={index}/>
         ))}
        </div>
    );
}

export default Cards;