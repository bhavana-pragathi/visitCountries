import {Component} from 'react'
import CountriesItem from '../CountriesItem'
import VisitedCountriesItem from '../VisitedCountriesItem'
import {
  MainDiv,
  Heading,
  Ul1,
  Ul2,
  VisitDiv,
  VisitedDiv,
  NoCountriesPara,
} from './styledComponents'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class VisitCountries extends Component {
  state = {visitedData: initialCountriesList, isVisited: false}

  onVisit = id => {
    const {visitedData} = this.state
    const visit = visitedData.map(eachCountry => {
      if (eachCountry.id === id) {
        const updatedList = {...eachCountry, isVisited: !eachCountry.isVisited}
        return updatedList
      }
      return eachCountry
    })
    this.setState({visitedData: visit})
  }

  onRemove = id => {
    const {visitedData} = this.state
    const filteredData = visitedData.filter(eachItem => eachItem.id !== id)
    this.setState({
      visitedData: filteredData,
      isVisited: true,
    })
  }

  renderNoCountries = () => (
    <VisitedDiv>
      <NoCountriesPara>No Countries Visited Yet</NoCountriesPara>
    </VisitedDiv>
  )

  render() {
    const {visitedData, isVisited} = this.state
    const updatedList = visitedData.filter(each => each.isVisited === true)
    return (
      <MainDiv>
        <Heading>Countries</Heading>
        <VisitDiv>
          <Ul1>
            {visitedData.map(eachItem => (
              <CountriesItem
                key={eachItem.id}
                countriesDetails={eachItem}
                onVisit={this.onVisit}
              />
            ))}
          </Ul1>
        </VisitDiv>
        <Heading>Visited Countries</Heading>
        {updatedList.length === 0 ? (
          this.renderNoCountries()
        ) : (
          <VisitedDiv>
            <Ul2>
              {updatedList.map(eachItem => (
                <VisitedCountriesItem
                  key={eachItem.id}
                  visitedDetails={eachItem}
                  onRemove={this.onRemove}
                  isVisited={isVisited}
                />
              ))}
            </Ul2>
          </VisitedDiv>
        )}
      </MainDiv>
    )
  }
}

export default VisitCountries
