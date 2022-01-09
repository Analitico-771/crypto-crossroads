
import 'bootstrap/dist/css/bootstrap.min.css';
import './Baselayout.css';
import Baselayout from './layout/Baselayout';
import Home from './components/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers'

const saveToLocalStorage = (reduxGlobalState) => {
  try {
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState)
  } catch (error) {
    console.log(error);
  };
};

const loadFromLocalStorage = () => {
  const serializeState = localStorage.getItem('state');
  if(serializeState == null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState)
  };
};

const persistedState = loadFromLocalStorage();

let store = createStore(reducer, persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__() && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
  saveToLocalStorage(store.getState());
})

function App() {
  return <>
    <Provider store={store}>
      <Baselayout>
        <Home/>
      </Baselayout>
    </Provider>
  </>;
}

export default App;

/**
 * @todo Write the documentation.
 * @todo Implement this function.
 */