import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/category/:name' element={<ItemListContainer />}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
