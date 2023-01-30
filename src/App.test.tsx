import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

describe('App tests', () => {
  const wrapper = <BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>

  beforeEach(() => {
    render(wrapper)
  })

  it('Render app', () => {
    const linkElement = screen.getByText(/Search books/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('List of books is fetched', async () => {
    const ids = await screen.findAllByTestId(/testId/i)
    expect(ids).toBeTruthy()
  })

})
