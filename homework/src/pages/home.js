import './home.css';
function Home() {
    const picture = "https://taimeme.com/public/upload/memes/cho-vang-chi-thang-tay-vao-mat.jpg"
    return (
        <section>
            <div>
            <div>
                <ul class="nav">
                    <li class="nav-product">Product</li>
                    <li class="nav-user">User Information</li>
                </ul>
            </div>
            <div class="h1">
                <div>
                    <img className="profile" src={picture}></img>
                </div>
                <div class="h2">
                    <h3>Full name: Nguyen Ngoc Minh</h3>
                    <h3>Role: Admin.</h3>
                    <h3>Latest login: 10/10/2023 10:00</h3>
                </div>
            </div>
            <div id="footer">
            <footer>
                <b>Address: No 8, Ton That Thuyet</b>
                <div>
                    <h4 class="h4">Zalo</h4>
                    <h4 class="h5">Facebook</h4>
                </div>

            </footer>
            </div>
        </div>
        </section>
    );
}
export default Home