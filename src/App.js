import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Login from './pages/Login/Login.page';
import Register from './pages/Register/Register.page';
import Documents from './pages/Documents/Documents.page';
import Document from './pages/Document/Document.page';
import ManageDocument from './pages/ManageDocument/ManageDocument.page';
import Header from './components/Header/Header.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          
          <Switch>
            <Route path='/' exact component={Documents}/>
            <Route path='/document/manage' exact component={ManageDocument}/>
            <Route path='/document/manage/:id' exact component={ManageDocument}/>
            <Route path='/document/:id' exact component={Document}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}



export default App;
