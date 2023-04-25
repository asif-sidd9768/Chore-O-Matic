import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App";
import { TodoContext, TodoProvider } from "./contexts/TodoContext";
import { UserContext, UserProvider } from "./contexts/UserContext";
import { NotificationContext, NotificationProvider } from "./contexts/NotificationContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { TodoContext };
export { UserContext };
export {NotificationContext}
root.render(
  <StrictMode>
    <NotificationProvider>
      <UserProvider>
        <TodoProvider>
          <Router>
            <App />
          </Router>
        </TodoProvider>
      </UserProvider>
    </NotificationProvider>
  </StrictMode>
);
