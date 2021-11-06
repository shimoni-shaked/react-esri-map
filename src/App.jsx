import "./App.css";
import { EsriMap } from "./components/esri-map/esri-map";

import { setDefaultOptions } from "esri-loader";
// configure esri-loader to use a specific version from the ArcGIS CDN
setDefaultOptions({ version: "4.21" });

function App() {
  return (
    <div className="App">
      <EsriMap center={[-118, 34]}></EsriMap>
    </div>
  );
}

export default App;
