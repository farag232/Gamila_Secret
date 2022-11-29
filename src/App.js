import "./App.css";
import { Routes, BrowserRouter, Route, } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Pages/HomePage/HomePage";
import WorkShopsPage from "./components/Pages/WorkShopsPage/WorkShopsPage";
import AboutUsPage from "./components/Pages/AboutUsPage/AboutUsPage";
import FeedBacksPage from "./components/Pages/FeedBacksPage/FeedBacksPage";
import ContactUsPage from "./components/Pages/ContactUsPage/ContactUsPage";
import RecipesPage from "./components/Pages/RecipesPage/RecipesPage";
import PageNotFound from "./utilities/PageNotFound/PageNotFound";
import Signup from "./components/Auth-login/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Auth-login/Login";

function App() {
  return (
    <AuthProvider>
      <div className="website-container">
        <BrowserRouter>
        
          <div>
            <Header />
            
            <Routes>
            <Route exact path='/' element={< HomePage />}></Route>
            <Route exact path='/spoon-workshops' element={< WorkShopsPage />}></Route>
            <Route exact path='/about-us' element={< AboutUsPage />}></Route>
            <Route exact path='/feedbacks' element={< FeedBacksPage />}></Route>
            <Route exact path='/contact-us' element={< ContactUsPage />}></Route>
            <Route exact path='/recipes' element={< RecipesPage />}></Route>
            <Route exact path='/signup' element={< Signup />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
              <Route component={PageNotFound} />
            </Routes>
           
          </div>
       </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;