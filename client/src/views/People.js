import React, { useEffect, useState } from 'react'
import { starWarsAPI } from '../api'
import { SearchBar } from '../components/SearchBar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export function People () {
  const [people, setPeople] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await starWarsAPI.people.get()
      setPeople(response)
    }

    fetchData()
  }, [])

  async function updateSearchTerm (searchTerm) {
    setSearchTerm(searchTerm)
    const results = await starWarsAPI.people.search(searchTerm)
    setPeople(results)
  }

  async function doSearch (searchTerm) {
    const results = await starWarsAPI.people.search(searchTerm)
    setPeople(results)
  }

  return (
      <Container>
        <SearchBar searchTerm={searchTerm} onChange={updateSearchTerm} onSubmit={doSearch} />
        { !people
          ? (
              'Loading'
            )
          : (
              people.map((person, index) => (
            <Person key={index} {...person}/>
              ))
            )}
      </Container>
  )
}

function Person (props) {
  console.log(props)
  return (
      <Card style={{ width: '14rem', margin: '1rem', display: 'inline-block' }}>
        <Card.Body >
          <Card.Title>
            {props.name}
          </Card.Title>
          <Card.Text>
            Height: {props.height}cm <br/>
            Weight: {props.mass}kg <br/>
            Birth Year: {props.birth_year}<br/>
            Eye Color: {props.eye_color}<br/>
            Gender: {props.gender}<br/>
            Hair Color: {props.hair_color}<br/>
            Skin Color: {props.skin_color}<br/>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}
