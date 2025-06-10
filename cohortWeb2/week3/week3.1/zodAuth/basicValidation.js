const zod = require("zod")

function validateInpute(arr)
{
    const schema = zod.array(zod.number())

    const responce = schema.safeParse(arr)

    console.log(responce)
}

validateInpute([1, 2, 3])