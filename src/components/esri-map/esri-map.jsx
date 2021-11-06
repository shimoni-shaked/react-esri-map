import "./esri-map.css";
import { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";

import {
  //////// create a map or Scene
  //   useMap,
  useScene,
  //   useWebMap,
  //   UseWebScene,
  //   userEvent,
  //////// handles events
  useEvents,
  //   useWatch,
  useWatches,
  //////// add graphics to map/Scene
  //   useGraphic,
  //   useGraphics,
} from "esri-loader-hooks";

export const EsriMap = ({ basemap, center }) => {
  const [zoom, setZoom] = useState(8);
  useEffect(() => {
    if (zoom >= 5) console.log("this is below 5");
  }, [zoom]);

  ////// logs callback
  const logEventsChange = useCallback((e) => {
    console.log(`Last event: ${e.type}.`, e);
  }, []);
  const logPropertyChange = useCallback((newValue, oldValue, propertyName) => {
    if (propertyName === "zoom") {
      setZoom(newValue);
    }
    console.log(propertyName, newValue);
  }, []);

  // create scene
  const mapProps = { basemap: basemap };
  const viewProps = {
    center: center,
    zoom: zoom,
  };
  // returns a ref you can use to assign a container DOM node
  // and returns the map view instance, which you can pass to other hooks
  const [mapRef, view] = useScene(mapProps, viewProps);

  // wire up the events
  const events = [
    // "pointer-enter",
    // "pointer-leave",
    // "pointer-move",
    // "pointer-down",
    // "pointer-up",
    // "immediate-click",
    "click",
    // "double-click",
    // "mouse-wheel",
    // "drag",
    // "hold",
    // "key-down",
    // "key-up",
    // "focus",
    // "blur",
    // "resize",
    // 'layerview-create',
    // 'layerview-destroy'
  ];
  useEvents(view, events, logEventsChange);
  // wire up the property watches
  const properties = [
    // "focused",
    // "interacting",
    // "updating",
    // "ready",
    // "resolution",
    // "scale",
    "zoom",
    // "stationary",
  ];
  useWatches(view, properties, logPropertyChange);

  return <div className="esri-map" ref={mapRef} />;
};

EsriMap.propTypes = {
  center: PropTypes.array.isRequired,
};
EsriMap.defaultProps = {
  basemap: "topo-vector",
};
