import { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from "./pages/login";
import "./styles.css";
import { UserContext } from "./contexts/UserContext";
import { Todos } from "./pages/todos";
import { Notification } from "./components/notification/Notification";
import { ErrorPage } from "./components/errorPage/ErrorPage";
import { NotificationContext } from "./contexts/NotificationContext";
import { TodoContext } from "./contexts/TodoContext";

export default function App() {
  const {state} = useContext(UserContext)
  const { todoState } = useContext(TodoContext)
  const { notificationState } = useContext(NotificationContext)

  return (
    <div className="App">
      {
        (state.isLoading || todoState.isLoading) && <Notification loader={true} />
      }
      {notificationState.errorMessage && <Notification type="error" content={notificationState.errorMessage} />}
      {notificationState.successMessage && <Notification type="success" content={notificationState.successMessage} />}
      <Routes>
        <Route exact path="/" element={state.user ? <Todos/> : <Login />} />
        {/* <Route path="/todos" render={() => state.user ? <Todos/> : <Login />} /> */}
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      {/* {
        state.user ? <Todos/> : <Login />
      }  */}
    </div>
  );
}
