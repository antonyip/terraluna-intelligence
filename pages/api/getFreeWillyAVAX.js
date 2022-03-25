// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
    let returnValue = "";
    let returnStatus = 200;
    
    await axios.get('https://lcd.kujira.app/terra/wasm/v1beta1/contracts/terra1e25zllgag7j9xsun3me4stnye2pcg66234je3u/store?query_msg=eyJiaWRfcG9vbHNfYnlfY29sbGF0ZXJhbCI6eyJjb2xsYXRlcmFsX3Rva2VuIjoidGVycmExejNlMmU0anBrNG4weHp6d2xrZ2NmdmM5NXBjNWxkcTB4Y255NTgiLCJsaW1pdCI6MzF9fQ==').then(reply => {
        returnValue = reply.data;
        
    }).catch(err => {
        returnValue = { error: err }
        returnStatus = 400;
    })

    res.status(returnStatus).json(returnValue)
  }
  