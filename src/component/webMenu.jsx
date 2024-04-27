import React,{useState,useEffect} from 'react'
import { Link ,useLocation} from 'react-router-dom'

import Hr from '../component/hr'
import XButton from './buttons/x-button'
import IconGenerate from './iconGenerate'

/*function WebMenu({children,...props}) {
  const {menuList,...rest} = props
  let SLICED_APP_MENU_CONST;
  const appMenuMaxLenght = 5
  let appMenuExtra = false;


  if(menuList?.length > 0){
    if(menuList.length >= appMenuMaxLenght){
      SLICED_APP_MENU_CONST = menuList.slice(0,appMenuMaxLenght);
      appMenuExtra = true
    }else{
      SLICED_APP_MENU_CONST = menuList;
      appMenuExtra = false
    } 
  }else{
    SLICED_APP_MENU_CONST = []
  }


  return (
    
    <div className='webMenu'>
      <ul className='p-0'>
        {
          
          SLICED_APP_MENU_CONST.map((item,index)=>{
            return(
            <>
              <li><XButton to={item?.path}>{item?.title}</XButton></li>
              {
                (SLICED_APP_MENU_CONST.length === index +1) ? null : <Hr position='vertical' size="50%" key={index}/>
              }
            </>
            )
          })
        }
        { appMenuExtra &&
          <>
            <Hr position='vertical' size="50%"/>
            <li><Link><XButton icon={'BiMenu'}></XButton></Link></li>
          </>
        }

      </ul>
    </div>
  )
}*/

function WebMenu({children,...props}) {
  const {menuList,...rest} = props
  const location = useLocation()
  const [activePath,setActivePath] = useState()

  useEffect(() => {

    if(location.pathname.length === 1){
        setActivePath(location.pathname)
    }else{
      setActivePath(location.pathname.slice(1))
    }

    
  }, [location.pathname]);

  return (
    
    <div className='webMenu'>
      <ul className='p-0'>
        {
          
          menuList.map((item,index)=>{
            return(
            <>
              <li><XButton className={activePath?.includes(item.path) ? 'actived' : ''} to={item?.path}>{item.icon ? <IconGenerate icon={item.icon} /> : item?.title}</XButton></li>
              {
                (menuList.length === index +1) ? null : <Hr position='vertical' size="50%" key={index}/>
              }
            </>
            )
          })
        }

      </ul>
    </div>
  )
}

export default WebMenu