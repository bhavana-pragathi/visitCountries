import {
  Div,
  Li,
  Image,
  NameRemove,
  Name,
  RemoveButton,
} from './styledComponents'

const VisitedCountriesItem = props => {
  const {visitedDetails, onRemove} = props
  const {id, name, imageUrl} = visitedDetails
  const onClickButton = () => {
    onRemove(id)
  }
  return (
    <Div>
      <Li>
        <Image src={imageUrl} alt="thumbnail" />
        <NameRemove>
          <Name>{name}</Name>
          <RemoveButton onClick={onClickButton}>Remove</RemoveButton>
        </NameRemove>
      </Li>
    </Div>
  )
}

export default VisitedCountriesItem
