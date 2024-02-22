import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Header from "./Compo/Header";
import Index from "./Pages/Index";
import Footer from "./Compo/Footer";
import Add_categories from "./Pages/Add_categories";
import Manage_categories from "./Pages/Manage_categories";
import Add_product from "./Pages/Add_product";
import Manage_product from "./Pages/Manage_product";
import Manage_user from "./Pages/Manage_user";
import Manage_contact from "./Pages/Manage_contact";
import Add_blog from "./Pages/Add_blog";
import Manage_blog from "./Pages/Manage_blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Login /></>}></Route>
          <Route path="/Index" element={<><Header /> <Index /> <Footer />  </>}></Route>
          <Route path="/add_categories" element={<><Header /> <Add_categories /> <Footer />  </>}></Route>
          <Route path="/manage_categories" element={<><Header /> <Manage_categories /> <Footer />  </>}></Route>
          <Route path="/add_product" element={<><Header /> <Add_product /> <Footer />  </>}></Route>
          <Route path="/manage_product" element={<><Header /> <Manage_product /> <Footer />  </>}></Route>
          <Route path="/user" element={<><Header /> <Manage_user /> <Footer />  </>}></Route>
          <Route path="/manage_contact" element={<><Header /> <Manage_contact /> <Footer />  </>}></Route>
          <Route path="/add_blog" element={<><Header /> <Add_blog /> <Footer />  </>}></Route>
          <Route path="/manage_blog" element={<><Header /> <Manage_blog /> <Footer />  </>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
