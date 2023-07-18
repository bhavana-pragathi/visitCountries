import {Li, Country, VisitButton, Visited} from './styledComponents'

const CountriesItem = props => {
  const {countriesDetails, onVisit} = props
  const {id, name, isVisited} = countriesDetails
  const onClickButton = () => {
    onVisit(id)
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
