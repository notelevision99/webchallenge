import React, { Component } from "react";

import ListCategories from "./components/atom/admin/categories/ListCategories";
import EditCategories from "./components/atom/admin/categories/EditCategories";
import Login from "./components/atom/admin/auth/Login";
import ListAdmins from "./components/atom/admin/users/ListAdmins";
import CreateAdmin from "./components/atom/admin/users/CreateAdmin";
import "./App.css";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import Product from "./components/atom/admin/Products/Product";
import { Switch, Redirect } from "react-router-dom";
import Home from "./components/atom/admin/home/Home";
import CreateProduct from "./components/atom/admin/Products/CreateProduct";

import EditProduct from "./components/atom/admin/Products/EditProduct";
import ProtectedRoute from "./helpers/admin/checkRolesAuth";
import EditCurrentAdmin from "./components/atom/admin/users/EditCurrentAdmin";
import Banners from "./components/atom/admin/banners/Banners";
import CreateBanner from "./components/atom/admin/banners/CreateBanner";
import Orders from "./components/atom/admin/orders/Orders";
import OrderDetails from "./components/atom/admin/orders/OrderDetails";
import CreateBlog from "./components/atom/admin/blogs/CreateBlog";
import EditBlog from "./components/atom/admin/blogs/EditBlog";
import CreateCategories from "./components/atom/admin/categories/CreateCategories";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />

                    <ProtectedRoute
                        exact
                        path="/admin/products"
                        component={Product}
                    />
                    <ProtectedRoute exact path="/admin/home" component={Home} />

                    <ProtectedRoute
                        path="/admin/products/create"
                        component={CreateProduct}
                    />

                    <ProtectedRoute
                        path="/admin/editproduct/:id"
                        component={EditProduct}
                    />

                    <ProtectedRoute
                        exact
                        path="/admin/categories"
                        component={ListCategories}
                    />
                    <ProtectedRoute
                        path="/admin/categories/create"
                        component={CreateCategories}
                    />
                    <ProtectedRoute
                        path="/admin/editcategory/:categoryId"
                        component={EditCategories}
                    />

                    <ProtectedRoute
                        exact
                        path="/admin/users"
                        component={ListAdmins}
                    />

                    <ProtectedRoute
                        path="/admin/listadmins/create"
                        component={CreateAdmin}
                    />
                    <ProtectedRoute
                        path="/admin/editusers/:id"
                        component={EditCurrentAdmin}
                    />
                    <ProtectedRoute
                        exact
                        path="/admin/banners"
                        component={Banners}
                    />
                    <ProtectedRoute
                        path="/admin/banners/create"
                        component={CreateBanner}
                    />
                    <ProtectedRoute
                        exact
                        path="/admin/orders"
                        component={Orders}
                    />
                    <ProtectedRoute
                        path="/admin/orders/:orderId"
                        component={OrderDetails}
                    />
                    <ProtectedRoute
                        path="/admin/blogs/create"
                        component={CreateBlog}
                    />
                    <ProtectedRoute
                        path="/admin/blogs/edit/:blogId"
                        component={EditBlog}
                    />
                </Switch>
            </Router>
        );
    }
}
