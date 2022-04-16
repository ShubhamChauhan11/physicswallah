import React, { lazy, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./List.css";

import axios from "axios";
import Detail from "./Details";





const List=(props)=>{
     const{data,  setData}= props;
     const[detail, setDetail]= useState();
     const[search, setSearch]= useState("");
     
     const[isDetail, setIsDetail]= useState(false);
    
     function filtersearch(e){
      e.preventDefault()
      data.results.filter((ele,index)=>{
        if(ele.name===search){
          
          detailPage(index);
          
        }
        setSearch("");
  
      })
  
    }
    
   
   
    
     const detailPage=(index)=>{
          
          
            let   url= data.results[index].url;
            


         
           
          console.log(url);
          
          
          axios.get(url).then((res)=>{
            console.log(res.data);
            setDetail(res.data)
          })
          setIsDetail(!isDetail)
          
     }
    
     function nextPage(){
          axios.get(data.next).then((res)=>{
            setData(res.data)
          })
        }
        function prevPage(){
          axios.get(data.previous).then((res)=>{
            setData(res.data);
          })
        }
     
     return(
          
          <>
          <div id="searchfield">
          <form onSubmit={filtersearch}>
             <input type="text" placeholder='search' value={search} onChange={(e)=>{
              setSearch(e.target.value);
             }}/>
             <input type="submit" value="search"/>
          </form>

          </div>
          
               
          {!isDetail ? <div id="listelements"> {data.results.map((ele,index)=>{
               return (
                    
                    <div key={ele.name} id="elediv" onClick={()=>{
                       detailPage(index);

                    }}>{ele.name}</div>
                    
               )
          })}</div>:<Detail isDetail={isDetail} setIsDetail={setIsDetail} detail={detail} setDetail={setDetail} />}

           
          
         
          {!isDetail ? <div id="btndiv">
        {data.next!==null ?<button className='btn btn-primary' onClick={nextPage}>Next</button>: ""}
        {data.previous!=null? <button  className="btn btn-primary" onClick={prevPage}>prev</button>: ""}
      </div>: ""}
     
          
          
          </>
         
          
     )
}
export default List;