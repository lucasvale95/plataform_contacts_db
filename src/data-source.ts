import { DataSource } from "typeorm"
import 'reflect-metadata'
import "dotenv/config"

const AppDataSource = new DataSource({
	type: 'postgres',
	url: process.env.DB_URI,
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
}
)

export default AppDataSource