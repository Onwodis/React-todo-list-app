// import React, { useState } from "react";
import "./Counter.css";



const Counter = ({count, setCount})=>{
    function ponClickHandler (e){
        e.preventDefault();
        setCount(count + 1);
        // alert('gh')
    };
    function monClickHandler (e){
        
        if(count > 0 ){
            e.preventDefault();
            setCount(count - 1);
        }
        else{

        }
        // alert('gh')
    };



    return (
        <form>
            <div className="for-counter">
                <div className="center">
                    <button onClick={monClickHandler} className="minus"><i id="mm" className="fa-solid fa-minus mm"></i></button>
                    <span className="sspan">{count}</span>
                    <button onClick={ponClickHandler} className="plus"><i id="pp" className="fa-solid fa-plus pp"></i></button>
                </div>

                 
                    
            </div>
        </form>
    )
}









export default Counter;
