import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core"; // install this library
import pdffile from "../../assets/sbi.pdf";
import React, { useState } from "react";
function Reader() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile] = useState(pdffile);

  return (
    <div className="pdf-container">
      {pdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </>
      )}
    </div>
  );
}

export default Reader;
