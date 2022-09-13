import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PrivateRoute } from "./components/private-route";
import { HomePage } from './pages';
import { Admin } from "./pages/admin";
import AdminProducts from "./pages/admin/product";
import AdminUsers from "./pages/admin/users";
import { CartPage } from "./pages/cart";
import CategoryPage from "./pages/category";
import { DetailsPage } from "./pages/details";
import { PageNotFound } from "./pages/errors/404";
import { LoginUser } from "./pages/loginUser";
import RegisterUser from "./pages/registerUser";

function App() {
  return (

    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/details/:id" element={
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        } />
        <Route path="/cart" element={
          <PrivateRoute>
            <CartPage/>
          </PrivateRoute>
        } />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser/> } />
        <Route path="/admin" element={<Admin />}>
          <Route path="products" element={<AdminProducts/> }/>
          <Route path="users" element={<AdminUsers />} />
        </Route>
        <Route path="/category/*" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>


  );
}

export default App;
