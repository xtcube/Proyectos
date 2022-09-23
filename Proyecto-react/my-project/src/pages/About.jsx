import React from "react";
import SpinningText from "../component/SpinningText";
import PalmarDev from "../component/images/PalmarDev.png";
import Programacion from "../component/images/programacion.png"

function App() {
  return (
    <>
    <SpinningText text="Html Css Js NodeJs React Tailwind WordPress MySql C++ Java Python ">
        <img className="w-60 mb-10" src={PalmarDev} alt="Palmar Dev" />
    </SpinningText>
    <div className="grid grid-cols-2 md:grid-cols-2 justify-items-center text-center p-[100px] border-double border-t-4 border-black mt-8 mx-8 ">
       <h3 className="text-[26px]">VISION</h3>
       <p className="text-[24px]">Volverme imprescindible para aquellos clientes que necesiten expandir sus negocio a la era digital y brindarle total apoyo en este mundo de la tecnología.</p>
       </div>
    <div  className="grid grid-cols-2 md:grid-cols-2 text-center  p-[100px] border-double border-y-4 border-black mx-8 ">
    <h3 className="text-[26px]">MISION</h3>
       <p className="text-[24px]">A pesar de la fuerte competencia de muchos ya diseñadores de web, mi misión es no solo diseñar tu web si no que cuentes con una mano amiga para este mundo.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-2 justify-items-center text-center p-[75px] border-double border-b-4 border-black mx-8">
      <div>
      <img className="w-60 rounded-md mt-25 ml-25" src={Programacion} alt="Programacion" />
      </div>
      <ul className="text-[24px]">
        <li>-Seguridad para ti y tu web</li>
        <li>-Confianza a lo largo del camino</li>
        <li>-Colaboración entre nosotros</li>
        <li>-Creatividad</li>
        <li>-Vanguardismo</li>
        <li>-Optimización</li>
      </ul>
    </div>
    </>
  );
}

export default App;