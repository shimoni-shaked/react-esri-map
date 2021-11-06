import "./App.css";
import { EsriMap } from "./components/esri-map/esri-map";

function App() {
  return (
    <div className="App">
      <EsriMap center={[-118, 34]}></EsriMap>
    </div>
  );
}

export default App;
