
const SET_REPOS = "SET_REPOS"
const DELETE_REPO  = "DELETE_REPO"
const SET_FETCHING = "SET_FETCHING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const intialState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0
}

export default function reposReducer(state = intialState, action){
    switch(action.type){
        case SET_REPOS:
            return{
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        case DELETE_REPO:
                let temp_items = state.items.filter(el => el.id !== action.payload)
                return {
                    state,
                    items: temp_items
                }
        case SET_FETCHING:
            return{
                ...state,
                isFetching: action.payload
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        default: return state
    }
}

export const setRepos = (value) => {
    return {
        type: SET_REPOS,
        payload: value
}
}

export const deleteRepo = (value) =>{
    return{
        type: DELETE_REPO,
        payload: value
    }
}

export const setFetching = (bool) =>{
    return{
        type: SET_FETCHING,
        payload: bool
    }
}
export const setCurrentPage = (page) =>{
    return{
        type: SET_CURRENT_PAGE,
        payload: page
    }
}