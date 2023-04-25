import "./Notification.css"

export const Notification = ({type, content}) => {
  return (
    <div className={`notification-container ${type === "success" ? "notification-success" : "notification-error"}`}>
      <p className="notification-content">{content}</p>
    </div>
  )
}