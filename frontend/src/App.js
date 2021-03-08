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
import EditCurrentAdmin from "./components/atom/admin/users/EditCurrentAdmin";
import Banners from "./components/atom/admin/banners/Banners";
import CreateBanner from "./components/atom/admin/banners/CreateBanner";

import Orders from "./components/atom/admin/orders/Orders";
import OrderDetails from "./components/atom/admin/orders/OrderDetails";
import CreateBlog from "./components/atom/admin/blogs/CreateBlog";
import EditBlog from "./components/atom/admin/blogs/EditBlog";

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
          <ProtectedRoute path="/admin/products" component={Product} />
          <ProtectedRoute exact path="/admin" component={Home} />

          <ProtectedRoute
            path="/admin/product/create"
            component={CreateProduct}
          />

          <ProtectedRoute
            path="/admin/editproduct/:id"
            component={EditProduct}
          />

          <ProtectedRoute path="/admin/categories" component={ListCategories} />
          <ProtectedRoute
            path="/admin/editcategory/:categoryId"
            component={EditCategories}
          />

          <ProtectedRoute exact path="/users" component={ListAdmins} />

          <ProtectedRoute path="/listadmins/create" component={CreateAdmin} />
          <ProtectedRoute path="/editusers/:id" component={EditCurrentAdmin} />
          <ProtectedRoute exact path="/admin/banners" component={Banners} />
          <ProtectedRoute exact path="/admin/users" component={ListAdmins} />

          <ProtectedRoute
            path="/admin/listadmins/create"
            component={CreateAdmin}
          />
          <ProtectedRoute
            path="/admin/editusers/:id"
            component={EditCurrentAdmin}
          />
          <ProtectedRoute exact path="/admin/banners" component={Banners} />
          <ProtectedRoute
            path="/admin/banners/create"
            component={CreateBanner}
          />

          {/* -----x----- Admin -----x----- */}
          <ProtectedRoute exact path="/admin/orders" component={Orders} />
          <ProtectedRoute
            path="/admin/orders/:orderId"
            component={OrderDetails}
          />
          <ProtectedRoute path="/admin/blogs/create" component={CreateBlog} />
          <ProtectedRoute
            path="/admin/blogs/edit/:blogId"
            component={EditBlog}
          />
        </Switch>
      </Router>
    );
  }
}
