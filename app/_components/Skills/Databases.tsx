import React from "react";
import { Badge } from "@/components/ui/badge";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
function Database() {
  return (
    <div className="pt-4 md:p-8 md:pt-0">
      <Badge variant="secondary" className="px-6 py-2 my-2">
        MySql
        <SiMysql size={20}  className="ml-2" />
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">
        PostgreSql
        <BiLogoPostgresql size={20} color="blue" className="ml-2" />
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">
        MongoDB
        <SiMongodb size={20} color="green" className="ml-2" />
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">
        Firebase
        <SiFirebase size={20} className="ml-2" color="orange" />
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">
        Supabase
        <SiSupabase size={20} className="ml-2" color="green" />
      </Badge>
    </div>
  );
}

export default Database;
