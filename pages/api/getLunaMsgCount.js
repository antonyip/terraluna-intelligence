// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
    let returnValue = "";
    let returnStatus = 200;
    await axios.get('https://api.flipsidecrypto.com/api/v2/queries/8dac3e5c-6ea0-41b4-a52b-5d0c4b132f92/data/latest').then(reply => {
        returnValue = reply.data;
        
    }).catch(err => {
        returnValue = { error: err }
        returnStatus = 400;
    })

    res.status(returnStatus).json(returnValue)
  }
  