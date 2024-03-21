import { initColumn } from "../features/initialExplorer"

const PLAYLIST = "playlist"

const parseStringify = (playlist) => {
    if (typeof playlist === "object") {
        return JSON.stringify(playlist)
    }

    return playlist
}

const parseJson = (playlist) => {
    if (typeof playlist === "string") {
        return JSON.parse(playlist)
    }

    return playlist
}

/*
객체({...})으로 된 Playlist를 받아서
Local Storage의 Playlist Key Array의 마지막 요소에 저장
Combobox로 관리하기 위해 중복되지 않는 ID도 설정
*/
export const appendPlaylist = (playlist) => {
    const current = onLoadPlaylist()
    const id = current.length ? current[current.length - 1].id + 1 : 0

    const list = [...current, {...parseJson(playlist), id: id}]
    localStorage.setItem(PLAYLIST, parseStringify(list))
}

/*
무조건 객체({...})으로 변환해서 반환
*/
export const onLoadPlaylist = () => {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === PLAYLIST)
            return JSON.parse(localStorage.getItem(PLAYLIST))
    }
    
    // Playlist가 Local Storage에 없을 경우
    const list = [{...initColumn, id: 0}]
    console.log("onLoadPlaylist")
    console.log(list)
    localStorage.setItem(PLAYLIST, parseStringify(list))
    return list
}

/*
Local Storage에 있는 Playlist Key Array에서
Combobox에서 선택한 특정 Playlist를 얻기
*/
export const onLoadPlaylistIndexOf = (index) => {
    const current = onLoadPlaylist()
    console.log(current)
    console.log("onLoad index", index)
    return current[index]
}

/*
Combobox에 새로운 Playlist가 추가됐으면 갱신
*/
export const onUpdatePlaylist = (playlist) => {
    const list = parseJson(playlist)
    localStorage.setItem(PLAYLIST, parseStringify(list))
}

/*
만약 재생 순서를 변경할 경우 Local Storage에도 갱신
*/
export const onUpdatePlaylistIndexOf = (index, playlist) =>{
    const current = onLoadPlaylist()
    current[index] = parseJson(playlist)
    localStorage.setItem(PLAYLIST, parseStringify(current))
}