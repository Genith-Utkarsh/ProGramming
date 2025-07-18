import { atom, selector } from 'recoil'
import axios from "axios"

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 102
// })

// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 0
// })


// export const messagingAtom = atom({
//     key : "messagingAtom",
//     default : 12
// })


// export const  notificationsAtom = atom({
//     key : "notificationsAtom",
//     default : 0
// })


// export const totalNotificationsAtom = selector({
//     key : "totalNotificationsAtom",
//     get : ({get}) => {
//         const network = get(networkAtom);
//         const jobs = get(jobsAtom);
//         const messaging = get(messagingAtom);
//         const notifications = get(notificationsAtom);

//         return network + jobs + messaging + notifications;
//     }
// })



export const allNotificationsAtom = atom({
    key : "allNotificationsAtom",
    default : selector({
        key : "allNotificationSelector",
        get : async () => {
            const responce = await axios.get("https://expresstodobackend.onrender.com/notifications")
            return responce.data
        }
    })
})



export const totalNotificatioonSelector = selector({
    key : "totalNotificatioonSelector",
    get : ({get}) => {
        const allNotificationsData = get(allNotificationsAtom)

        return allNotificationsData.network + allNotificationsData.jobs + allNotificationsData.messaging + allNotificationsData.notifications
    }
})