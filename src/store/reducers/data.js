import { GETDATA , ADDTOCOMPARE , REMOVEFROMCOMPARE} from "../actions/types";

const initialState = {
  data : [],
  comparingItems : []
};

export default (state = initialState, action) => {
  console.log(state)

  switch (action.type) {
    
    case GETDATA:
      let data = [...action.payload]
      console.log(state.data)
      return {
        ...state,
        data : data
      }
    case ADDTOCOMPARE:
      let id = action.payload
      let item = state.data.find(i => i.id === id)
      return {
        ...state,
        comparingItems : [...state.comparingItems , item]
      }

    case REMOVEFROMCOMPARE:
      let removeId = action.payload
      let removingItem = state.comparingItems.map( item => item.id).indexOf(removeId)
      state.comparingItems.splice(removingItem , 1)

      return {
        ...state,
        comparingItems : [...state.comparingItems]
      }



    default:
      return state;
  }
};
