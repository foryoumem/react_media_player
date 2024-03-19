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
        nonPlaylist: {
            droppableId: "view",
            title: "Non-playlist media",
            isDropDisabled: false,
            isRenderClone: false,
            list: [],
        },
        playlist: [],
    }
}