// Configuracion
import config from './config.json'

// Intefaces
interface Idb {
  dialect: string
  host: string
  port: number
  database: string
  username: string
  password: string
}

interface Isecurity {
  secretKey: string
  expire: string
}

interface Iserver {
  port: number
}

const { db, security, server } = config

export const $db: Idb = db
export const $security: Isecurity = security
export const $server: Iserver = server
