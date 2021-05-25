import React, { useState, FormEvent } from "react";
import { AuthPageActions } from '../../actions';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();
    let history = useHistory();

    const authSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // login: admin;   password: superuser
        if (login === 'admin' && password === 'superuser') {
            localStorage.setItem('isAuth', 'true');
            dispatch(AuthPageActions.authLogin(login, password))
            history.push("/");
            // location.reload();
        } else {
            console.log('Не верно введенные данные');
        }
    }

    return (
        <div className="auth">
            <h1 className="display-4 text-center auth__title">Авторизация</h1>
            <form className="auth__form" onSubmit={authSubmit}>
                <div className="mb-4">
                    <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className="form-control" placeholder="Логин: admin" />
                </div>

                <div className="mb-4">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Пароль: superuser" />
                </div>
                
                <button type="submit" className="btn btn-primary">Войти</button>
            </form>
        </div>
    );
};

export default Auth