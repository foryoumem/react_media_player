import { Droppable, Draggable } from "react-beautiful-dnd"

const DragDropList = ({ data, droppableId }) => {

  return (
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
  )
}


export default DragDropList