import React, { useEffect, useState } from 'react'
import { starWarsAPI } from '../api'
import { SearchBar } from '../components/SearchBar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export function Starships () {
  const [starships, setStarships] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await starWarsAPI.starships.get()
      setStarships(response)
    }

    fetchData()
  }, [])

  async function updateSearchTerm (searchTerm) {
    setSearchTerm(searchTerm)
    const results = await starWarsAPI.starships.search(searchTerm)
    setStarships(results)
  }

  async function doSearch (searchTerm) {
    const results = await starWarsAPI.starships.search(searchTerm)
    setStarships(results)
  }

  return (
        <Container>
          <SearchBar searchTerm={searchTerm} onChange={updateSearchTerm} onSubmit={doSearch} />
          { !starships
            ? (
                'Loading'
              )
            : (
                starships.map((starship, index) => (
              <Starship key={index} {...starship}/>
                ))
              )}
        </Container>
  )
}

function Starship (props) {
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
