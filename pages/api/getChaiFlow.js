// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
    let returnValue = "";
    let returnStatus = 200;
    await axios.get('https://api.flipsidecrypto.com/api/v2/queries/4c6c6e38-eec6-4e0c-9185-8ed8615590cc/data/latest').then(reply => {
        returnValue = reply.data;
        
    }).catch(err => {
        returnValue = { error: err }
        returnStatus = 400;
    })

    res.status(returnStatus).json(returnValue)
  }
  