// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

function BlogList(props) {
  const {list} = props

  return (
    <div className="ul-container">
      {list.map(each => (
        <BlogItem details={each} key={each.id} />
      ))}
    </div>
  )
}
export default BlogList
