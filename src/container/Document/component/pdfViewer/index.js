import React from "react";
import PDF from "../../../../assets/files/pdf/Müştərinin siyahısı.pdf";
const PDFViewer = () => {
  return (
    <embed src={PDF} type="application/pdf" height={630} width={"100%"} style={{borderRadius:"12px"}}/>
  );
};

export default PDFViewer;
