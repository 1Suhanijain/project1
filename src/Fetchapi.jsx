import React ,{useState ,useEffect}from 'react'
import axios from 'axios'

import Heading from './Heading'

function Fetchapi() {
    const [address , setaddress] = useState()
    const[address2 , setaddress2] = useState()
    
   useEffect(()=>{ async function Fetchit(){
        let fetch  = await axios.get('https://api.ipify.org?format=json')
           setaddress( fetch.data.ip)
          
           console.log(fetch.data.ip)

    }
    Fetchit()
},[])
useEffect(()=>{ async function Fetchitup(){
  let fetch  = await axios.get('https://api64.ipify.org?format=json')
     setaddress2( fetch.data.ip)
    
     console.log(fetch.data.ip)

}
Fetchitup()
},[])

  return (
    <div className='fetch'>
      {/* <Components address1={address}/> */}
      <Heading address1 = {address} address2 = {address2} />
      {/* {
        address.map((each)=>{
           return(
            <>
            <Components address1={each} />
               console.log({each})
               </>
           )
        }) */}
      {/* } */}
    </div>
  )
}

export default Fetchapi
