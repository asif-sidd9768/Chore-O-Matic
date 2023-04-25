import "./ErrorPage.css"
import ErrorImg from "../../assets/images/error-img.png"

export const ErrorPage = () => {
  return (
    <div className="error-page-bg">
      <section className="error-page-container">
        <img className="error-page-img" src={ErrorImg}/>
      </section>
    </div>
  )
}