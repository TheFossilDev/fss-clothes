import { Routes, Route } from "react-router-dom";


import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        {/* ^^ Is the INDEX of the parent route */}
      </Route>
    </Routes>
  );
}

export default App