import './App.css';
import store from './store';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Admin from './Admin';

function App() {

  const mystate = useSelector((state) => {
    return state.value
  })

  const dispatch = useDispatch()

  const setVal = (x) => {
    dispatch({ type: "SET_VAL2", value: 25 })
  }

  const getSqr = (x) => {

    fetch('http://localhost:8080/sqr', {
      'method': 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ num: 7 })
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })

    return x * x
  }

  useEffect(() => {
    getSqr()
  }, [])

  return (


    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={"Hello World"} />
          <Route path="/contacts" element={<><Link to={"/admin/profile"}>Admin Profile</Link>I am from contact</>} />

          <Route path='/admin' element={<Admin />}>
            <Route path='profile' element={<>I am from admin profile</>} />
          </Route>
        </Routes>


      </BrowserRouter>

      Testing...123

      {mystate}

      <br />

      {JSON.stringify(store.getState())}

      {setVal(25)}

      {JSON.stringify(store.getState())}

      {getSqr(6)}

    </div>
  );
}

export default App;
