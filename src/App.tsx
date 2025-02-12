import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Providers from "./providers"
import CreateVote from "./page/CreateVote"
import ListVote from "./page/ListVote"
import Vote from "./page/Vote"

function App() {

  return (
    <>
      <Providers>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createVote" element={<CreateVote />}></Route>
            <Route path="/listVote" element={<ListVote />}></Route>
            <Route path="/vote" element={<Vote />}></Route>
          </Routes>
        </BrowserRouter>
      </Providers>

    </>
  )
}

export default App
