import { NextResponse } from "next/server";
import fs from 'fs';


export async function GET(_req, { params }) {

   try {
      const fileData = fs.readFileSync('/app/_data/products.json', 'utf8');
      const jsonData = JSON.parse(fileData).find(item => item.id === parseInt(params.id));

      if(jsonData){
      return NextResponse.json(jsonData);
      } else {
      return NextResponse.json({ error: "Item not found!" }, { status: 404 });
      }
   } catch (error) {
      console.error("Error reading or parsing file:", error);
      return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
   

   
}