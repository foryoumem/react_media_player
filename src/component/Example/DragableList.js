import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components"

const ListTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`

const ListItem = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`
const List = styled.div`
  flex: 1;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`


const DragableList = ({ title, data, draggableId }) => {
  return (
    <List>
      
    </List>
  )
}


export default DragableList