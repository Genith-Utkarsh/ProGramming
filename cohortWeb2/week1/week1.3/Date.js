// Date is class

const currentDate = new Date()

console.log(currentDate.getMonth() + 1)  // as counts start from zero
console.log(currentDate.getDate());
console.log(currentDate.getFullYear())
console.log(currentDate.getDay());
console.log(currentDate.getTime())



const now = new Date()
console.log(now.toLocaleDateString())  // format: MM/DD/YYYY
console.log(now.getDate())  // Day of the month
console.log(now.getDay())  // Day of the week (0-6, where 0 is Sunday)
console.log(now.getFullYear())  // Full year (e.g., 2023)
console.log(now.getHours())  // Current hour (0-23)
console.log(now.getMinutes())  // Current minute (0-59)
console.log(now.getSeconds())  // Current second (0-59)
console.log(now.getMilliseconds())  // Current millisecond (0-999)      
