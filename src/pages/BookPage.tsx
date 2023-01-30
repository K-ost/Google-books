import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setLoad } from '../store/appSlice'
import { AppDispatch } from '../store/store'
import { BookType } from '../types'

const BookPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const [book, setBook] = useState<BookType | null>(null)
  
  useEffect(() => {
    try {
      dispatch(setLoad(true))
      fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(response => response.json())
        .then(data => {
          setBook(data)
          dispatch(setLoad(false))
        })
    } catch (error) {
      console.log(error)
    }
  }, [id])

  if (book === null) {
    return null
  }

  return (
    <>
      <h1 className="mb-2">{book?.volumeInfo.title}</h1>
      <div className="row pagebox">
        <div className="col-12 col-lg-3 pagebox-img">
          <img src={book?.volumeInfo.imageLinks.thumbnail} alt="" />
        </div>
        <div className="col-12 col-lg-9 pagebox-content">
          <div className="pagebox-cat">
            {book?.volumeInfo.categories && book?.volumeInfo.categories.join(', ')}
          </div>
          <div className="pagebox-authors">
            {book?.volumeInfo.authors && book?.volumeInfo.authors.join(', ')}
          </div>
          <div className="pagebox-price">
            <b>{book?.saleInfo.retailPrice?.amount}</b>
            {book?.saleInfo.retailPrice?.currencyCode}
          </div>
          <div className="pagebox-text" dangerouslySetInnerHTML={{__html: book!.volumeInfo.description}}>
          </div>
          {!book.volumeInfo.description && <p>No description.</p>}
          <Link to="/" className="btn btn-outline-primary">Go back to home page</Link>
        </div>
      </div>
    </>
  )
}

export default BookPage