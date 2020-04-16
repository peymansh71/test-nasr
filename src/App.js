import React , { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import { getData } from './store/actions'

import {Home , ErrorPage} from './pages'

export default function App() {

  const [state, setstate] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(
        (result) => {
          setstate(result.data)
        },
        (error) => {
          console.log("has error")
        }
      )
  }, [])

  useEffect(() => {
    dispatch(getData(state))
  }, [dispatch, state])

  return (
   <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={() => <ErrorPage  code={404}/>}  />
      </Switch>
   </BrowserRouter>
  );
}
