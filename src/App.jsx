import "./App.css";
import "./reset.css";
import { GlobalStyle } from "./components/GlobalStyle";
import { LayoutHeader } from "./components/LayoutHeader";
import { TodoController } from "./components/todo/TodoController";

function App() {
    return (
        <>
            <GlobalStyle />
            <LayoutHeader />
            <TodoController />
        </>
    );
}

export default App;
