import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Book from '../components/Book'
import Pager from '../components/Pager'
import Skelet from '../components/Skelet'
import { setLoad } from '../store/appSlice'
import { AppDispatch, RootState } from '../store/store'
import { BookType } from '../types'

// Quantity per page
const count: number = 8

const Home = () => {
  const search = useSelector((state: RootState) => state.app.search)
  const order = useSelector((state: RootState) => state.app.order)
  const load = useSelector((state: RootState) => state.app.load)
  const page = useSelector((state: RootState) => state.app.page)
  const subject = useSelector((state: RootState) => state.app.subject)
  const [total, setTotal] = useState<number>(0)
  const [list, setList] = useState<BookType[]>([])
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject=${subject}&orderBy=${order}&maxResults=${count}&startIndex=${page}`)
      .then(response => response.json())
      .then(data => {
        setTotal(data.totalItems)
        setList(data.items)
        dispatch(setLoad(false))
      })
  }, [order, load, dispatch, page])

  return (
    <div>
      <div className="searchbox-found">Found 500 books</div>

      <div className="row bookShort-row mb-3">
        {list.length
          ? list.map((book, index) => <Book key={index} book={book} />)
          : <>
            <Skelet /><Skelet /><Skelet /><Skelet /><Skelet /><Skelet /><Skelet /><Skelet />
          </>
        }
      </div>
      <Pager count={count} total={total} />
    </div>
  )
}

export default Home