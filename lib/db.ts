import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT || ""),
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    }
});
type ExecuteQuery = {
    query: string,
    values: string[] | string
}
/**
 *
 * @param query
 * @param values
 */
export const executeQuery = async ({query, values}: ExecuteQuery) => {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return {error};
    }
}