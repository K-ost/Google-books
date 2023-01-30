import { useDispatch, useSelector } from "react-redux"
import { setLoad, setPage } from "../store/appSlice"
import { AppDispatch, RootState } from "../store/store"

interface IPager {
  count: number
  total: number
}

const Pager: React.FC<IPager> = ({ count, total }) => {
  const lastPage = Math.ceil(total / count)
  const page = useSelector((state: RootState) => state.app.page)
  const dispatch = useDispatch<AppDispatch>()

  // clickPrev
  const clickPrev = () => {
    dispatch(setPage(page - 1))
    dispatch(setLoad(true))
  }

  // clickNext
  const clickNext = () => {
    dispatch(setPage(page + 1))
    dispatch(setLoad(true))
  }

  return (
    <div className="pagination">
      <button
        className="btn btn-outline-primary"
        onClick={clickPrev}
        disabled={page < 1}
      >Previous</button>
      <span>Page: <b>{page + 1}</b> from <b>{lastPage}</b></span>
      <button
        className="btn btn-outline-primary"
        onClick={clickNext}
        disabled={page >= lastPage}
      >Next</button>
    </div>
  )
}

export default Pager