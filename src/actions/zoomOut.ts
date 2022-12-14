import executeScriptOnActiveTab from "../utils/executeScriptOnActiveTab";

const zoomOut = () => {
  executeScriptOnActiveTab(() => {
    const step = 10;
    // @ts-ignore
    const zoomString = document.body.style.zoom;
    let currentZoom =
      zoomString === ""
        ? 100
        : Number(zoomString.slice(0, zoomString.length - 1));

    const updatedZoom = currentZoom - step;
    const updatedZoomString = `${updatedZoom}%`;

    if (updatedZoom <= 0) return "MIN ZOOM REACHED";

    // @ts-ignore
    document.body.style.zoom = updatedZoomString;
    return updatedZoomString;
  });
};

export default zoomOut;
