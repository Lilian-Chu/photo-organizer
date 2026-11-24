import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <header className="header-bar">
        <a className="logo-container" href="#">
          <img className="logo" src={viteLogo} />
        </a>
        <input className="search-bar" placeholder="beach photos at sunset"></input>
        <div className="upload">Upload</div>
      </header>

      <main>
        <div className="sidebar">
          <div className="brand">AI Photo Organizer</div>  
          <ul className="nav-bar">
            <li href="#">Library</li>
            <li href="#">Search</li>
            <li href="#">Albums</li>
            <li href="#">Cleanup</li>
          </ul>
        </div>

        <section className="screen">
          <section id="screen-initial" className="screen">
            <h1>Start adding photos</h1>
            <p className="initial-flavor">
              Choose a folder or file on this computer. AI Photo Organizer reads your photos 
              where they are, so nothing is uploaded or moved from its original location.
            </p>
            <div className="initial-upload">
              <button className="btn primary" data-go="importing">Choose folder</button>
              <button className="btn secondary" data-go="importing">Choose file</button>
            </div>
            <p className="initial-upload-hint">
              You can also drag and drop a folder anywhere in this window.
            </p>
            <div className="initial-info">
              <div>
                <b>Stays on this computer</b><span>Analysis runs locally. No account needed.</span>
              </div>
              <div>
                <b>Originals stay untouched</b><span>Albums and tags are kept in a separate library.</span>
                </div>
              <div>
                <b>Deleting needs your approval</b><span>Duplicates and blurry shots are suggested, 
                never removed automatically.</span>
                </div>
            </div>

          </section>
        </section>

      </main>


    </>
  )
}

export default App
