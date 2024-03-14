import styled from "styled-components"
import MediaItem from "./MediaItem"
import { Droppable } from "react-beautiful-dnd"

const Container = styled.div`
display: flex;
flex-direction: column;
border: 1px solid lightgrey;
border-radius: 2px;
width: 250px;
`

const Title = styled.h2`
text-align: center;
`

const MediaColumn = ({data, type, title}) => {

    return (
        <Droppable droppableId={type}>
            {(provided) => (
                <Container ref={provided.innerRef} {...provided.droppableProps}>
                    <Title>{title}</Title>
                    {data.map((iter, index) => (
                        <MediaItem key={iter.id} data={iter} index={index} type={`${type}-item`} />
                    ))}
                    {provided.placeholder}
                </Container>
            )}
        </Droppable>
    )
}

export default MediaColumn