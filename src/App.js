import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardDrawer from "./components/DashboardDrawer/DashboardDrawer";
import Login from "./pages/Account/Login";
import Registration from "./pages/Account/Registration";
import AddBook from "./pages/AddBook/AddBook";
import AddCategory from "./pages/AddCategory/AddCategory";
import AddPublisher from "./pages/AddPublisher/AddPublisher";
import BookList from "./pages/BookList/BookList";
import CategoryList from "./pages/CategoryList/CategoryList";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
import NotFound from "./pages/NotFound/NotFound";
import PublisherList from "./pages/PublisherList/PublisherList";
import UpdateBook from "./pages/UpdateBook/UpdateBook";
import RequireAuth from "./Utilities/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Routes>
<<<<<<< HEAD
        {/* <Drawer> */}
        <Route
          path="/"
          element={
            <Drawer>
              <LandingPage></LandingPage>
            </Drawer>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Drawer>
              <Login></Login>
            </Drawer>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Drawer>
              <Registration></Registration>
            </Drawer>
          }
        ></Route>

        <Route
          path="/inventory"
=======
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>

        <Route
          path="/"
>>>>>>> 5033fad1849d142084861df46b3d8d7773b49882
          element={
            <RequireAuth>
              <DashboardDrawer></DashboardDrawer>
            </RequireAuth>
          }
        >
          <Route index element={<DashboardHome />} />
<<<<<<< HEAD
          <Route path="home" element={<DashboardHome></DashboardHome>}></Route>

          <Route path="book-list" element={<BookList></BookList>}></Route>
          <Route path="update-book" element={<UpdateBook></UpdateBook>}></Route>
          <Route path="add-book" element={<AddBook></AddBook>}></Route>

          <Route
            path="publisher-list"
            element={<PublisherList></PublisherList>}
          ></Route>
          <Route
            path="add-publisher"
=======
          <Route path="/" element={<DashboardHome></DashboardHome>}></Route>

          <Route path="products" element={<BookList></BookList>}></Route>
          <Route
            path="update-product"
            element={<UpdateBook></UpdateBook>}
          ></Route>
          <Route path="add-product" element={<AddBook></AddBook>}></Route>

          <Route
            path="orders"
            element={<PublisherList></PublisherList>}
          ></Route>
          <Route
            path="add-order"
>>>>>>> 5033fad1849d142084861df46b3d8d7773b49882
            element={<AddPublisher></AddPublisher>}
          ></Route>

          <Route
<<<<<<< HEAD
            path="category-list"
=======
            path="categories"
>>>>>>> 5033fad1849d142084861df46b3d8d7773b49882
            element={<CategoryList></CategoryList>}
          ></Route>
          <Route
            path="add-category"
            element={<AddCategory></AddCategory>}
          ></Route>
<<<<<<< HEAD
        </Route>
        {/* </Drawer> */}
=======

          <Route
            path="user-list"
            element={<PublisherList></PublisherList>}
          ></Route>
          <Route
            path="add-user"
            element={<AddPublisher></AddPublisher>}
          ></Route>
        </Route>
>>>>>>> 5033fad1849d142084861df46b3d8d7773b49882
      </Routes>
    </div>
  );
}

export default App;
