import React, { useEffect, useState } from 'react'
import { starWarsAPI } from '../api'
import { SearchBar } from '../components/SearchBar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export function Vehicles () {
  const [vehicles, setVehicles] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await starWarsAPI.vehicles.get()
      setVehicles(response)
    }

    fetchData()
  }, [])

  async function updateSearchTerm (searchTerm) {
    setSearchTerm(searchTerm)
    const results = await starWarsAPI.vehicles.search(searchTerm)
    setVehicles(results)
  }

  async function doSearch (searchTerm) {
    const results = await starWarsAPI.vehicles.search(searchTerm)
    setVehicles(results)
  }

  return (
        <Container>
          <SearchBar searchTerm={searchTerm} onChange={updateSearchTerm} onSubmit={doSearch} />
          { !vehicles
            ? (
                'Loading'
              )
            : (
                vehicles.map((vehicle, index) => (
              <Vehicle key={index} {...vehicle}/>
                ))
              )}
        </Container>
  )
}

function Vehicle (props) {
  console.log(props)
  return (
        <Card style={{ width: '14rem', margin: '1rem', display: 'inline-block' }}>
          <Card.Body >
            <Card.Title>
              {props.name}
            </Card.Title>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
  )
}
