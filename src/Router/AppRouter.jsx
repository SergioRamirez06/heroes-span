import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth";
import { HeroesRouter } from '../Heroes'
import { PrivateRouter, PublicRoute } from "./index";




export const AppRouter = () => {
  return (
    <>
        <Routes>

          <Route path="login" element={
            <PublicRoute>
              <LoginPages/>
            </PublicRoute>
          }/>
            
            <Route path="/*" element={
              <PrivateRouter>
                 <HeroesRouter />
              </PrivateRouter>
            }/>
        </Routes>
    </>
  )
}
