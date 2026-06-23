import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
import Guitar from '../models/Guitar.model'
dotenv.config()

const db = new Sequelize(process.env.DB_URL!, {
      models: [Guitar],
      dialectOptions: {
            ssl: {
                  require: true,
                  rejectUnauthorized: false // Evita que se rechace la conexión por certificados autofirmados de Render
            }
      }
})

export default db
