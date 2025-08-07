import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();
async function updateUser(email, { firstName, lastName }) {
    const res = await prisma.user.update({
        where: { email },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);
}
updateUser("Hikaru@gmail.com", { firstName: "Magnus", lastName: "carlsen" });
//# sourceMappingURL=index.js.map