import "./TodoSidebar.css";
import LogoImg from "../../assets/images/logo.png";
import avatarImg from "../../assets/images/avatar.jpeg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TodoContext } from "../../contexts/TodoContext";

export const TodoSidebar = () => {
  const { state } = useContext(UserContext);
  const { todoState } = useContext(TodoContext)

  const todoCount = todoState.todos.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.isCompleted ? "completed" : "pending"]: (acc[
        curr.isCompleted ? "completed" : "pending"
      ] += 1),
    }),
    { pending: 0, completed: 0 }
  );
  return (
    <div>
      <>
        <img className="logo" src={LogoImg} />
        <div className="sidebar-container">
          <img className="avatar-img" src={avatarImg} />
          <p className="sidebar-greet">
            <span className="sidebar-welcome-text">Hello</span>, {state.user.username}!
          </p>
          <section className="todo-details-table">
            <p className="todo-details-item">
              Pending Todos <span className="todo-details-item-count">{`${todoCount.pending}`}</span>
            </p>
            <p className="todo-details-item">
              Completed Todos{" "}
              <span className="todo-details-item-count">{`${todoCount.completed}`}</span>
            </p>
          </section>
          <section className="sidebar-date-and-time">
            <iframe
              src="https://free.timeanddate.com/clock/i8th1de9/n44/szw110/szh110/hoc000/hbw2/hfceee/cf100/hncccc/fdi76/mqc000/mql10/mqw4/mqd98/mhc000/mhl10/mhw4/mhd98/mmc000/mml10/mmw1/mmd98"
              frameBorder="0"
              width="110"
              height="110"
            ></iframe>
            <br />
            <br />
            <iframe
              src="https://free.timeanddate.com/clock/i8th1o9n/n44/fn16/tt1/tw0"
              frameBorder="0"
              width="128"
              height="19"
            ></iframe>
            <p className="date-and-time-text">
              Good to know current date & time.
            </p>
          </section>
        </div>
      </>
    </div>
  );
};
