import React from "react";
import {
    Link,
    NavLink,
    useRouteMatch as match,
    withRouter,
} from "react-router-dom";
import Header from "../../../layout/admin/Header";
import Menu from "../../../layout/admin/Menu";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { showToastSuccess } from "../../../../helpers/admin/toastNotify";
import { API_URL } from "../../../../helpers/admin/urlCallAxios";
import axios from "axios";

export default class ListCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        const url = `${API_URL}/api/categories`;

        axios.get(url, { withCredentials: true }).then((res) => {
            this.setState({
                categories: res.data,
            });
        });
    }
    render() {
        return (
            <>
                <ToastContainer />
                <Header />
                <Menu />
                <div className="content-wrapper" style={{ minHeight: "700px" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            Danh sách loại sản phẩm
                                        </h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <div className="row col-md">
                                            <NavLink to="/admin/categories/create">
                                                <button
                                                    type="button"
                                                    className="btn btn-success btn-lg">
                                                    Thêm loại sản phẩm
                                                </button>
                                            </NavLink>
                                        </div>
                                        <table className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Loại sản phẩm</th>
                                                    <th className="table-edit"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.categories.map(
                                                    (record, index) => (
                                                        <tr>
                                                            <td>
                                                                {
                                                                    record.categoryName
                                                                }
                                                            </td>

                                                            <td className="table-edit">
                                                                <NavLink
                                                                    to={
                                                                        "editcategory/" +
                                                                        record.categoryId
                                                                    }>
                                                                    <i class="fas fa-edit text-success">
                                                                        {" "}
                                                                    </i>
                                                                </NavLink>
                                                                <NavLink
                                                                    to={
                                                                        "deleteCategory/" +
                                                                        record.id
                                                                    }>
                                                                    <i class="fas fa-trash-alt text-dark"></i>
                                                                </NavLink>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                </div>
            </>
        );
    }
}
