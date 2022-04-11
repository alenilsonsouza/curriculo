import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { PersonalProjects } from './components/PersonalProjects';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';
import { Social } from './components/Social';


const App = () => {
  return (
    <>
      <Profile />
      <AboutMe />
      <PersonalProjects />
      <Skills />
      <Social />
      <Footer />
    </>
  )
}
export default App;