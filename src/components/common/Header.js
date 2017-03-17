import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = props => (
    <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">

        <div className="container">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">Shop</a>
            </div>

            <div className="collapse navbar-collapse" id="custom-collapse">

                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    </li>
                    <li>
                        <Link to="/products" activeClassName="active">Products</Link>
                    </li>

                    {/*<!-- CART -->*/}
                    <li className="dropdown navbar-cart">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <span className="icon-basket"></span>
                            <span className="cart-item-number">2</span>
                        </a>
                        <ul className="dropdown-menu cart-list" role="menu">

                            <li>
                                <div className="navbar-cart-item clearfix">
                                    <div className="navbar-cart-img">
                                        <a href="#"><img src="assets/images/shop/product-9.jpg" alt="" /></a>
                                    </div>
                                    <div className="navbar-cart-title">
                                        <a href="#">Short striped sweater</a>
                                        <span className="cart-amount">2 × $119.00</span><br />
                                        <strong className="cart-amount">$238.00</strong>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="navbar-cart-item clearfix">
                                    <div className="navbar-cart-img">
                                        <a href="#"><img src="assets/images/shop/product-10.jpg" alt="" /></a>
                                    </div>
                                    <div className="navbar-cart-title">
                                        <a href="#">Colored jewel rings</a>
                                        <span className="cart-amount">2 × $119.00</span><br />
                                        <strong className="cart-amount">$238.00</strong>
                                    </div>
                                </div>
                            </li>

                            <li>
                                {/*<!-- navbar-cart-item -->*/}
                                <div className="clearfix">
                                    <div className="cart-sub-totle">
                                        <strong>Total: $476.00</strong>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="clearfix">
                                    <a type="submit" className="btn btn-block btn-round btn-font-w">Checkout</a>
                                </div>
                            </li>

                        </ul>
                    </li>
                    {/*<!-- /CART -->*/}

                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Search</a>
                        <ul className="dropdown-menu" role="menu">
                            <li>
                                <div className="dropdown-search">
                                    <form role="form">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">English</a>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#">English</a></li>
                            <li><a href="#">France</a></li>
                            <li><a href="#">Germany</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav >
);

export default Header;
