const DownloadCV = () => {
  return (
    <>
      <a
        id="download"
        href="/CV_JimenezLeyva.pdf"
        download="CV_JimenezLeyva.pdf" // nombre sugerido al descargar
        className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-md hover:bg-[#4f5de0] transition"
      >
        Descargar CV
      </a>
      <style jsx>{`
        #download{
          color: #fff !important;
        }
      `}</style>
    </>
    
  );
};

export default DownloadCV;