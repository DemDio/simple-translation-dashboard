import { PrismaClient} from "@prisma/client";

export const Prisma = (() => {
    let client: PrismaClient
    function setClient() {
        client = new PrismaClient()
    }

    function prismaClient() {
        if (!client) {
            console.log('Creating Client');
            setClient();
        }
        return client;
    }

    return {
        prismaClient
    }
})()