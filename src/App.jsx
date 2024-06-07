import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Menu from "./components/menu.jsx";

// Css module
import "./index.css";


const App = () => {

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
