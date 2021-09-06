import {executeQuery} from "../../../lib/db";
import {PageType} from "../../types";

export const getAllPagesApi = async ()=> {
    try {
       return await executeQuery({
            "query": 'SELECT * FROM pages',
            "values": [],
        });
    } catch (error) {
        console.log(error);
    }
}

export const createNewPageApi = async (page:PageType) =>{
    try{
        console.log('Attempting');
        const x = await executeQuery({
            "query": "INSERT INTO pages (name , description) VALUES (?, ?)",
            "values" : [page.name, page.description ?? ""]
        });
        console.log(x);
    }
    catch (error){
        console.error(error);
    }
}