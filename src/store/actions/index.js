import {
  GETDATA,
  ADDTOCOMPARE,
  REMOVEFROMCOMPARE,
} from "./types";


export const getData = id => {
  return {
    type: GETDATA,
    payload: id
  }
}

export const addToCompare = id => {
  return {
    type: ADDTOCOMPARE,
    payload: id
  }
}

export const removeFromCompare = id => {
  return {
    type: REMOVEFROMCOMPARE,
    payload: id
  }
}
