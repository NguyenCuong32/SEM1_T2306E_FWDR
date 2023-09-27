import React from 'react';
import './baitap.css';
function Product() {
    return (
        <body>
            <section>
                <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/06/30153938/bts-jungkook-lesser-known-facts-golden-maknae-busan-prince-age-girlfriend-songs-806x806.jpg" alt="Jungbook"></img>
                <div className='title'>
                    <h3>Fullname:</h3>
                    <h3>Role:</h3>
                    <h3>Latest Login:</h3>
                </div>
                <div className='content'>
                    <p><i>Nguyen Van A</i></p>
                    <p><i>Admin.</i></p>
                    <p><i>10/10/2023  10:00</i></p>
                </div>

            </section>

            <footer>
                <address>Address: No 8, Ton That Thuyet</address>
                <p className="face">Facebook</p>
                <p className="zalo">Zalo</p>
            </footer>
        </body>

    );
}
export default Product;