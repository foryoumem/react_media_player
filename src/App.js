import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from './routes/Root'
import Play from "./routes/Play"

function App() {
  console.log("App Component 실행")
  document.cookie = 'cookieName=cookieValue; SameSite=None; Secure'

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
