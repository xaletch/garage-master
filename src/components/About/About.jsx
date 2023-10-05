import React from 'react'
import './About.scss'
import link_img from '../../img/link_img'
export default function About() {
    return (
        <div className='About mainWidht'>
            <div className="aboutCard">
                <div className="img">
                    <img src={link_img.caseIco} alt="" />
                </div>
                <div className="desc">
                    <div className="title">Кейсы</div>
                    <span>890 690 680</span>
                </div>
            </div>
            <div className="aboutCard">
                <div className="img">
                    <img src={link_img.documentIco} alt="" />
                </div>
                <div className="desc">
                    <div className="title">Контракты</div>
                    <span>890 690 680</span>
                </div>
            </div>
            <div className="aboutCard">
                <div className="img">
                    <img src={link_img.upArrow} alt="" />
                </div>
                <div className="desc">
                    <div className="title">Апгрейды</div>
                    <span>890 690 680</span>
                </div>
            </div>
            <div className="aboutCard">
                <div className="img">
                    <img src={link_img.users} alt="" />
                </div>
                <div className="desc">
                    <div className="title">Пользователей</div>
                    <span>890 690 680</span>
                </div>
            </div>
            <div className="aboutCard">
                <div className="img">
                    <img src={link_img.user2} alt="" />
                </div>
                <div className="desc">
                    <div className="title">Онлайн</div>
                    <span>1111</span>
                </div>
            </div>
        </div>
    )
}
