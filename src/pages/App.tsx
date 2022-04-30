import './App.scss'
import Navbar from '../layouts/Navbar'
import PlaceList from './PlaceList'
import { Route, Routes } from 'react-router-dom'
import PlaceDetails from './PlaceList/PlaceDetails'



function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<PlaceList />} />
          <Route path=":placeId" element={<PlaceDetails/ >} />
          <Route path="*" element={<div>No Match!</div>} />
        </Route>
      </Routes>
  )
}

export default App
