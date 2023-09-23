import LikeCounter from './components/like';
// import DislikeCounter from './components/dislike';
import './App.css';
import DislikeCounter from './components/dislike';

function App() {
  return (
    <div className='buttons'>
      <LikeCounter></LikeCounter>
      <DislikeCounter></DislikeCounter>
    </div>
  );
}

export default App;
