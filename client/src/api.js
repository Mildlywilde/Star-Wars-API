import axios from 'axios'

const root = 'http://localhost:9000/sw'

class APIRoute {
  constructor (route, dataType) {
    this.route = `${root}/${route}`
    this.dataType = dataType
  }

  get = async () => {
    const response = await axios.get(this.route)
    // convert to person class here
    return response.data
  }

  search = async (searchTerm) => {
    const response = await axios.get(`${this.route}`, { params: { search: searchTerm } })
    return response.data
  }
}

class StarWarsAPI {
  people = new APIRoute('people', '')
  planets = new APIRoute('planets', '')
  vehicles = new APIRoute('vehicles', '')
  starships = new APIRoute('starships', '')
  species = new APIRoute('species', '')
  films = new APIRoute('films', '')
}

export const starWarsAPI = new StarWarsAPI()
