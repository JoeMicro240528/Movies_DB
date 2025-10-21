import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import FavoritePage from './pages/Favorite'
import Landing from './pages/Landing'
import SearchPage from './pages/Search'
import Details from './pages/Details'
function App() {
  return (
      <div>
         <Navbar />
           <Routes>
              <Route  index element={<Landing />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="favorites" element={<FavoritePage />} />
              <Route path="details/:id" element={<Details />} />
           </Routes>
    </div>
  )
}


export default App