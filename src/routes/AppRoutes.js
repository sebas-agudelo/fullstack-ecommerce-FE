import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
// import About from "../pages/About"
// import Contact from "../pages/Contact"
import Cart from "../pages/cart_payment_pages/Cart"
import { CheckoutPage } from "../pages/cart_payment_pages/Checkout"
import GetProduct from "../pages/product_pages/GetProduct"
import GetProducts from "../pages/product_pages/GetProducts"
import SignIn from "../pages/auth/SignIn"
import Profile from "../pages/auth/Profile"
import CheckoutSuccess from "../pages/cart_payment_pages/CheckoutSuccess"
import PaymentStatus from "../pages/cart_payment_pages/PaymentStatus"

import { Protected } from "../routes/protected"
import { Redirected } from "./Redirected"
import { GetUserOrders } from "../pages/auth/GetUserOrders"
import PageNotFound from "../pages/PageNotFound";


export const AppRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<Home />} />
            {/* <Route path="/om-oss" element={<About />} />
            <Route path="/kontakta-oss" element={<Contact />} /> */}

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/product/:id" element={<GetProduct />} />
            <Route path="/products/:type?/:id?" element={<GetProducts />} />

            <Route path="/loggain" element={
                <Redirected>
                    <SignIn />
                </Redirected>}
            />
            <Route
                path="/beställningar" element={
                    <Protected>
                        <GetUserOrders />
                    </Protected>
                }
            />
            <Route path="/konto" element={
                <Protected>
                    <Profile />
                </Protected>}
            />

            <Route path="/success" element={<CheckoutSuccess />} />
            <Route path="/confirm" element={<PaymentStatus />} />

            <Route path="*" element={<PageNotFound />} />

            {/* <Route path="/search?query" /> */}

            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    )
}