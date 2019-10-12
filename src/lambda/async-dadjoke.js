// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from 'axios'
const challonge = require('challonge')
const client = challonge.createClient({
  apiKey: 'THQwE1NobDxeWTRbAb8ACEtrUV4jDse7C6N7PwvU'
})

export async function handler (event, context) {
  try {
    const res = await client.tournaments.show({
      id: 'n18011test',
      callback: (err, data) => {
        console.log(data)
        return data
      }
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: res })
    }

    /*
    const response = await axios.get('https://api.challonge.com/v1/tournaments.json', { headers: { Accept: 'application/json', api_key: 'THQwE1NobDxeWTRbAb8ACEtrUV4jDse7C6N7PwvU' } })
    const data = response.data
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data })
    }
    */
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
