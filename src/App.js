import "./App.css"
import styled from 'styled-components'
import Example from "./components/navbar/hamburger/Example"
import { Route, Switch } from "react-router-dom"
import About from "./pages/about.component"
import Kontakt from "./pages/kontakt.component"
import Home from "./pages/home.component"
import ProjectExtended from "./pages/project-extended.component"
import Footer from "./components/footer"
import Sidebar from "./components/navbar/sidebar"
import NavigationDesktop from "./components/navbar/navbar"

const Container = styled.div`
min-width: 100vh;
`

function App() {
  return (
    <Container className='App'>
      <NavigationDesktop />
      <Sidebar />
      <Example />
        <Route>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path={"/project/:id"} component={ProjectExtended} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"/kontakt"} component={Kontakt} />
              </Switch>
        </Route>
      <Footer />
    </Container>
  )
}

export default App
