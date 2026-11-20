import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/MartksChart/MarksChart'



const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json')


function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <ResultChart></ResultChart>
      </main>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>

    </>
  )
}

export default App
