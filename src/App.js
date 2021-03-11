import "./App.css"
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"
import About from "./pages/about.component"
import Kontakt from "./pages/kontakt.component"
import Home from "./pages/home.component"
import ProjectExtended from "./pages/project-extended.component"
import Sidebar from "./components/navbar/sidebar"
import Gnistan from "./pages/Gnistan"
import Osignat from "./pages/Osignat"
import Forsbergs from "./pages/forsbergs"

const Container = styled.div`
  min-height: 80vh;
`



function App() {
  return (
    <Container className="App">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gnistan" component={Gnistan} />
        <Route exact path="/osignat" component={Osignat} />
        <Route path={"/project/:id"} component={ProjectExtended} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/kontakt"} component={Kontakt} />
        <Route exact path={"/forsbergs"} component={Forsbergs} />
      </Switch>
    </Container>
  )
}

export default App
