import {Li, Country, VisitButton, Visited} from './styledComponents'

const CountriesItem = props => {
  const {countriesDetails, onVisit} = props
  const {name, isVisited} = countriesDetails
  const onClickButton = () => {
    onVisit(countriesDetails)
  }
  return (
    <Li>
      <Country>{name}</Country>
      {isVisited ? (
        <Visited>Visited</Visited>
      ) : (
        <VisitButton type="button" onClick={onClickButton}>
          Visit
        </VisitButton>
      )}
    </Li>
  )
}

export default CountriesItem
