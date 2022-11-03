import "./App.css";
import Checklist from "./routes/CheckList";
import ScoreList from "./routes/ScoreList";
import { familyTree, mappedScores } from "./mocks";
import ShoppingCart from "./routes/ShoppingCart";
import { Route, Routes } from "react-router";
import Family from "./routes/FamilyTree";
import GoToNextPage from "./routes/GoToNextPage";
import ToDoList from "./routes/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/scores" element={<ScoreList scores={mappedScores} />} />
          <Route path="/to-do-list" element={<ToDoList />} />
          <Route path="/check-list" element={<Checklist />} />
          <Route
            path="/family-tree"
            element={<Family familyTree={familyTree} />}
          />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
        <GoToNextPage />
      </header>
    </div>
  );
}

export default App;
