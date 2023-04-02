import React, { useEffect, useState } from 'react'
import { starWarsAPI } from '../api'
import { SearchBar } from '../components/SearchBar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export function Films () {
  const [films, setFilms] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await starWarsAPI.films.get()
      setFilms(response)
    }

    fetchData()
  }, [])

  async function updateSearchTerm (searchTerm) {
    setSearchTerm(searchTerm)
    const results = await starWarsAPI.films.search(searchTerm)
    setFilms(results)
  }

  async function doSearch (searchTerm) {
    const results = await starWarsAPI.films.search(searchTerm)
    setFilms(results)
  }

  return (
        <Container>
          <SearchBar searchTerm={searchTerm} onChange={updateSearchTerm} onSubmit={doSearch} />
          { !films
            ? (
                'Loading'
              )
            : (
                films.map((film, index) => (
              <Film key={index} {...film}/>
                ))
              )}
        </Container>
  )
}

function Film (props) {
  console.log(props)
  return (
        <Card style={{ width: '14rem', margin: '1rem', display: 'inline-block' }}>
          <Card.Body >
            <Card.Title>
              {props.title}
            </Card.Title>
            <Card.Text>

            </Card.Text>
          </Card.Body>
        </Card>
  )
}
