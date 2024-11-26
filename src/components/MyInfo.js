import React from "react";
import mypic from 'C:/Users/msgal/my-app/src/KakaoTalk_20240721_180926578_06.jpg'

function MyInfo() {

    return (
        <div className="current-time">
            <h1>
                최지원
            </h1>
            <img src={mypic} alt="사진" className="photo" />

        </div>
    );
}
export default MyInfo;