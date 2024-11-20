import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPages, MarvelPages, Jugadores, Search,Hero } from "../Pages"


export const HeroesRouter = () => {
  return (
    <>
        <Navbar />

        <div className="container">
          <Routes>
              <Route path="marvel" element={ <MarvelPages/> } />
              <Route path="dc" element={ <DcPages /> } />
              <Route path="search" element={ <Search /> } />
              <Route path="jugadores" element={ <Jugadores /> } />
              <Route path="hero/:id" element={ <Hero /> } />

              <Route path="/" element={ <Navigate to="/dc" /> } />
          </Routes>
        </div>
     </>
        
  )
}
