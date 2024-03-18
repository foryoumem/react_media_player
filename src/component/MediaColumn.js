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
margin: 5px;
width: 25vw;
`

const ItemList = styled.div`
flex-grow: 1;
transition: background-color ease 0.2s;
background-color: ${props => props.$isDraggingOver ? "palevioletred" : "white"};
`

const Title = styled.h2`
text-align: center;
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


const MediaColumn = ({media}) => {

    return (
        <Container>
            <Title>{media.title}</Title>
            <Droppable
                droppableId={media.droppableId}
                type="COLUMN"
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


/*


{(provided, snapshot) => (
                        <ItemList
                        ref={provided.innerRef} {...provided.droppableProps}
                        >
                            {media.list.map((item, index) => {
                                const useClone = item.id === snapshot.draggingFromThisWith
                                return (
                                    <React.Fragment key=item.id>
    
                                    </React.Fragment>
                                )
                            })}
                        </ItemList>
                    )}


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


                    */