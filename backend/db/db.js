import pg from 'pg';
import dotenv from 'dotenv'
dotenv.config()
const db=new pg.Client({
    user: ,
    host: process.env.PGHOST,
    database: process.env.DATABASE,
    password:process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: {
        rejectUnauthorized: false // or provide certificate
      }
})

async function connection()
{
    try
    {
        await db.connect();
        console.log(`db connected ${process.env.PGPORT}`);
    }
      catch(error)
    {
        console.log(" database filed to connect",error.message)
        process.exit(0);
    }
}

export {connection,db}
