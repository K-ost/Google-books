import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router"
import { setSearch, setOrder, setSubject, setLoad } from "../store/appSlice"
import { AppDispatch } from "../store/store"

const Search = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()
  const { pathname } = useLocation()

  // searchFunc
  const searchFunc = (e: any) => {
    e.preventDefault()
    dispatch(setSearch(value))
    dispatch(setLoad(true))
  }

  // sortFunc
  const sortFunc = (e: any) => {
    dispatch(setOrder(e.target.value))
    dispatch(setLoad(true))
  }

  return (
    <div className="searchbox mb-3">
      <div className="container">
        <div className="searchbox-title">Search books</div>

        {pathname ==='/' && <form action="#" onSubmit={searchFunc}>
          <div className="row">
            <div className="col-12 col-lg-2 mb-3 mb-lg-0">
              <label className="form-label">Sort by</label>
              <select className="form-select" onChange={sortFunc}>
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            <div className="col-12 col-lg-2 mb-3 mb-lg-0">
              <label className="form-label">Category</label>
              <select className="form-select" onChange={e => dispatch(setSubject(e.target.value))}>
                <option value="all">All</option>
                <option value="art">Art</option>
                <option value="biography">Biography</option>
                <option value="computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
              </select>
            </div>
            <div className="col-12 col-lg-6 mb-3 mb-lg-0">
              <label className="form-label">Search</label>
              <input type="text" className="form-control" placeholder="Enter your keyword" onChange={e => setValue(e.target.value)} />
            </div>
            <div className="col-12 col-lg-2">
              <label className="d-none d-lg-block form-label"></label>
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </form>}
      </div>
    </div>
  )
}

export default Search