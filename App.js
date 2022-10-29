import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Products from "./pages/Products"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Products />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App