export const initColumn = {
    droppableId: "",
    title: "",
    isDropDisabled: false,
    isRenderClone: false,
    currentPlayIndex: 0,
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
    save: {
        currentPlayIndex: 0,
        currentPlaylistIndex: 0,
        playlist: [],
    }
}