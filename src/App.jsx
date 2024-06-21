import { useCallback, useEffect, useState } from 'react'
import { getPictures } from './utils/data.js'
import Header from './components/Header/Header.jsx'
import Gallery from './components/Main/ContainerPicturesSection/gallery/Gallery.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

export default function App() {
  const [ isContent, setFilter ] = new useState(false);
  const [ content, setContent ] = useState([{ id: 0, url: null, description: null, likes: 0, comments: [{ id: 0, avatar: null, message: null, name: null }] }])

  // const [loading, setLoading] = useState(false)

  // const fetchPictures = useCallback(async () => {
  //     setLoading(true)      
  //     const responce = await fetch('https://30.javascript.pages.academy/kekstagram/data/')
  //     const pictures = await responce.json()
  //     setContent(pictures)
  //     setLoading(false)
  //     console.log(loading ? 'loading...' : pictures)
  //   },
  //   []
  // )
  // useEffect(() => {
  //     fetchPictures()
  //   },
  //   [fetchPictures]
  // )

  const getContent = useCallback(() => {
      // setLoading(true)
      const pictures = getPictures(25);
      pictures && setContent(pictures)
      pictures && setFilter(true)
      // setLoading(false)
    },
    []
  )
  useEffect(() => {
      getContent()
    },
    [getContent]
  )

  return (
    <>
      <Header isContent={ isContent } />
      <main>
        <Gallery content={ content } />
      </main>
      <Footer/>
    </>
  )
}

