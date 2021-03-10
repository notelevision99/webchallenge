import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../service/LoginService';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: '',
            address: '',
            error: '',
        };
        this.login = this.login.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
    }
    login(e) {
        e.preventDefault();
        const { username, password, email, phone, address } = this.state;
        const formSignUp = {
            userName: username,
            password: password,
            email: email,
            phoneNumber: phone,
            address: address,
        };
        AuthService.signUp(formSignUp).then((res) => this.setState({ error: res.data.message }));
    }
    handleUsername(e) {
        this.setState({ username: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    handlePhone(e) {
        this.setState({ phone: e.target.value });
    }

    handleEmail(e) {
        this.setState({ email: e.target.value });
    }

    handleAddress(e) {
        this.setState({ address: e.target.value });
    }

    render() {
        const error = this.state.error;
        return (
            <div className='login-page'>
                <div className='formLogin'>
                    <div className='form-login-title'>Đăng Kí Tài Khoản</div>
                    <form onSubmit={this.login}>
                        <div className='input-group'>
                            <input type='text' id='username' name='username' onChange={this.handleUsername} required />
                            <label for='username'>Username</label>
                        </div>

                        <div className='input-group'>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                onChange={this.handlePassword}
                                required
                            />
                            <label for='password'>Password</label>
                        </div>

                        <div className='input-group'>
                            <input type='phone' id='phone' name='phone' onChange={this.handlePhone} required />
                            <label for='phone'>Số điện thoại</label>
                        </div>

                        <div className='input-group'>
                            <input type='mail' id='email' name='email' onChange={this.handleEmail} required />
                            <label for='email'>Email</label>
                        </div>

                        <div className='input-group'>
                            <input type='text' id='address' name='address' onChange={this.handleAddress} required />
                            <label for='address'>Địa chỉ</label>
                        </div>
                        <button name='submit'>Đăng kí</button>
                        {error !== '' && <p className='error'>{error}</p>}
                        <NavLink to='/login'>Đăng nhập tài khoản</NavLink>
                    </form>
                </div>
            </div>
        );
    }
}
