import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { fetchMedia, onChangeMedialist } from "../features/mediaSlice"
import { DragDropContext } from "react-beautiful-dnd"

import DragDropList from "../component/DragDropList"

export default function Root() {
    console.log("Root Component 실행")

    const medialist = useSelector(state => state.media.value)
    const playlist = useSelector(state => state.play.value)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Dependency array의 요소 변경으로 useEffect 실행")
        dispatch(fetchMedia())

        return () => {
            console.log("useEffect return: Component의 Unmount 또는 Update로 지워질 때 실행")
        }
    }, [])

    const handleDragEnd = (result) => {
        if (!result.destination) return

        const { source, destination } = result
        const newItems = Array.from(medialist)
        const [removed] = newItems.splice(source.index, 1)
        newItems.splice(destination.index, 0, removed)

        dispatch(onChangeMedialist(newItems))
    };

    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <div>
                    <div>
                        <div>Medialist</div>
                        <DragDropList data={medialist} droppableId="medialist" />
                    </div>       
                </div>
            </DragDropContext>
        </div>
    )
}

