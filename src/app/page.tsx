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
        <button><Image src={"/images/additives/Addy.webp"} width={70} height={70} alt="ogkush"/></button>
        <button><Image src={"/images/additives/Banana.webp"} width={70} height={70} alt="sourdiesel"/></button>
        <button><Image src={"/images/additives/Battery.webp"} width={70} height={70} alt="greencrack"/></button>
        <button><Image src={"/images/additives/Chili.webp"} width={70} height={70} alt="granddaddypurple"/></button>
        <button><Image src={"/images/additives/Cuke.webp"} width={70} height={70} alt="meth"/></button>
        <button><Image src={"/images/additives/Donut.webp"} width={70} height={70} alt="cocaine"/></button>
        <button><Image src={"/images/additives/Energy_Drink.webp"} width={70} height={70} alt="ogkush"/></button>
        <button><Image src={"/images/additives/Flu_Medicine.webp"} width={70} height={70} alt="sourdiesel"/></button>
        <button><Image src={"/images/additives/Gasoline.webp"} width={70} height={70} alt="greencrack"/></button>
        <button><Image src={"/images/additives/HorseSemen.webp"} width={70} height={70} alt="granddaddypurple"/></button>
        <button><Image src={"/images/additives/Iodine.webp"} width={70} height={70} alt="meth"/></button>
        <button><Image src={"/images/additives/Mega_Bean.webp"} width={70} height={70} alt="cocaine"/></button>
        <button><Image src={"/images/additives/Motor_Oil.webp"} width={70} height={70} alt="greencrack"/></button>
        <button><Image src={"/images/additives/Mouth_Wash.webp"} width={70} height={70} alt="granddaddypurple"/></button>
        <button><Image src={"/images/additives/Paracetamol.webp"} width={70} height={70} alt="meth"/></button>
        <button><Image src={"/images/additives/Viagra.webp"} width={70} height={70} alt="cocaine"/></button>
      </div>
      <div id="Interactive-Mix">
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div id="Historial-List">
      </div>
    </div>
  );
}
