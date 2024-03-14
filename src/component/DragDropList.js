import styled from "styled-components"
import { Droppable, Draggable } from "react-beautiful-dnd"
import DragItem from "./DragItem"

const Container = styled.div`
margin: 8px;
border-radius: 2px;
border: 1px solid lightgrey;
display: plex;
flex-direction: column;
background-color: white;
`

const Title = styled.h2`
padding: 8px;
`

const List = styled.div`
padding: 8px;
flex-grow: 1;
min-height: 100px;
transition: background-color ease 0.2s;
background-color: white;
`

//${props => props.isDraggingOver ? "palevioletred" : "white"};

const DragDropList = ({ data, list, index }) => {
  console.log("Component: DragDropList")
  console.log("list: ", list)

  return (
    <Draggable draggableId={list.id} index={index} type={list.type}>
      {provided => (
        <Container ref={provided.innerRef} {...provided.dragHandleProps}
        {...provided.draggableProps}>
          <Title>{list.title}</Title>
          <Droppable droppableId={list.id} type="item">
            {(provided, snapshot) => (
              <List ref={provided.innerRef}
              {...provided.droppableProps}>
                {data.map((iter, index) => {
                  <DragItem key={iter.id} data={iter} index={index} type={`${list.type}_item`}/>
                })}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  )
}


export default DragDropList



/*
<Droppable droppableId={droppableId}>
{(provided) => (
  <ul {...provided.droppableProps} ref={provided.innerRef} style={{ listStyleType: 'none', padding: 0 }}>
    {data.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided) => (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{ userSelect: 'none', ...provided.draggableProps.style }}
          >
            {item.link}
          </li>
        )}
      </Draggable>
    ))}
    {provided.placeholder}
  </ul>
)}
</Droppable>
*/