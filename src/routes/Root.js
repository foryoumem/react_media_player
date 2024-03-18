import { useEffect } from "react"
import { fetchMedia } from "../features/mediaSlice"
import { useDispatch } from "react-redux"

import MediaExplorer from "../component/MediaExplorer"

export default function Root() {
    console.log("Root Component 실행")

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Dependency array의 요소 변경으로 useEffect 실행")
        dispatch(fetchMedia())

        return () => {
            console.log("useEffect return: Component의 Unmount 또는 Update로 지워질 때 실행")
        }
    }, [])


    return (
        <div>
            <MediaExplorer />
        </div>
    )
}


/*
redux 계속 사용해서 구현해보는데, << thunk 계속 사용

서버는 JSON Server 사용하고.

drag drop 은 계속 라이브러리 사용하고, 나중에 결과물 다 만들고 직접 만들어보던가.

styled component 적용

option: type script 사용하고
*/