import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/about/About.jsx'
import './index.css'
import Profile from './components/about-me/Profile.jsx'
import {githubInfoLoader} from './components/about-me/Helper.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='contact' element = {<Contact/>} /> 
      <Route loader={githubInfoLoader} path='profile' element = {<Profile/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
