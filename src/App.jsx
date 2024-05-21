import './App.css';

// We import other components to be able to use them inside of this component
import Headline from "./components/Headline";
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import Paragraph from './components/Paragraph';
import MenuButton from './components/MenuButton';
import Navbar from './components/Navbar';
import CustomButton from "./components/CustomButton";
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Headline />

      <ImageOne />
      <ImageTwo />
      <ImageThree />

      <Paragraph />

      <MenuButton />
      <CustomButton btnText="EVENTS" url="https://giphy.com/gifs/CCRI-events-ccri-calendar-YMGnCZyNvfQ8b6CnZc" />
      <CustomButton btnText="ORDER ONLINE" url="https://giphy.com/gifs/cashcashmusic-cash-all-my-love-l378kRXG8AKn92Yow" />

    </div>
  );
}
 
export default App;
