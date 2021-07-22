import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLink=[
    {
        display:"Giới thiệu",
        path:'/about'
    },
    {
        display:"Liên hệ",
        path:'/about'
    },
    {
        display:"Tuyển dụng",
        path:'/about'
    },
    {
        display:"Tin tức",
        path:'/about'
    },
    {
        display:"Hệ thống cửa hàng",
        path:'/about'
    },
]
const footerCustomsLink =[
    {
        display:"Chính sách đổi trả",
        path:'/about'
    },
    {
        display:"Chính sách bảo hành",
        path:'/about'
    },
    {
        display:"Chính sách hoàn tiền",
        path:'/about'
    },
]



const Footer = () => {
    return (
        <div className = "footer">
            <Grid
                col={4}
                mdCol ={2}
                smCol = {1}
                gap = {10}
             >
                <div>
                    <div className="footer__title">
                            Tổng đài hổ trợ
                    </div>
                    <div className="footer__content">
                        <p>Liên hệ đặt hàng :<strong>0123456789</strong></p>
                        <p>Thắc mắc liên hệ  :<strong>0123456789</strong></p>
                        <p>Góp ý,khiếu nại : <strong>0123456789</strong></p>
                    </div>
                </div>
                <div>
                    <div className="footer__title">
                            về YoLo
                    </div>
                    <div className="footer__content">
                        {footerAboutLink.map((value,index)=>(
                               <p key ={index} >
                                   <Link to= {value.path}>
                                        <p>{value.display}</p> 
                                   </Link>
                               </p> 

                        ))}
                    </div>
                </div>
                <div>
                    <div className="footer__title">
                            Chăm sóc khách hàng
                    </div>
                    <div className="footer__content">
                        {footerCustomsLink.map((value,index)=>(
                               <p key ={index} >
                                   <Link to= {value.path}>
                                  <p>{value.display}</p> 
                                   </Link>
                               </p> 

                        ))}
                    </div>
                </div>  
                <div className ='footer__about'>
                    <Link to ='/'>
                        <img src={logo} className = "footer__logo" alt="" />
                    </Link>
                    <p>
                        Hướng tới mục tiêu mang lại niềm vui ăn mặt mới hằng ngày cho hàng triệu người tiêu dùng Việt,hãy cùng YoLo hướng tói một cuộc sống năng động,tích cực hơn
                    </p>
                </div>
                



                 
            </Grid>

           
        </div> 
    )
}

export default Footer
