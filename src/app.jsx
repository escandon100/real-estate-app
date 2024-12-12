import Navbar from "./components/navbar/navbar";
import Homepage from "./routes/homepage/homepage";
import "./styles/layout.scss"


const App = () => {
  return(
    <div className="layout">
      <div className="navbar">
       <Navbar/>
      </div>
      <div className="content">
       <Homepage/>
      </div>
    </div>
  )
}
export default App;