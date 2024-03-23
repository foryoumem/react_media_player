import styled from "styled-components"
import MediaItem, { MediaItemCloneLayout } from "./MediaItem"
import { Droppable } from "react-beautiful-dnd"

const RenderCloneContainer = styled.div`
display: flex;
border: 1px solid lightgray;
border-radius: 2px;
margin: 4px;
padding: 8px;
background: yellow;
`

const Container = styled.div`
display: flex;
flex-direction: column;
border: 1px solid lightgrey;
border-radius: 2px;
height: 100%;
`

const ItemList = styled.div`
flex-grow: 1;
transition: background-color ease 0.2s;
background-color: ${props => props.$isDraggingOver ? "palevioletred" : "white"};
`

const Title = styled.div`
font-size: xx-large;
text-align: center;
background-color: silver;
padding-bottom: 4px;
`

const renderClone = (items) => (provided, snapshot, rubric) => {
    const item = items[rubric.source.index]
    return (
        <RenderCloneContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
        >
            <MediaItemCloneLayout data={item}/>
        </RenderCloneContainer>
    )
}

const onClickMedia = (media, item) => {
    
}

const MediaColumn = ({media}) => {

    return (
        <Container>
            <Title>{media.title}</Title>
            <Droppable
                droppableId={media.droppableId}
                type={media.type}
                isDropDisabled={media.isDropDisabled}
                renderClone={media.isRenderClone ? renderClone(media.list) : null}
            >
                {(provided, snapshot) => (
                    <ItemList
                        ref={provided.innerRef}
                        $isDraggingOver={snapshot.isDraggingOver}
                    >
                        {media.list.map((item, index) => {
                            const useClone = item.id === snapshot.draggingFromThisWith
                            return (
                                <MediaItem
                                    key={item.id}
                                    data={item}
                                    index={index}
                                    useClone={media.isRenderClone ? useClone : false}
                                    type={media.type}
                                    isClicked={false}
                                />
                            )
                        })}
                        {provided.placeholder}
                    </ItemList>
                )}
            </Droppable>
        </Container>
    )
}

export default MediaColumn
