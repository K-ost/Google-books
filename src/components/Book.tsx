import { BookType } from "../types"
import nopic from '../assets/nopic.png'
import { Link } from "react-router-dom"

interface IBook {
  book: BookType
}

const Book: React.FC<IBook> = ({ book }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
      <div className="bookShort">
        <div className="bookShort-img">
        {book.volumeInfo.imageLinks ? 
          <Link to={book.id} data-testid={`testId-${book.id}`}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
          </Link> :
          <img src={nopic} alt="" />
        }
        </div>
        <div className="bookShort-cat">
          <span className="badge bg-warning text-dark">{book.volumeInfo.categories}</span>
        </div>
        <h2><Link to={book.id}>{book.volumeInfo.title}</Link></h2>
        {book.volumeInfo.authors && <div className="bookShort-authors">
          {book.volumeInfo.authors.join(', ')}
        </div>}
      </div>
    </div>
  )
}

export default Book