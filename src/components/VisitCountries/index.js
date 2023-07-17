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
  NoCountriesHeading,
} from './styledComponents'

class VisitCountries extends Component {
  state = {isToggled: false, visitedData: []}

  onVisit = () => {
    const {initialCountriesList} = this.props
    const {id, name, imageUrl, isVisited} = initialCountriesList
    const updatedData = {id, name, imageUrl, isVisited}

    this.setState(prevState => ({
      isToggled: !prevState.isToggled,
      visitedData: [...prevState.visitedData, updatedData],
    }))
  }

  onRemove = id => {
    const {visitedData} = this.state
    const filteredData = visitedData.filter(eachItem => eachItem.id !== id)
    this.setState({visitedData: filteredData})
  }

  renderNoCountries = () => (
    <VisitedDiv>
      <NoCountriesHeading>No Countries Visited Yet!</NoCountriesHeading>
    </VisitedDiv>
  )

  render() {
    const {initialCountriesList} = this.props
    const {visitedData, isToggled} = this.state
    return (
      <MainDiv>
        <Heading>Countries</Heading>
        <VisitDiv>
          <Ul1>
            {initialCountriesList.map(eachItem => (
              <CountriesItem
                key={eachItem.id}
                countriesDetails={eachItem}
                onVisit={this.onVisit}
                isToggled={isToggled}
              />
            ))}
          </Ul1>
        </VisitDiv>
        <Heading>Visited Countries</Heading>
        {visitedData.length === 0 ? (
          this.renderNoCountries()
        ) : (
          <VisitedDiv>
            <Ul2>
              {visitedData.map(eachItem => (
                <VisitedCountriesItem
                  key={eachItem.id}
                  visitedDetails={eachItem}
                  onRemove={this.onRemove}
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
