import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
import React from 'react'

function App() {
  return (
    <>
      <RecoilRoot>
          <Count />
      </RecoilRoot>
      <EvenCountRenderer />
    </>
  )
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <ButtonsComponent />
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>{count}</div>
}

function ButtonsComponent() {
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => {
        setCount(count => count + 1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count => count + 1)
      }}>Decrease</button>
    </div>
  )
}


function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {(isEven) ? "is Even num" : null}
  </div>
}

export default App
