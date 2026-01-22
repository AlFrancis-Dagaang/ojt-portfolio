import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MainCard from "./pages/MainCard";
import MainButton from "./pages/MainButton";
import TodoList from "./pages/TodoList";
import Responsive from "./pages/Responsive";
import Responsive2 from "./pages/Responsive2";
import Responsive3 from "./pages/Responsive3";
import Responsive4 from "./pages/Responsive4";
import Responsive5 from "./pages/Responsive5";

function App() {
  
  return (
    <Router>
      <section className="flex flex-col h-screen w-full">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<MainCard />} />
          <Route path="/counter" element={<MainButton />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/responsive" element={<Responsive/>}/>
          <Route path="/responsive2" element={<Responsive2/>}/>
          <Route path="/responsive3" element={<Responsive3/>}/>
          <Route path="/responsive4" element={<Responsive4/>}/>
          <Route path="/responsive5" element={<Responsive5/>}/>
        </Routes>
      </section>

    </Router>
  );
}

export default App;
