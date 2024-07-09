import React from "react";
import links from "../../assets/images-links";
import "./PlaceType.css";

function PlaceType({selectedPalace,setSelectedPalace}){
    return (
        <div className="placetype-div">
        {
            links.map( (item,index) => (
                 <div
                 key= {index}
                 //if index==selected then return selected
                 className={`link-div ${index==selectedPalace && "selected-palace"}`}
                 onClick={() => setSelectedPalace(index)}
                 >
                 <img src={item.imgSrc} alt={item.label} className="link-img"/>
                 <p className={`link-label ${index==selectedPalace && "selected-label"}`}>{item.label}</p>
                 </div>
            ))
        }
        </div>
    );
}

export default PlaceType;