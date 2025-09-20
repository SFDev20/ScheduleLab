"use client"
import Image from "next/image";
import "./page.css"
import { FaPlus } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import drug_list from "../data/drug-list"
import additives_list from "../data/additives-list"
import combinations_list from "@/data/combinations-list";

export default function Home() {
  const [drug,setDrug] = useState(-1)
  const [additive,setAdditive] = useState(-1)
  const handleSetDrug = (index: number) => {
    if(index === drug){
      setDrug(-1)
    }else{
      setDrug(index)
    }
  }
  const handleSetAdditive = (index: number) => {
    if(index === additive){
      setAdditive(-1)
    }else{
      setAdditive(index)
    }
  }
  return (
    <div id="Mix-Panel">
      <div id="Drugs-List">
        {drug_list.map((drug_item, i: number) => (
          <button 
            style={{outline: (drug == i ? "3px solid green" : undefined)}}
            onClick={()=>handleSetDrug(i)}
            key={i}>
            <Image src={`/images/drugs/${drug_item.item}.webp`}
              width={70}
              height={70}
              alt={drug_item.item}/>
          </button>
        ))}
      </div>
      <div id="Additives-List">
        {additives_list.map((additive_item, i: number) => (
          <button
            style={{outline: (additive == i ? "3px solid green" : undefined)}}
            onClick={()=>handleSetAdditive(i)}
            key={i}>
            <Image src={`/images/additives/${additive_item.item}.webp`}
              width={70}
              height={70}
              alt={additive_item.item}/>
          </button>
        ))}
      </div>
      <div id="Interactive-Mix">
        <button>
          {drug != -1 ? 
            <Image
              alt={drug_list[drug].item}
              width={75}
              height={75}
              src={`/images/drugs/${drug_list[drug].item}.webp`}
              /> : ""}
        </button>
        <FaPlus style={{fontSize:"28px", color:"rgba(255,255,255,0.4)"}}/>
        <button>
          {additive != -1 ?
            <Image
              alt={additives_list[additive].item}
              width={75}
              height={75}
              src={`/images/additives/${additives_list[additive].item}.webp`}
            /> : ""}
        </button>
        <FaLongArrowAltRight style={{fontSize:"28px", color:"rgba(255,255,255,0.4)"}}/>
        <button>
          { additive != -1 && drug != -1 ?
        <p>{combinations_list[drug_list[drug].effect][additives_list[additive].item]}</p> : undefined}
        </button>
      </div>
      <div id="Historial-List">
      </div>
    </div>
  );
}
