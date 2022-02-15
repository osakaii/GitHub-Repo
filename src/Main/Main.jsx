import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from './Item/Item'
import styles from "./Main.module.css"
import { getRepos } from '../Redux/axios';
import { setCurrentPage } from '../Redux/reposReducer';

export default function Main() {

    const [searchInputValue,setSearchInputValue] = useState('')

    const dispatch = useDispatch()

    const items  = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage  = useSelector(state => state.repos.currentPage)
    const perPage  = useSelector(state => state.repos.perPage)
    const totalCount  = useSelector(state => state.repos.totalCount)
    const pagesCount = Math.ceil(totalCount/perPage)

    const SearchRepos = (event) =>{
        event.preventDefault()
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchInputValue, currentPage, perPage))
    }

    const pages = [1,2,3,4,5]

    useEffect(() => {
        dispatch(getRepos(searchInputValue, currentPage, perPage))
    }, [currentPage])
    return (

        <div className={styles.main}>

        <form onSubmit={e =>SearchRepos(e)} className={styles.form}>
            <input  
                className={styles.input} 
                value={searchInputValue} 
                onChange={e => setSearchInputValue(e.target.value)} 
                type="text" 
                placeholder='Search' />
            <button className={styles.button}>Search</button>
        </form>
            {
                isFetching === false ?
                items.map((el,index)=>{
                    return(
                        <Item repo = {el} key = {index}/>
                    )

                })
                :
                    <div className={styles.animation}></div>
            }
            <div className={styles.pages}>   
                {
                    pages.map((el,index)=>{
                        return(
                            <div 
                                onClick={()=>dispatch(setCurrentPage(el))} 
                                key={index} 
                                className={currentPage === el? styles.currentPage : styles.page}>{el}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
