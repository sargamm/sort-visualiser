import React from "react"
import './App.css'

function Sorter(props){
    let array=props.state.array
    let size=props.state.arraySize
    let w=80/size
    return(
     <div className="array-container">
         {/* <h1 style={{color:"white"}}>{size}</h1> */}
         {  array.map((value,idx)=>(
                <div
                    style={{ height:`${value}px`, width:`${w}%`, backgroundColor:" #e0cc44" }}
                    key={idx}
                    className="array-bar"
                    >
                  
                </div>
             ))}
             {/* <h1 style={{color:"white"}}>bar</h1> */}
     </div>   
    )
}

export default Sorter