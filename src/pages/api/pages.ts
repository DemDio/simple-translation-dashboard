import {NextApiRequest, NextApiResponse} from "next";
import {Prisma} from "../../components/Prisma";
import withValidation from "../../utils/middleware/validation";

const prismaClient = Prisma.prismaClient();
const Joi = require('joi');

const validationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow('').optional(),
    projectId: Joi.required()
})

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({message: 'Method not allowed'});
    }
    try {
        const savedContact = await prismaClient.page.create({
            data: req.body
        })
        return res.json(savedContact);
    } catch (e) {
        return res.json(e);
    }
}

export default withValidation(validationSchema, handler);