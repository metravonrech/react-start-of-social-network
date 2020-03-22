import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const Dialogs = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>

    let dialogs = props.dialogsPage.dialogs.map(elem => <DialogItem name={elem.name} key={elem.id} id={elem.id}/>);
    let messages = props.dialogsPage.messages.map(elem => <Message message={elem.message} key={elem.id}/>)

    const addMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogs}
            </div>
            <div className={s.message_items}>
                <AddMessageFormRedux onSubmit={addMessage}/>
                {messages}
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form className={s.message_addition} onSubmit={props.handleSubmit}>
            <Field
                name={"newMessageText"}
                placeholder={"Enter your message"}
                component={Textarea}
                validate={[required, maxLength10]}
            />
            <button>Send message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;