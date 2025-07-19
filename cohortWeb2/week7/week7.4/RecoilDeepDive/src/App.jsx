import { RecoilRoot, useRecoilValue } from "recoil"
import React from "react"
import { allNotificationsSelector, totalNotificatioonSelector } from "./atoms"

function App() {
  return (
    <RecoilRoot><MainApp /></RecoilRoot>
      
    
  )
}

// function MainApp() {
  
//   const networkCount = useRecoilValue(networkAtom)
//   const jobsCount = useRecoilValue(jobsAtom)
//   const messagingCount = useRecoilValue(messagingAtom)
//   const notificationsCount = useRecoilValue(notificationsAtom)
//   const totalNotificationCount = useRecoilValue(totalNotificationsAtom)
//   return (
//     <div>
//       <button>Home</button>
//       <button>My networks ({networkCount > 99 ? "99+" : networkCount})</button>
//       <button>Jobs({jobsCount})</button>
//       <button>Messaging({messagingCount})</button>
//       <button>Notifications({notificationsCount})</button>
//       <button>Me({totalNotificationCount})</button>
//     </div>
//   )
// }


function MainApp(){
  const allNotificationsData = useRecoilValue(allNotificationsSelector)
  const totalNotificationsCount = useRecoilValue(totalNotificatioonSelector)
  

  return <div>
    <button>Home</button>
    <button>My networks ({allNotificationsData.network > 99 ? "99+" : allNotificationsData.network})</button>
    <button>Jobs({allNotificationsData.jobs})</button>
    <button>Messaging({allNotificationsData.messaging})</button>
    <button>Notifications({allNotificationsData.notifications})</button>
 
    <button>Me({totalNotificationsCount})</button>
  </div>
}

export default App
