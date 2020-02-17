const env = process.env.NODE_ENV || 'development'

const config = {
  env,
  isDev: env === 'development',
  port: 4000,
  dbUrl: 'mongodb://localhost:27017/events-app'
}

export default config
