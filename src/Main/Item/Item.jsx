import React from 'react'
import styles from "./Item.module.css"
import { useDispatch } from 'react-redux';
import { deleteRepo } from '../../Redux/reposReducer';

export default function Item(props) {

    const dispatch = useDispatch()

    const deleteRepoHandler = (value) =>{
        dispatch(deleteRepo(value))
    }

    return (
        <div className = {styles.item}>
            <div>Название репозитория: {props.repo.name}</div>
            <div>id: {props.repo.id}</div>
            <div></div>
            <div>
                <a className = {styles.link} href = {props.repo.html_url}>Url: {props.repo.html_url}</a>
            </div>
            <button className = {styles.button} onClick = {() => deleteRepoHandler(props.repo.id)}>Delete</button>
        </div>
    )
}
