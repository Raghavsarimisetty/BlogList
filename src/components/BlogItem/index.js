// Write your JS code here
import './index.css'

export default function BlogItem(props) {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <li className="list">
      <div className="list-container">
        <h1 className="list-head">{title}</h1>
        <p className="list-para">{publishedDate}</p>
      </div>
      <p className="list-para2">{description}</p>
      <hr className="hori" />
    </li>
  )
}
