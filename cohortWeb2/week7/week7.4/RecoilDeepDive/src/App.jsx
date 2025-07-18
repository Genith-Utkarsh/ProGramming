import { RecoilRoot, useRecoilValue } from "recoil"
import React from "react"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsAtom } from "./atoms"

function App() {
  return (
    <RecoilRoot><MainApp /></RecoilRoot>
      
    
  )
}

function MainApp() {
  
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationsAtom)
  return (
    <div>
      <button>Home</button>
      <button>My networks ({networkCount > 99 ? "99+" : networkCount})</button>
      <button>Jobs({jobsCount})</button>
      <button>Messaging({messagingCount})</button>
      <button>Notifications({notificationsCount})</button>
      <button>Me({totalNotificationCount})</button>
    </div>
  )
}


export default App
