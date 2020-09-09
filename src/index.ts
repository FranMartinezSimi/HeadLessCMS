// Dependencias
import { ApolloServer, makeExecutableSchema } from 'apollo-server'
// Models
import models from './models'

// Types Definitions
const typeDefs = `
  type hello {
    message: String!
  }
  type Query {
    sayHello(name: String!): Hello
  }
`
// Resolvers

const resolvers = {
  Query: {
    sayHello: (_: any, args: any): any => {
      return {
        message: `Hello ${args.name || 'world'}`
      }
    }
  }
}

// Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// Apollo Server

const apolloServer = new ApolloServer({
  schema,
  constext: {
    models
  }
})

models.sequelize.sync({ alter: true, force: true }).then(() => {
  // eslint-disable-next-line no-console
  apolloServer.listen(5000).then(({ url }) => console.log(`running on ${url} `))
})
