//IMPORTACIONES

/*#########################################
                 MODULOS
#########################################*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*#########################################
                 ESTILOS
#########################################*/
import './index.css';

/*#########################################
              COMPONENTES
#########################################*/
/* import App from './App'; */
import CartProvider from './context/CartContext';
import NavBar from './components/navbar/NavBar.js';
import Home from './components/home/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';
import Cart from './components/cart/Cart';
import AboutUs from './components/aboutUs/AboutUs.js';
import Footer from './components/footer/Footer.js';

/*#########################################
                 WEBVITALS
#########################################*/
import reportWebVitals from './reportWebVitals';

/*#########################################
                 LOGICA
#########################################*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <CartProvider>

    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/productos' element={<ItemListContainer/>} greeting='Estamos en el directorio productos/'/>
        <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>
        <Route exact path='/categoria/:categoriaId' element={<ItemCategoryContainer/>}/>
        <Route exact path='/carrito' element={<Cart/>}/>
        <Route exact path='/nosotros' element={<AboutUs/>} greeting='Estamos en el directorio nosotros/'/>
      </Routes>

      <Footer/>

    </BrowserRouter>
    
    </CartProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
