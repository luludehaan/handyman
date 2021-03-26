import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import Services from './components/services/Services';
import Comments from './components/comments/Comments';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Handymans from './components/handymans/Handymans';
import { Container } from 'semantic-ui-react';
const App = () => (
  <>
    <Navbar /> 
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/handymans" component={Handymans} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/comments" component={Comments} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)
export default App;