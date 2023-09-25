import './index.css';

function Navigation() {
    return (         /* ===2 NÚT=== */
        <diV className='All'>
            <div className='Top'>
                <div className='Product'><h>Product</h></div>
                <div className='Information'><h>User Information</h></div>
            </div>
                   {/* ============== */}

            <div className='Avatar'> {/* AVATA & THÔNG TIN NGƯỜI DÙNG*/}
                <div className='Anhdaidien'><img className='avata' src='https://1.bp.blogspot.com/-g5X5RMt3qc4/YM9SQzzU7YI/AAAAAAAAARs/7JEMykTnSSoxjEKzmvDl6bnyggSZgLSkgCLcBGAsYHQ/s0/Anh-avatar-cho-con-trai-Taihinhanh-vn%2B%25284%2529.jpg'></div>
                <div className='TTnguoidung'>
                    <h>Full name: <span className='name'> <i>Nguyen Van A</i></span></h>
                    <br />
                    <br />
                    <h>Role: <span className='name'><i>Admin</i></span></h>
                    <br />
                    <br />
                    <h>Lastest Login: <span className='name'><i>10/10/2023 10:00</i></span></h>
                </div>
            </div>
                        {/* ============= */}
            <footer>
                <div class="Footer">  {/* FOOTER*/}
                    <div className="address">Address: No 8, Ton That Thuyet, Ha Noi</div>
                    <div className="facebook"> <a href="https://www.facebook.com/" className='footer' >facebook</a></div>
                    <div className="zalo"> <a href="https://www.zalo.me/pc" className='footer' >zalo</a></div>

                </div>
            </footer>
        </diV>

    );
}
export default Navigation;