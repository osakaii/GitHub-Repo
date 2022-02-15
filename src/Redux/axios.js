import axios from "axios";
import { setFetching, setRepos } from "./reposReducer";

export const getRepos = (searchQuery = "stars:%3E1",currentPage,perPage) =>{
    return async (dispatch) =>{
        searchQuery === ""? searchQuery = "stars:%3E1":
        dispatch(setFetching(true))
        const response = await axios(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
        dispatch(setRepos(response.data))
    }
}