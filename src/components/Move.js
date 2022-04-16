import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Move.css"
const Move=(props)=>{
     const {detail}= props;
     const [startindex, setStartIndex]= useState(0)
     
     return(
          <>
          {detail.moves.map((ele, index)=>{
               if( index> startindex && index<= startindex+10){
                    return(
                         <li>{ele.move.name}</li>
                    )
               }
          })}
          {startindex+10<detail.moves.length ?<button className="btn btn-primary" onClick={()=>{
               let ind= startindex;
               setStartIndex(ind+10)

          }}> NEXT »</button>: null}
          
          {startindex>0? <button className="btn btn-primary" onClick={()=>{
               let ind= startindex;
               setStartIndex(ind-10);
          }}> « PREV</button>: null }
          

          </>
     )
}
export default Move;