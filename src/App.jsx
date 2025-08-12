
import './App.css'

import { InputField } from './components/InputField'
function App() {


  return (
    <>
     <InputField id={'name'} 
                 labelValue={'Full name'} 
                 inputType={'text'}
                 placeholder={'First and last name'}/>
    </>
  )
}

export default App
