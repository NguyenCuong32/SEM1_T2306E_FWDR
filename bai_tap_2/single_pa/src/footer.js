import React from 'react'
import './footer.css'
function footer(){
    return(
        <React.Fragment  >
            <address className="footer" >Address:No.8, Ton That Thuyet 
                    <a className='zl mxh'href='https://zalo.me' target='black'>zalo</a>
                    <a className='fb mxh' href="https://www.facebook.com" target='black'>facebook</a>
            </address>
        </React.Fragment>

    )
};
export default footer;