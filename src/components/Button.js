import React from "react";

function Button({button, filter}){
    return(
        <div>
            {
               button.map((cat, i)=>{
                   return <button className="btn" type="button" onClick={()=> filter(cat)}>{cat}</button>
               }) 
            }
        </div>
    )
}
export default Button;