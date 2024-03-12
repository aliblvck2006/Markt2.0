import Home from './pages/Home'
import Navbar from './components/Navbar'
import Search from './components/search/Search'
import { Route, Routes } from 'react-router-dom'


// Modal
import Modal from './components/modal/Modal'

// img
import img1 from './assets/modal/img4.png'



function App() {
  return (
    <>
        <Navbar/>
        <Modal/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />}/>
        </Routes>
    </>
  )
}

export default App


let itemsFilter = [
    {
    id: 1,
    title:'Watch Series 9',
    model: 'Apple',
    price: '4 900 42',
    img: img1
    },
    {
    id: 2,
    title:'iPhone 15 , 128 gb Midnight',
    model: 'Apple',
    price: '4 900 42',
    img: img1
    },
    {
    id: 3,
    title:'iPhone 15 pro , 256 gb Natural Titanium ',
    model: 'Apple',
    price: '4 900 42',
    img: img1
    },
    {
    id: 4,
    title:'iPhone 15 pro max 1TB , Natural Titanium' ,
    model: 'Apple',
    price: '4 900 42',
    img: img1
    },
    {
    id: 5,
    title:'iPhone 15 plus 128 gb , Pink',
    model: 'Apple',
    price: '4 900 42',
    img: img1
    },
    {
      id: 6,
      title:'Watch Series 9',
      model: 'Apple',
      price: '4 900 42',
    },
    {
      id: 7,
      title:'Watch Series 9',
      model: 'Apple',
      price: '4 900 42',
    },
    {
      id: 8,
      title:'Watch Series 9',
      model: 'Apple',
      price: '4 900 42',
    },
    {
      id: 9,
      title:'Watch Series 9',
      model: 'Apple',
      price: '4 900 42',
    },
    {
      id: 10,
      title:'Watch Series 9',
      model: 'Apple',
      price: '4 900 42',
    },
    {
      id: 11,
      title:'Watch Series 9',
      model: 'Apple',
      price: '4 900 42',
    },
    {
      id: 12,
      title:'Watch Series 9',
      model: 'Apple',
      price: '4 900 42',
    },
    {
      id: 13,
      title:'Watch Series 9',
      model: 'Apple',
      price: '4 900 42',
    }
]
