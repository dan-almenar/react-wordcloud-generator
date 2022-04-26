import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import App from './App'
import About from './routes/about'
import Home from './routes/home'
import WordCloud from './routes/wordcloud'
import './index.css'
import WorldCloudGenerator from './components/WordCloudComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/wordcloud' element={<WordCloud />} />
      <Route 
        path='*'
        element={
          <main className='hero is-fullheight is-danger'>
            <div className="hero-body container">
              <div className="columns">
                <h1 className='column title is-size-1 has-text-right mr-5'>Error: (404)</h1>
                <p className='column subtitle is-size-3 has-text-left ml-5'>Estás buscando algo que no existe.</p>
              </div>
            </div>
            <div className="container has-text-centered">
              <Link className='' to={'/'}>
                <i className='material-icons-outlined is-size-1'>home</i>
                <p className='is-size-5'>Regresar</p>
              </Link>
            </div>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
)
