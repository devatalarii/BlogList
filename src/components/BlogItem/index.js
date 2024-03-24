// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachPost} = props
  const {id, title, description, publishedDate} = eachPost
  const style = id === 5 ? 'line-style-1' : 'line-style-2'

  return (
    <li className="list-items">
      <div className="details-container">
        <div className="item-1">
          <h4>{title}</h4>
          <p className="date">{publishedDate}</p>
        </div>
        <div>
          <p className="description">{description}</p>
        </div>
      </div>
      <hr className={style} />
    </li>
  )
}
export default BlogItem
