const initialState = {
    tools: [
        {
            id: 1,
            name: "Settings",
            icon: "settings",
            items: [
                { id: 1, name: "Login", icon: "login" },
                { id: 2, name: "Account", icon: "account" },
                { id: 3, name: "Security", icon: "key" },
                { id: 4, name: "Language", icon: "flag" },
                { id: 5, name: "Theme", icon: "theme" },
            ]
        },
        {
            id: 2,
            name: "Components",
            icon: "view_quilt",
            items: [
                { id: 1, name: "Button", icon: "button" },
                { id: 2, name: "Bar", icon: "bar" },
                { id: 3, name: "Toogle", icon: "toogle" },
            ]
        },
        {
            id: 3,
            name: "Library",
            icon: "folder_open",
            items: [
                { id: 1, name: "A", icon: "light" },
                { id: 2, name: "AB", icon: "door" },
                { id: 3, name: "ABC", icon: "burguer" },
                { id: 4, name: "ABCD", icon: "burguer1" },
                { id: 5, name: "ABCDE", icon: "burguer2" },
            ]
        }
    ],
    selectedToolItems: [],
    draggedItem: { itemId: 1 },
};
function reducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'TOOL_SELECTED':
            newState = {
                ...state,
                selectedToolItems: [...action.payload]
            };
            break;
        default: ;
    }
    return newState;
}
export { reducer, initialState };