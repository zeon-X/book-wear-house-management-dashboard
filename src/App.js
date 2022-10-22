import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardDrawer from "./components/DashboardDrawer/DashboardDrawer";
import Drawer from "./components/Drawer/Drawer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Account/Login";
import Registration from "./pages/Account/Registration";
import AddBook from "./pages/AddBook/AddBook";
import AddCategory from "./pages/AddCategory/AddCategory";
import AddPublisher from "./pages/AddPublisher/AddPublisher";
import BookList from "./pages/BookList/BookList";
import CategoryList from "./pages/CategoryList/CategoryList";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
import LandingPage from "./pages/LandingPage/LandingPage";
import PublisherList from "./pages/PublisherList/PublisherList";
import UpdateBook from "./pages/UpdateBook/UpdateBook";
import RequireAuth from "./Utilities/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Routes>
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
          element={
            <RequireAuth>
              <DashboardDrawer></DashboardDrawer>
            </RequireAuth>
          }
        >
          <Route index element={<DashboardHome />} />
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
            element={<AddPublisher></AddPublisher>}
          ></Route>

          <Route
            path="category-list"
            element={<CategoryList></CategoryList>}
          ></Route>
          <Route
            path="add-category"
            element={<AddCategory></AddCategory>}
          ></Route>
        </Route>
        {/* </Drawer> */}
      </Routes>
    </div>
  );
}

export default App;
