// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="blog-list-container">
      <ul className="unordered-list">
        {blogsList.map(eachItem => (
          <BlogItem eachPost={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
