import {NextApiRequest, NextApiResponse} from "next";
type ValidationProps = {
    validationSchema: any,
    handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
}
type Handler =  (req: NextApiRequest, res: NextApiResponse) => Promise<void>
const withValidation = (validationSchema:any, handler: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('Performing validation');
    try {
        if(validationSchema) {
            await validationSchema.validateAsync(req.body);
        }
        console.log('Validation Passed');
        return handler(req, res)
    } catch (error: any) {
        //return the ValidationError from Joi and display only its details
        return res.status(400).json(error.details);
    }
}

export default withValidation;