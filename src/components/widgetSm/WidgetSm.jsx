import { Visibility } from '@mui/icons-material'
import React from 'react'
import './widgetSm.css'

const WidgetSm = () => {
    return (
        <>
            <div className="widgetSm">
                <span className="widgetSmTitle">New Join Members</span>
                <ul className="widgetSmList">
                    <li className="widgetListItem">
                        <img src="../../images/IMG_20210517_100223_627.jpg" alt="Avatar" className="widgetSmImage" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Suraj Mishra</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/>
                            Display
                        </button>
                    </li>
                    <li className="widgetListItem">
                        <img src="../../images/IMG_20210517_100223_627.jpg" alt="Avatar" className="widgetSmImage" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Ashish Pandey</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/>
                            Display
                        </button>
                    </li>
                    <li className="widgetListItem">
                        <img src="../../images/IMG_20210517_100223_627.jpg" alt="Avatar" className="widgetSmImage" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Utkarsh Kumar</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/>
                            Display
                        </button>
                    </li>
                    <li className="widgetListItem">
                        <img src="../../images/IMG_20210517_100223_627.jpg" alt="avatar" className="widgetSmImage"/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Ashish Yadav</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/>
                            Display
                        </button>
                    </li>
                    <li className="widgetListItem">
                        <img src="../../images/IMG_20210517_100223_627.jpg" alt="avatar" className="widgetSmImage" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Shipendra Dubey</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/>
                            Display
                        </button>
                    </li>
                    <li className="widgetListItem">
                        <img src="../../images/IMG_20210517_100223_627.jpg" alt="avatar" className="widgetSmImage" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Obaidur Rahman</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/>
                            Display
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default WidgetSm
