import { makeFetch } from '../api/api'

export const constructPeople = async (people) => {
  try {
    const peopleWithHomeworld = await addHomeworld(people);
    const peopleWithSpecies = await addSpecies(peopleWithHomeworld);
    const peopleObj = peopleWithSpecies.map(person => {
      return { 
        name: person.name, 
        category: 'person',
        species: person.species, 
        homeworld: person.homeworld, 
        population: person.population, 
        id: Date.now()
      }
    })
    return peopleObj
  } catch(error) {

  }
  
}

export const constructPlanets = async (planets) => {
  try {
    const planetsWithResidents = await addResidents(planets);
    const planetsObj = planetsWithResidents.map(planet => {
      return {
        category: 'planet', 
        name: planet.name, 
        terrain: planet.terrain, 
        population: planet.population, 
        climate: planet.climate, 
        residents: planet.residents,  
        id: Date.now()
      }
    })
    return planetsObj;
  } catch(error) {

  }

}

export const constructVehicles = (vehicles) => {
  const vehicleObj = vehicles.results.map(vehicle => {
    return { 
      category: 'vehicle', 
      name: vehicle.name, 
      model: vehicle.model, 
      class: vehicle.vehicle_class, 
      passengers: vehicle.passengers, 
      id: Date.now()
    }
  })
  return vehicleObj;
}

const addResidents = (planets) => {
  const addedResidents = planets.results.map(planet => {
    return getResidents(planet)
      .then(result => ({...planet, residents: result }))
  })
  return Promise.all(addedResidents)
}

const getResidents = (planet) => {
  const residents = planet.residents.map(resident => {
    return makeFetch(resident)
      .then(result => (result.name))
  })
  return Promise.all(residents)
}

const addHomeworld = (people) => {
  const addedHomeworld = people.results.map(person => {
    return makeFetch(person.homeworld)
      .then(result => ({...person, homeworld: result.name, population: result.population}))
  })
  return Promise.all(addedHomeworld)
}

const addSpecies = (people) => {
  const addedSpecies = people.map(person => {
    return makeFetch(person.species)
      .then(result => ({...person, species: result.name, category:'person'}))
  })
  return Promise.all(addedSpecies)  
}