const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const usersData = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    kidneys: [{
      healthy: true
    }]
  },
  { 
    id: 2, 
    name: "Jane Smith", 
    age: 25 ,
    kidneys : [{
        healthy : false
    }]
},
];

app.get("/", (req, res) => {
    res.send("If your John Doe go to /john or if you are Jane Smith go to /jane");
})

app.get("/john", (req, res) => {
    const totalJohnKidneys =  usersData[0].kidneys.length
    const healthyJohnKidneys = usersData[0].kidneys.filter((subject) => subject.healthy).length

    const unhealthyJohnKidneys = totalJohnKidneys - healthyJohnKidneys;

    res.json({
        name : usersData[0].name,
        totalKidneys : totalJohnKidneys,
        healthyKidneys : healthyJohnKidneys,
        unhealthyKidneys : unhealthyJohnKidneys
    })
})


app.get("/jane", (res, req) => {
    const totalJaneKidneys = usersData[1].kidneys.length
    const healthyJaneKidneys = usersData[1].kidneys.filter((subject) => subject.healthy).length 
    const unhealthyJaneKidneys = totalJaneKidneys - healthyJaneKidneys;
    res.json({
        name : usersData[1].name,
        totalKidneys : totalJaneKidneys,
        healthyKidneys : healthyJaneKidneys,
        unhealthyKidneys : unhealthyJaneKidneys
    })
})


app.post("/john", (req, res) => {
    const {newKidney} = req.body

    usersData[0].kidneys.push(newKidney)

    res.json({
        message : "New kidney added for John Doe"
    })
})

app.post("/jane", (req, res) => {
    const {newKidney} = req.body

    usersData[1].kidneys.push(newKidney)
    res.json({
        message : "New kidney added for Jane Smith"
    })
})


app.put("/john", (req, res) =>{
    // make every kidney healthy

    usersData[0].kidneys = usersData[0].kidneys.map((kidney) => {
        return {healthy : true}
    })

    res.send({
        message: "All kidneys for John Doe are now healthy"
    })
})


app.put("/jane", (req, res) => {
    // make every kidney healthy

    usersData[1].kidneys = usersData[1].kidneys.map((kidney) => {
        return {healthy : true}
    })

    res.send({
        message: "All kidneys for Jane Smith are now healthy"
    }   )
})


app.delete("/john", (req, res) => {
    // remove all unhealthy kidneys for John Doe
    usersData[0].kidneys = usersData[0].kidneys.filter((kidney) => kidney.healthy )
    res.json({
        message: "All unhealthy kidneys for John Doe have been removed"
    })
})

app.delete("/jane", (req, res) => {
    // remove all unhealthy kidneys for Jane Smith
    usersData[1].kidneys = usersData[1].kidneys.filter((kidney) => kidney.healthy )
    res.send({
        message: "All unhealthy kidneys for Jane Smith have been removed"
    })
})


app.get("/users", (req, res) => {
    res.json(usersData);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
