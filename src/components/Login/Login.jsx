import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.login}>
            <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const LoginForm = (props) => {
    return (
            <form className={s.login_form} onSubmit = {props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name="email" component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name="password" type="password" component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name="rememberMe" description={"remember me"} component={Input} />
                </div>
                <div>
                    <button>Sign in</button>
                </div>
                {
                    props.error &&
                    <div className={s.login_form_error}>
                        {props.error}
                    </div>
                }
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);