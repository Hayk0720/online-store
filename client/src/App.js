import { BrowserRouter, Route , Routes , Re } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar"; 
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
