// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

const challonge = require('challonge')
const client = challonge.createClient({
  apiKey: 'THQwE1NobDxeWTRbAb8ACEtrUV4jDse7C6N7PwvU'
})

export async function handler (event, context) {
  const data = () => {
    client.tournaments.show({
    id: 'n18011',
    callback: (err, data) => {
      console.log(err, data)
      return data
    }
  })
  }
  return {
    status: 200,
    body : data()
}
