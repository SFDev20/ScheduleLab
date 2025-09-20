import Image from "next/image";
import "./page.css"

export default function Home() {
  return (
    <div id="Mix-Panel">
      <div id="Drugs-List">
        <button><Image src={"/images/drugs/OGKush.webp"} width={75} height={75} alt="ogkush"/></button>
        <button><Image src={"/images/drugs/SourDiesel.webp"} width={75} height={75} alt="sourdiesel"/></button>
        <button><Image src={"/images/drugs/GreenCrack.webp"} width={75} height={75} alt="greencrack"/></button>
        <button><Image src={"/images/drugs/GranddaddyPurple.webp"} width={75} height={75} alt="granddaddypurple"/></button>
        <button><Image src={"/images/drugs/Meth.webp"} width={75} height={75} alt="meth"/></button>
        <button><Image src={"/images/drugs/Cocaine.webp"} width={75} height={75} alt="cocaine"/></button>
      </div>
      <div id="Additives-List">
      </div>
      <div id="Interactive-Mix">
      </div>
      <div id="Historial-List">
      </div>
    </div>
  );
}
