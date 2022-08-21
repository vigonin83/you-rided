import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import Account from './layouts/account/account';
import AdminDashboard from './layouts/adminDashboard/adminDashboard';
import Cart from './layouts/cart/cart';
import Contacts from './layouts/contacts/contacts';
import Guarantee from './layouts/guarantee/guarantee';
import MainPage from './layouts/mainPage/mainPage';
import NotFound from './layouts/notFound/notFound';
import Payment from './layouts/payment/payment';
import ProductCard from './layouts/productCard/productCard';

function App() {
    return (
        <>
            <ul>
                <li>
                    <Link to='/'>Главная</Link>
                </li>
                <li>
                    <Link to="/product_card">Товар</Link>
                </li>
                <li>
                    <Link to="/payment">Оплата и доставка</Link>
                </li>
                <li>
                    <Link to="/guarantee">Гарантия и сервис</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакты</Link>
                </li>
                <li>
                    <Link to="/cart">Корзина</Link>
                </li>
                <li>
                    <Link to="/account">Личный кабинет</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/product_card" component={ProductCard} />
                <Route path="/payment" component={Payment} />
                <Route path="/guarantee" component={Guarantee} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/cart" component={Cart} />
                <Route path="/account" component={Account} />
                <Route path="/dashboard" component={AdminDashboard} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default App;
