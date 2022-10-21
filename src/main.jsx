import ReactDOM from 'react-dom/client'
import './index.css'
import { NetflixApp } from './NetflixApp'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={ store }>
      <NetflixApp/>
    </Provider>
)
