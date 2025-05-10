// ARRAY OF OBJECTS 

const allUsers = [
    {
        firstName : "Markov",
        age : 13,
        gender : "Male",
        isMarried : false
    },
    {
        firstName : "Breth",
        age : 15,
        gender : "Male",
        isMarried : false

    },
    {
        firstName : "Mikasa",
        age : 16,
        gender : "Female",
        isMarried :true
    }
]


for(let i = 0; i < allUsers.length ; i++)
{
    if(allUsers[i].isMarried == false)
    {
        console.log(allUsers[i].firstName);
        
    }
}