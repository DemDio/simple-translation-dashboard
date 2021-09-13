import {Page} from '@prisma/client';
import axios from "axios";

export const createNewPageApi = async (page: Page) =>{
    await axios.post('api/pages/').then(e => console.log(e)).catch(e=> console.error(e))
}