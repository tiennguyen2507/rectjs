import React,{useEffect,useRef} from 'react'
import logo from '../assets/images/Logo-2.png'
import {Link ,useLocation} from 'react-router-dom'



const Header = () => {
    const mainNav = [
        {
        display:"Trang chủ",
        path:"/"    
        },
        {
            display:"Sản Phẩm",
            path:"/catalog"  
        },
        {
            display:"Phụ kiện",
            path:"/accessories"  
        },
        {   
            display:"Liên hệ",
            path:"/contact"  
        }
    
    ]

    const {pathname} =useLocation()
    const activeNav = mainNav.findIndex(e=>e.path ===pathname)
    
    const headerRef = useRef(null)
    const menuleft =useRef(null)

    const menuToggle =()=>{
        menuleft.current.classList.toggle('active')
    }



    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if (document.body.scrollTop >80||document.documentElement.scrollTop>80 ) {
                headerRef.current.classList.add('shrink')
                
            }else{
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    },[])




    return (
        <div className="header" ref = {headerRef}>
                <div className="container">
                    <div className="header__logo">
                        <Link to ='/'>
                                <img src={logo} alt=""></img>
                        </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick ={menuToggle}>
                            <i className='bx bx-menu-alt-left'></i>
                    </div>  
                    <div className="header__menu__left " ref = {menuleft} >
                        <div className="header__menu__left__close" onClick ={menuToggle}>
                                <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((value,index)=>(
                                <div key={index} className={` header__menu__left__item   ${index === activeNav ? 'active':''}`}  onClick ={menuToggle}>
                                    <Link to ={value.path}>
                                       <span className='header__menu__item' >
                                           {value.display}
                                       </span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                            <div className="  header__menu__right_item">
                                <Link to ='/cart'>
                                    <i  className="header__menu__item bx bx-search"/>
                                </Link>
                            </div>
                            <div className="header__menu__right_item">
                                <Link to ='/cart'>
                                    <i  className="header__menu__item bx bx-shopping-bag"/>
                                </Link>
                            </div>
                            <div className=" header__menu__right_item">
                                <Link to ='/cart'>
                                     <i  className="header__menu__item  bx bx-user"/>
                                </Link>
                            </div>
                    </div>

                </div>
             
            </div>
       </div>
    )
}

export default Header
