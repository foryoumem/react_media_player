import styled from "styled-components"
import MediaItem from "./MediaItem"
import { Droppable } from "react-beautiful-dnd"

const Container = styled.div`
display: flex;
flex-direction: column;
border: 1px solid lightgrey;
border-radius: 2px;
`

const ItemList = styled.div`
flex-grow: 1;
border: 1px solid lightgrey;
border-radius: 2px;
transition: background-color ease 0.2s;
background-color: ${props => props.$isDraggingOver ? "palevioletred" : "white"};
width: 250px;
min-height: 100vh;
`

const Title = styled.h2`
text-align: center;
`

const MediaColumn = ({media}) => {

    return (
        <Container>
            <Title>{media.title}</Title>
            <Droppable
                droppableId={media.droppableId}
                type={"explorer"}
                isDropDisabled={media.isDropDisabled}
            >
                {(provided, snapshot) => (
                    <ItemList ref={provided.innerRef} {...provided.droppableProps}
                        $isDraggingOver={snapshot.isDraggingOver}>
                        {media.list.map((iter, index) => (
                            <MediaItem key={iter.id} data={iter} index={index} />
                        ))}
                        {provided.placeholder}
                    </ItemList>
                )}
            </Droppable>
        </Container>
    )
}

const MainColumn = ({media}) => {

    return (
        <Container>
            <Title>media.title</Title>
            <Droppable
            droppableId={media.droppableId}
            type="COLUMN"
            isDropDisabled={media.isDropDisabled}
            renderClone={null} 
            >

            </Droppable>
        </Container>
    )
}

export default MediaColumn