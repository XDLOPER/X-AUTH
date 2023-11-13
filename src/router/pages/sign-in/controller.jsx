import axios from 'axios'

export const onClickHandler = async (authForm,setLogin,target,e) =>{
        switch(target){
          case 'login':
            await axios.post('/auth/login',authForm).then(
              (res)=>{
    
                localStorage.setItem('auth',res.data)
                console.log('Response:', res.data);
                
              }
            ).catch((error)=>console.error(error.response.data) )
          break;
          case 'register':
            await axios.post('/auth/register',authForm).then(
              (res)=>{
                setLogin(true)
                console.log('Response:', res.data);
              }
            ).catch((error)=>console.error(error.response.data))
          break;
        }
}