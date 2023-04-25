import { useContext, useState } from "react";
import "./LoginPage.css";
import { UserContext } from "../../contexts/UserContext";
import LogoImg from "../../assets/images/logo.png";
import { loginUser, registerUser } from "../../services/userService";
import { loginUserAction, loginUserFailed, loginUserRequest, loginUserSuccess, registerUserFailed, registerUserRequest, registerUserSuccess } from "../../actions/userActions";
import { TodoContext } from "../../contexts/TodoContext";
import { setTodos } from "../../actions/todoActions";
import { NotificationContext } from "../../contexts/NotificationContext";

export const LoginPage = () => {
  const { state, dispatch } = useContext(UserContext);
  const { todoState, todoDispatch } = useContext(TodoContext)
  const { notificationDispatch, showNotification } = useContext(NotificationContext)
  const [userId, setUserId] = useState("");
  const [generatedID, setGeneratedID] = useState("");

  const handleLogin = async () => {
    if (!userId) {
      return;
    }
    dispatch(loginUserRequest());
    try {
      const { status, data } = await loginUser({ userId });
      if (status === 200) {
        dispatch(loginUserSuccess(data));
        todoDispatch(setTodos(data.todos))
        showNotification({type: 'success', message:"Logged in!", timeout:2})
      }
    } catch (error) {
        dispatch(loginUserFailed(error))
        showNotification({type: 'error', message:error.response.data, timeout:2})
    }
  };

  const handleRegister = async () => {
    dispatch(registerUserRequest())
    try {
      const { data } = await registerUser();
      setGeneratedID(data.userId);
      dispatch(registerUserSuccess())
      showNotification({type: 'success', message:"Logged in!"})
    }catch(error){
      dispatch(registerUserFailed())
      showNotification({type: 'error', message:error.response.data})
    }
  };
  return (
    <div className="login-bg">
      <section className="login-container">
        <img src={LogoImg} className="login-logo" alt="" />
        <section className="login-form">
          <p className="login-user-id-label">User ID</p>
          <input
            type="text"
            name=""
            id=""
            className="login-user-id-input"
            onChange={(event) => setUserId(event.target.value)}
            value={userId}
            placeholder="Type your user Id"
          />
          <br />
          <p></p>
          <button className="login-submit-btn" onClick={handleLogin}>
            Login
          </button>
        </section>
        <section className="login-page-register">
          {generatedID && <p className="login-page-register-id-text">
            Please make sure to remember your user ID: <span className="login-page-register-id">{`${
            generatedID ? generatedID : ""
          }`}</span> as it will be required for you to login in the future.</p>}
          <button disabled={generatedID} className="login-register-btn" onClick={handleRegister}>
            Register
          </button>
        </section>
      </section>
    </div>
  );
};
