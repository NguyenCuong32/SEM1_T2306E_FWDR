import './Image.css';
function Home() {

  return (
    <>
<div>
<img className="boderexam1" src = {"http://genk.mediacdn.vn/k:2015/2-1440133142840/facebook-bat-dau-thu-nghiem-dang-anh-dong-tren-fanpage-va-quang-cao.gif"}/>
</div>
<div>
        <form style={{fontSize:20}}>
        <label>
            <b>Enter your id: </b>
          <input style={{fontSize:20}} type="text" required />
          <br></br> <br></br>
          <b>Enter your name: </b>
          <input style={{fontSize:20}} type="text" required />
        </label>
      </form>
      </div>
      </>
  )
}
export default Home;