import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col h-full text-white">
      <div className="w-7/12 text-left mx-auto text-sm leading-6">
        <h1 className="py-6 text-2xl text-gold font-semibold">Info page</h1>
        <h2 className="font-semibold text-gold">P&P Exclusive Cars</h2>
        <p>Salmgasse 5, 1030 Wien</p>
        <p className="pt-6">Numéro SIREN : 913 361 804</p>
        <p>Centre artisanal Bleu Guimet
            Allée Guimet
        </p>
        <p>69250 Fleurieu sur Saône </p>

        <h2 className="pt-6 font-semibold text-gold">
         Contact: P&P Exclusive Cars
        </h2>
        <p>Tel: + 43 (0) 650 / 4150590</p>
        <p>p.pexclusivecar@gmail.com</p>

        

        <h2 className="pt-10 font-semibold text-gold">Copyright</h2>
        <p>
          Für den Inhalt und für die Richtigkeit ist PvS verantwortlich. Alle
          Texte und Bilder unterliegen dem Copyright. Diese Texte und Bilder
          dürfen ohne Genehmigung von PvS weder kopiert noch auf irgend eine
          andere Weise vervielfältigt werden. Von Texten und Inhalten zu
          verlinkten Seiten distanzieren wir uns und übernehmen keine Haftung
          für deren Inhalte oder Verlinkungen!
        </p>

      
      </div>
    </div>
  );
};

export default Info;
