
import './App.css'
import { RevenueCard } from './Components/RevenueCard'

function App() {
  
  return (
    <div className='grid grid-cols-3' >
        <RevenueCard title={"Amount pending"} orderCount={32} amount={92412} />
    </div>
  )
}

export default App
