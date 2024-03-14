import { Draggable, Droppable } from "react-beautiful-dnd"
import styled from "styled-components"

const List = styled.div`
    display: flex;
    gap: 8px;
`

const Item = styled.div`
    padding: 8px;
    margin-bottom: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
`


const DNDMedialist = ({data, idDropDisabled}) => {

    return (
        <Droppable droppableId="medialist" isDropDisabled={idDropDisabled}>
            {
                (provided) => (
                    <List ref={provided.innerRef} {...provided.droppableProps}>
                        {
                            data.map((iter, index) => (
                                <Draggable key={iter.id} draggableId={iter.id} index={index}>
                                    {
                                        (provided) => (
                                            <Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {iter.title}
                                            </Item>
                                        )
                                    }

                                </Draggable>
                            ))
                        }
                        {provided.placeholder}
                    </List>
                )
            }
        </Droppable>
    )
}


export default DNDMedialist