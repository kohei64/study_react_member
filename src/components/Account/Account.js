import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import api from '../api/api'
import AccountItem from './AccountItem'

const Account = () => {
  const { id } = useParams();
  const [account,setAccount]=useState([]);

  React.useEffect(()=>{
    api.get(`/user/${id}`)
      .then((res)=>{
        setAccount(res.data)
      })
  },[]);

  return (
    <div>
      <Navbar />
      <AccountItem  account={account}/>
    </div>
  )
}

export default Account
