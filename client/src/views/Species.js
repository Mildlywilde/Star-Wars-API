import React, { useEffect, useState } from 'react'
import { starWarsAPI } from '../api'
import { SearchBar } from '../components/SearchBar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export function Species () {
  const [species, setSpecies] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await starWarsAPI.species.get()
      setSpecies(response)
    }

    fetchData()
  }, [])

  async function updateSearchTerm (searchTerm) {
    setSearchTerm(searchTerm)
    const results = await starWarsAPI.species.search(searchTerm)
    setSpecies(results)
  }

  async function doSearch (searchTerm) {
    const results = await starWarsAPI.species.search(searchTerm)
    setSpecies(results)
  }

  return (
        <Container>
          <SearchBar searchTerm={searchTerm} onChange={updateSearchTerm} onSubmit={doSearch} />
          { !species
            ? (
                'Loading'
              )
            : (
                species.map((specie, index) => (
              <Specie key={index} {...specie}/>
                ))
              )}
        </Container>
  )
}

function Specie (props) {
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
