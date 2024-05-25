import dotenv from "dotenv";
dotenv.config({ path: "../backend/.env" });

export const PORT = 7000;
/* export const uri = `mongodb+srv://afreenpoly:${process.env.DB_PASSWORD}@studetails.ebwix9o.mongodb.net/?retryWrites=true&w=majority`;
 */
/* 
export const uri = `mongodb+srv://aftab1122:${process.env.DB_PASSWORD}@studetails.ebwix9o.mongodb.net/?retryWrites=true&w=majority`;
 */

export const uri = process.env.MONGODB_URI;
