import executeScriptOnActiveTab from "../utils/executeScriptOnActiveTab";

const zoomIn = () => {
  console.log("here");
  executeScriptOnActiveTab(() => {
    const step = 10;
    // @ts-ignore
    const zoomString = document.body.style.zoom;
    let currentZoom =
      zoomString === ""
        ? 100
        : Number(zoomString.slice(0, zoomString.length - 1));

    const updatedZoom = currentZoom + step;
    const updatedZoomString = `${updatedZoom}%`;

    if (updatedZoom >= 210) return "MAX ZOOM REACHED";

    // @ts-ignore
    document.body.style.zoom = updatedZoomString;
    return updatedZoomString;
  });
};

export default zoomIn;
