
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
    let returnValue = "";
    let returnStatus = 200;
    const { currency } = req.query;
    await axios.get('https://api.coingecko.com/api/v3/coins/'+currency+'/market_chart?vs_currency=usd&days=30&interval=daily').then(reply => {
        returnValue = reply.data;
        
    }).catch(err => {
        returnValue = { error: err }
        returnStatus = 400;
    })

    res.status(returnStatus).json(returnValue)
  }
  