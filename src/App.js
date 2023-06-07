import './App.css';
import Main from './component/Main';
import Navbar from './component/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Form
} from 'react-router-dom';
import Summary from './component/Summary';
import { useState } from 'react';
import Book from './component/Book';
import Tickets from './component/Tickets';


function App() {
  const [selectedShow, setSelectedShow] = useState({img:'',name:'',language:'',summary:'',runtime:''})
  const [booking, setBooking] = useState(JSON.parse(localStorage.getItem('bookings')) || []);
  return (
    <>

      <Router>
        <Navbar />


        <Routes>
          <Route exact path='/' element={<Main selectedShow = {selectedShow} setSelectedShow = {setSelectedShow}/>}></Route>
          <Route exact path='/summary' element={<Summary selectedShow={selectedShow} setSelectedShow={setSelectedShow} />}></Route>
          <Route exact path='/book' element={<Book selectedShow={selectedShow} setSelectedShow={setSelectedShow} setBooking={setBooking}  booking={booking} />}></Route>
          <Route exact path='/bookings' element={<Tickets selectedShow={selectedShow} setSelectedShow={setSelectedShow}  booking={booking}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
