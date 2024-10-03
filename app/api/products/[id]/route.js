import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';


export async function GET(_req, { params }) {
      const dataPath = path.join(process.cwd(), '_data', 'products.json');
      const fileData = fs.readFileSync(dataPath, 'utf8');


      const jsonData = JSON.parse(fileData).find(item => item.id === parseInt(params.id));

      if(jsonData){
      return NextResponse.json(jsonData);
      } else {
      return NextResponse.json({ error: "Item not found!" }, { status: 404 });
      }
}
