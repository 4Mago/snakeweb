import "./App.css"
import NavigationDesktop from "./components/navbar"
import Example from "./components/hamburger/Example"
import Footer from "./components/footer"
import { Route, Switch } from "react-router-dom"
import TaglineContextProvider from "./store/Tagline.context"
import ProjectContextProvider from "./store/Project.context"
import ProjectsContextProvider from "./store/projects.context"
import AboutContextProvider from "./store/about.context"
import HeaderContextProvider from "./store/Header.context"
import { AnimatePresence } from "framer-motion"
import About from "./pages/about.component"
import Kontakt from "./pages/kontakt.component"
import Home from "./pages/home.component"
import ProjectExtended from "./pages/project-extended.component"

function App() {
  return (
    <div className='App'>
      <NavigationDesktop />
      <Example />
      <ProjectContextProvider>
        <Route
          render={({ location }) => (
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Switch location={location} key={location.pathname}>
                <Route exact path={"/"}>
                  <TaglineContextProvider>
                    <HeaderContextProvider>
                      <Home key={location.id} />
                    </HeaderContextProvider>
                  </TaglineContextProvider>
                </Route>

                <Route path={"/project/:id"}>
                  <ProjectsContextProvider>
                    <ProjectExtended key={location.id} />
                  </ProjectsContextProvider>
                </Route>
                <Route exact path={"/about"}>
                  <AboutContextProvider>
                    <About key={location.id} />
                  </AboutContextProvider>
                </Route>
                <Route exact path={"/kontakt"}>
                  <Kontakt key={location.id} />
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </ProjectContextProvider>
      <Footer />
    </div>
  )
}

export default App
