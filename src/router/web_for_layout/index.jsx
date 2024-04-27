import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'

import HEADER from './UI/HEADER'
import FOOTER from './UI/FOOTER'

import Modals from '../../component/modals';
import WebMenu from '../../component/webMenu'

import { useModals } from '../../store/app/modals/hooks';

import { APP_MENU_CONST } from '../../utils/consts/menus/app.menu'


const WEB_FOR_LAY = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  const [pageLast,setPageLast] = useState(false)
  const modals = useModals()
  
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 850) {
        setMenuOpen(false)
      }else{
        setMenuOpen(true)
      }
    };

    const handleScroll = () => {
      var scrollTop = window.scrollY ;
      var documentHeight = document.documentElement.scrollHeight;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
  
      if (Math.floor(scrollTop + windowHeight) +1 >= documentHeight) {
        setPageLast(true)
      }else{
        setPageLast(false)
      }

    }

    handleResize()
    handleScroll()
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  return (
    <>
          <HEADER
            visible={false} 
            open={true}
            menuOpen={
              menuOpen
            } 
          />
            {
              modals.length > 0 &&
              (
                <>
                  {modals.map((modal,index) => <Modals key={index} name={modal.name} modalData={modal} ></Modals>)}
                  <style>
                    {`
                      #root {
                        filter: ${modals ? 'blur(10px)' : 'none'};
                      }
                    `}
                  </style>
                </>
              )
            }

            <Outlet/>

          <FOOTER
            visible={false} 
            open={true}
          />
    </>
  )
}

export default WEB_FOR_LAY
