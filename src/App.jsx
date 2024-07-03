import { Component } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage';
import Layout from './components/Layout';

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='/news-detail/:id' element={<NewsDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App