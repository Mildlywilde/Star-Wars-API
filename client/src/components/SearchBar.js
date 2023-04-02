import Form from 'react-bootstrap/Form'
import React from 'react'

export const SearchBar = ({ searchTerm, onChange, onSubmit }) => {
  return (
    <Form.Control
      style = {{ width: '30%', margin: '20px auto' }}
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
      onSubmit={(e) => onSubmit(e.target.value)}
    />
  )
}
