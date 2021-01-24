import React from 'react'
import { Link, NavLink, withRouter } from "react-router-dom";
import { API_URL } from "../../../helpers/admin/urlCallAxios";
import axios from "axios";
import Cookies from "js-cookie";

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            userName: '',
            redirectToEditUser: false
        }
       

    }
    handleLogout = (e) => {
        e.preventDefault()
        const urlToSignOut = `${API_URL}/api/auth/logout`
        axios.post(urlToSignOut, null, { withCredentials: true }).then(() => {
            Cookies.remove('usrCks')
            Cookies.remove('Usr_I')
            Cookies.remove('Usr_N')
            window.location.reload();
        }

        )

    }
    componentDidMount() {
        this.setState({
            userName: Cookies.get("Usr_N"),
            userId: Cookies.get('Usr_I')
        })
    }

    
    render() {
        const idCurrentUser = Cookies.get('Usr_I')
        
       
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ position: "fixed" }}>
                {/* Brand Logo */}
                <Link to="/">
                    <a className="brand-link">

                        <span className="brand-text font-weight-light">Industry Company</span>
                    </a>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">

                        <Link to={"/editusers/" + idCurrentUser}>
                            <div className="info">
                                <a onClick={this.handleEditCurrentUser} className="d-block">Xin chào <b>{this.state.userName}</b>
                                </a>
                                <button onClick={this.handleLogout} className='btn-danger'>Logout</button>
                            </div>
                        </Link>

                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
                            <li className="nav-item has-treeview menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Trang chủ
                                         <i className="right fas fa-angle-left" />
                                    </p>
                                </a>

                            </li>
                            <li className="nav-item">
                                <Link to="/products">
                                    <a className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>
                                            Quản lí sản phẩm
                                </p>

                                    </a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/categories">
                                    <a className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>
                                            Quản lí danh mục
                                </p>

                                    </a>
                                </Link>

                            </li>

                            <li className="nav-item">
                                <Link to="/users">
                                    <a className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>
                                            Quản lí tài khoản admin
                                </p>

                                    </a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/admin/banners">
                                    <a className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>
                                            Quản lí banners
                                </p>

                                    </a>
                                </Link>

                            </li>


                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>

        )
    }
}
export default withRouter(Menu)