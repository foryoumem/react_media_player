import { onLoadPlaylist } from "../app/storage"

export const initColumn = {
    droppableId: "play",
    type: "explorer",
    title: "Playlist",
    isDropDisabled: false,
    isRenderClone: false,
    currentPlayMediaIndex: 0,
    list: [],
}

export const init = {
    main: {
        droppableId: "main",
        type: "explorer",
        title: "Loaded media",
        isDropDisabled: true,
        isRenderClone: true,
        list: [],
    },
    select: {
        currentPlayMediaIndex: 0,
        currentIndex: 0,
        options: onLoadPlaylist(),
    }
}