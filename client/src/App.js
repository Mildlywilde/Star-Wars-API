import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { People } from './views/People'
import { Planets } from './views/Planets.js'
import { Vehicles } from './views/Vehicles'
import { Starships } from './views/Starships'
import { Species } from './views/Species'
import { Films } from './views/Films'

import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>
  },
  {
    path: '/people',
    element: <People />
  },
  {
    path: '/planets',
    element: <Planets />
  },
  {
    path: '/vehicles',
    element: <Vehicles />
  },
  {
    path: '/starships',
    element: <Starships />
  },
  {
    path: '/species',
    element: <Species />
  },
  {
    path: '/films',
    element: <Films />
  }
])

function App () {
  return (
    <div className="App">
      <header>
        <Navbar bg='light' expand='md'>
          <Container>
          <Navbar.Brand href="#home">Star Wars API</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse >
            <Nav className="me-auto">
              <Nav.Link href="/people">People</Nav.Link>
              <Nav.Link href="/planets">Planets</Nav.Link>
              <Nav.Link href="/vehicles">Vehicles</Nav.Link>
              <Nav.Link href="/starships">Starships</Nav.Link>
              <Nav.Link href="/species">Species</Nav.Link>
              <Nav.Link href="/films">Films</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <body>
        <RouterProvider router={router}/>
      </body>
    </div>
  )
}

export default App
