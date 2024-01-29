import "./App.css";
import "./reset.css";
import { LayoutHeader } from "./components/LayoutHeader";
import { TodoController } from "./components/todo/TodoController";

function App() {
    return (
        <>
            <LayoutHeader />
            <TodoController />
        </>
    );
}

export default App;
