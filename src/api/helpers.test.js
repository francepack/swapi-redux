import { makeFetch } from './api';
import { enzyme, shallow } from 'enzyme';
import React from 'react';
import * as helpers from './helpers';

let mockPerson;

describe.skip('helpers', () => {
  describe('constructPeople', () => {
    beforeEach(() => {
      let mockPerson = { results: [{
        birth_year: "1987",
        eye_color: "blue",
        films: ["https://swapi.co/api/films/1/", "https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/7/"],
        gender: "male",
        hair_color: "blond",
        height: "172",
        homeworld: "https://swapi.co/api/planets/1/",
        name: "Luke Skywalker",
        skin_color: "fair",
        species: ["https://swapi.co/api/species/1/"],
        starships: ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
        vehicles: ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"] 
      }]}

      Date.now = jest.fn

      // jest.mock(helpers.addHomewold)
      // jest.mock(helpers.addSpecies)

      // helpers.addHomewold(mockPerson) = jest.fn(() => ({...mockPerson, homeworld: 'Tatooine'}))
      // helpers.addSpecies(mockPerson) = jest.fn(() => ({...mockPerson, species: 'Human'}))

      // helpers.addHomewold.mockImplementation()
    })
    it('should call addHomeworld', () => {
      // jest.mock(helpers.addHomewold)
      jest.mock(helpers.addSpecies)
      helpers.addHomeworld = jest.fn()
      helpers.constructPeople(mockPerson);
      expect(helpers.addHomeworld).toHaveBeenCalled()
    })
    it('should call addSpecies', () => {
      
    })
    it('should return the expected data', async () => {
      const expected = {
        name: 'Luke Skywalker', 
        category: 'person',
        species: 'Human', 
        homeworld: 'Tatooine', 
        population: 200000, 
        id: Date.now(),
        key: 'Luke Skywalker'
      }
      const result = await helpers.constructPeople(mockPerson);
      expect(result).toEqual(expected);
    })
    it('', () => {
      
    })
  })

  describe('constructPlanets', () => {
    it('', () => {
      
    })
  })

  describe('constructVehicles', () => {
    it('', () => {
      
    })
  })

  describe('addResidents', () => {
    it('', () => {
      
    })
  })

  describe('getResidents', () => {
    it('', () => {
      
    })
  })

  describe('addHomeworld', () => {
    it('should add a homeworld to a person object', () => {
      mockPerson = [{name: 'Luke'}]
      expected = {name: 'Luke', homeworld: 'Tatooine'}
    })
  })

  describe('addSpecies', () => {
    it('', () => {
      
    })
  })
})