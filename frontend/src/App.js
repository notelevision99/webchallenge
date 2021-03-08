import React, { Component } from "react";

import ListCategories from "./components/atom/admin/categories/ListCategories";
import EditCategories from "./components/atom/admin/categories/EditCategories";
import Login from "./components/atom/admin/auth/Login";
import ListAdmins from "./components/atom/admin/users/ListAdmins";
import CreateAdmin from "./components/atom/admin/users/CreateAdmin";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Product from "./components/atom/admin/Products/Product";
import { Switch } from "react-router-dom";
import Home from "./components/atom/admin/home/Home";
import CreateProduct from "./components/atom/admin/Products/CreateProduct";

import EditProduct from "./components/atom/admin/Products/EditProduct";
import ProtectedRoute from "./helpers/admin/checkRolesAuth";
import EditCurrentAdmin from "./components/atom/admin/users/EditCurrentAdmin";
import Banners from "./components/atom/admin/banners/Banners";
import CreateBanner from "./components/atom/admin/banners/CreateBanner";

// Client
import "./styles/App.scss";
import HomePage from "./pages/HomePage";
import Header from "./components/atom/user/header/Header";
import Footer from "./components/atom/user/footer/Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* ----------- Client ----------- */}

          <Route path="/">
            <Header />
            <HomePage />
            <Footer />
          </Route>

          {/* -----x----- Client -----x----- */}

          {/* ----------- Admin ----------- */}

          <Route path="/login" component={Login} />

          <ProtectedRoute path="/products" component={Product} />
          <ProtectedRoute exact path="/" component={Home} />

          <ProtectedRoute path="/product/create" component={CreateProduct} />

          <ProtectedRoute path="/editproduct/:id" component={EditProduct} />

          <ProtectedRoute path="/categories" component={ListCategories} />
          <ProtectedRoute
            path="/editcategory/:categoryId"
            component={EditCategories}
          />

          <ProtectedRoute exact path="/users" component={ListAdmins} />

          <ProtectedRoute path="/listadmins/create" component={CreateAdmin} />
          <ProtectedRoute path="/editusers/:id" component={EditCurrentAdmin} />
          <ProtectedRoute exact path="/admin/banners" component={Banners} />
          <ProtectedRoute
            path="/admin/banners/create"
            component={CreateBanner}
          />

          {/* -----x----- Admin -----x----- */}
        </Switch>
      </Router>
    );
  }
}
