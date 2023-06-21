import Colorpicker from "./Components/Colorpicker";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#800080', '#ffa500', '#008000', '#ff69b4'];
  return (
    <div className="App">
      <Colorpicker colors={colors}/>
    </div>
  );
}

export default App;