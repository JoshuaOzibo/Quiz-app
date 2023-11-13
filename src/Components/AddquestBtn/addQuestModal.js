import React from 'react';
import classes from './addQuestmodal.module.css';
import ReactDom from 'react-dom';

const Modal = (props) => {
    const Overlay =(props) =>{
        return <div onClick={props.ClickOverlay} className={classes.Overlay}></div>
    }
    const Backdrop =(props) =>{
        return <div className={classes.Backdrop}>
            <div>{props.children}</div>
        </div>
    }
    const getIdOfBackGround = document.getElementById('Overlay');
    
  return (
    <>
        {ReactDom.createPortal(<Overlay ClickOverlay={props.ClickOverlay} />, getIdOfBackGround)}
        {ReactDom.createPortal(<Backdrop >{props.children}</Backdrop>, getIdOfBackGround)}
    </>
  )
}

export default Modal