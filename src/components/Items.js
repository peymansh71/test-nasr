import React  from "react";
import { useSelector, useDispatch } from "react-redux";

import CHERRY from '../assets/images/cherry.jpeg'

import { addToCompare , removeFromCompare } from '../store/actions'
import ComparingTable from "./ComparingTable";

const Items = () => {
  const { diversityData } = useSelector(state => state);

  const comparing = (id)=> {

   let status = diversityData.comparingItems.find(i => i.id === id)

   if(status !== undefined){
    dispatch(removeFromCompare(id))
   }else if(diversityData.comparingItems.length < 2){
     dispatch(addToCompare(id))
   }
  }



  const dispatch = useDispatch()

  return (
    <>
    <div className="item-list">
      {
        diversityData?.data?.length > 0
          ? diversityData.data.map((el, index) => (
              <div className="item" key={index}>
                <div className="item__image">
                  <img src={CHERRY} alt=""/>
                  <div className="item__image-layer">
                    <button
                      onClick={e => { comparing(el.id) }}
                    >
                      <span>{!diversityData.comparingItems.find(i => i.id === el.id) ? "compare" : "remove"}</span>
                    </button>
                  </div>
                </div>
                <div className="item__desc">
                  <div > 
                    <span>{el.employee_name}</span> 
                    <span> {el.employee_age}</span> 
                  </div>
                  <div>
                    <span> ${el.employee_salary} </span>  
                  </div>  
                </div> 
              </div>
            ))
          : null
      }
    </div>
    {
      diversityData?.data?.length > 0 && <ComparingTable  data={diversityData.comparingItems}/>
    }
    </>
  );
};

export default Items;
