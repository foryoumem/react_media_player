import { onLoadPlaylist } from "../app/storage"

export const initColumn = {
    droppableId: "play",
    title: "Playlist",
    isDropDisabled: false,
    isRenderClone: false,
    currentPlayMediaIndex: 0,
    list: [],
}

export const init = {
    main: {
        droppableId: "main",
        title: "Loaded media",
        isDropDisabled: true,
        isRenderClone: true,
        list: [],
    },
    play: {
        droppableId: "play",
        title: "Playlist",
        isDropDisabled: false,
        isRenderClone: false,
        list: [],
    },
    select: {
        currentPlayMediaIndex: 0,
        currentIndex: 0,
        options: onLoadPlaylist(),
    }
}