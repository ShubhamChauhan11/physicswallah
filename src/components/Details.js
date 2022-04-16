import React from "react";
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import Move from "./Move";
import Stat from "./Stat";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Details.css"
const Detail=(props)=>{
     const{isDetail,setIsDetail, detail, setDetail, }= props;
     function goback(){
          setIsDetail(!isDetail)
          setDetail("");
          
     }
     return(
         
          <>
          {!detail ? null :
          <div>
          <div id="main">
          <div id="first">
               
          
          <h1>{detail.name.toUpperCase()}</h1>
          <div ><h2>Abilities:-</h2>
               {detail.abilities.map((ele)=>{
                    return(
                         <li>{ele.ability.name}</li>
                    )
               })}

          </div>
          <div><h2>Forms:-</h2>
               {detail.forms.map((ele)=>{
                    return(
                         <li>{ele.name}</li>
                    )

               })}

          </div>
          <div><h2>Height:-</h2> {detail.height}</div>
          <div><h2>Name:- </h2>{detail.name}</div>
          <div><h2>Species:-</h2> {detail.species.name}</div>
          </div>
          <div id="second">
          <div><h2>Moves</h2>
          <Move detail={detail}/>
          
          </div>
          <div><h2>Stats</h2>
               <Stat detail={detail}/>
          
          
          </div>
          </div>
          </div>
          
         
          <div id="backdiv">
          <button className="btn btn-secondary" onClick={goback}>« back</button>
          </div>
        

           
          </div>}
          </>
          
          


     )
}
export default Detail;