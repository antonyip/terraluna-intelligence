// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
    let returnValue = "";
    let returnStatus = 200;
    await axios.get('https://api.snowtrace.io/api?module=stats&action=tokensupply&contractaddress=0xb599c3590F42f8F995ECfa0f85D2980B76862fc1&apikey=YourApiKeyToken').then(reply => {
        returnValue = reply.data;
        
    }).catch(err => {
        returnValue = { error: err }
        returnStatus = 400;
    })

    res.status(returnStatus).json(returnValue)
  }
  
