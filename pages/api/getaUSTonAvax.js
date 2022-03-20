// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
    let returnValue = "";
    let returnStatus = 200;
    await axios.get('https://api.snowtrace.io/api?module=stats&action=tokensupply&contractaddress=0xaB9A04808167C170A9EC4f8a87a0cD781ebcd55e&apikey=YourApiKeyToken').then(reply => {
        returnValue = reply.data;
        
    }).catch(err => {
        returnValue = { error: err }
        returnStatus = 400;
    })

    res.status(returnStatus).json(returnValue)
  }
  
