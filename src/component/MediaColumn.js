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
border: 1px solid lightgrey;
border-radius: 2px;
width: 250px;
`

const Title = styled.h2`
text-align: center;
`

const MediaColumn = ({data, type, title}) => {

    return (
        <Container>
            <Title>{title}</Title>
            <Droppable droppableId={type} type={"explorer"}>
                {(provided) => (
                    <ItemList ref={provided.innerRef} {...provided.droppableProps}>
                        {data.map((iter, index) => (
                            <MediaItem key={iter.id} data={iter} index={index} />
                        ))}
                        {provided.placeholder}
                    </ItemList>
                )}
            </Droppable>
        </Container>  
    )
}

export default MediaColumn