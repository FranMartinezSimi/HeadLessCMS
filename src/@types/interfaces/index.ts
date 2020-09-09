// Sequelize
export interface iDataTypes {
  UUID: string
  UUIDV4(): string
  STRING: string
  BOOLEAN: boolean
}

// App
type App = {
  appName: string
  icon: string
  description: string
}

export interface iApp extends App {
  id: string
  createAt: Date
  updateAt: Date
}

type User = {
  username: string
  password: string
  email: string
  privilege: string
  active: boolean
}

// Models
export interface iModels {
  App: any
  User: any
  sequelize: any
}
