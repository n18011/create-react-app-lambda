// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

const challonge = require('challonge')
const request = require('superagent')
const client = challonge.createClient({
  apiKey: 'THQwE1NobDxeWTRbAb8ACEtrUV4jDse7C6N7PwvU'
})

/*
const data = () => {
  request.get('https://n18011:THQwE1NobDxeWTRbAb8ACEtrUV4jDse7C6N7PwvU@api.challonge.com/v1/tournaments.json')
  .end((err, res) => {
    console.log(res)
  })
}
*/

export async function handler (event, context, callback) {
  /*
  const data = () => {
    request.get('https://n18011:THQwE1NobDxeWTRbAb8ACEtrUV4jDse7C6N7PwvU@api.challonge.com/v1/tournaments.json')
      .end((err, res) => {
        console.log(res)
      })
  }
  */
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' })
  })
}
