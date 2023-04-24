import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Signout() {
  const navigate = useNavigate();
  useEffect(()=>{
    sessionStorage.removeItem('userAccount');
    navigate("/Licenta/");
  },[]);

  return (<></>);
}

export default Signout