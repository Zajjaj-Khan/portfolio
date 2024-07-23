import {SkillBackground} from "./SkillBackground";

import { Playfair_Display, Poppins } from "@next/font/google";
import ProgramLang from "./Skills/ProgramLang";
import FrontendDev from "./Skills/FrontendDev";
import BackendDev from "./Skills/BackendDev";
import Database from "./Skills/Databases";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});


export function IconCloudDemo() {
  return (
    
    <div className="m-8 pl-8 relative">
      <SkillBackground/>
      <div>
      <h1 className={`text-3xl font-extrabold ${poppins.className}`}>Skills</h1>
      <h3 className={`font-semibold  text-gray-400 md:px-8 py-4 pt-4 ${poppins.className}`}>Programming languages</h3>
      <ProgramLang/>
      <h3 className={`font-semibold  text-gray-400 md:px-8 py-4 pt-4 ${poppins.className}`}>Frontend Development</h3>
      <FrontendDev/>
      <h3 className={`font-semibold  text-gray-400 md:px-8 py-4 pt-4 ${poppins.className}`}>Backend Development</h3>
      <BackendDev/>
      </div>
      <h3 className={`font-semibold  text-gray-400 md:px-8 py-4 pt-4 ${poppins.className}`}>Databases</h3>
      <Database/>
    </div>
  );
}
