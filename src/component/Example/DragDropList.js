import { Droppable, Draggable } from "react-beautiful-dnd"
import styled from "styled-components"

const ListTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

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


const DragDropList = ({ title, data, droppableId }) => {

  return (
    <>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            <ListTitle>{title}</ListTitle>
            {data.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <ListItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.title}
                  </ListItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </>
  )
}


export default DragDropList