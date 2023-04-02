import React, { useEffect, useState } from 'react'
import { starWarsAPI } from '../api'
import { SearchBar } from '../components/SearchBar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export function Planets () {
  const [planets, setPlanets] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await starWarsAPI.planets.get()
      setPlanets(response)
    }

    fetchData()
  }, [])

  async function updateSearchTerm (searchTerm) {
    setSearchTerm(searchTerm)
    const results = await starWarsAPI.planets.search(searchTerm)
    setPlanets(results)
  }

  async function doSearch (searchTerm) {
    const results = await starWarsAPI.planets.search(searchTerm)
    setPlanets(results)
  }

  return (
        <Container>
          <SearchBar searchTerm={searchTerm} onChange={updateSearchTerm} onSubmit={doSearch} />
          { !planets
            ? (
                'Loading'
              )
            : (
                planets.map((planet, index) => (
              <Planet key={index} {...planet}/>
                ))
              )}
        </Container>
  )
}

function Planet (props) {
  console.log(props)
  return (
        <Card style={{ width: '14rem', margin: '1rem', display: 'inline-block' }}>
          <Card.Body >
            <Card.Title>
              {props.name}
            </Card.Title>
            <Card.Text>
                Climate: {props.climate} <br/>
                Terrain: {props.terrain} <br/>
                Diameter: {props.diameter}km <br/>
                Rotation Period: {props.rotation_period} hours<br/>
                Orbital Period: {props.orbital_period} days<br/>
                Population: {props.population}<br/>
            </Card.Text>
          </Card.Body>
        </Card>
  )
}
