import React from "react";
import s from "./AltMessage.module.css";


type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

type MessagePropsType = {
    altmessageData: MessageDataType
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>

            <div className={s.content}>
                <div className={s.name}>{props.altmessageData.name}</div>
                <div className={s.text}>{props.altmessageData.message}</div>
                <div className={s.time}>{props.altmessageData.time}</div>
            </div>
            <img className={s.img} alt='Текст' src={props.altmessageData.avatar}/>
            <div className={s.clear}></div>

        </div>
    )
}

export default Message;