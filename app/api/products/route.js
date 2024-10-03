import { NextResponse } from "next/server";
import fs from 'fs';
import path from "path";


export async function GET() {
      
      const dataPath = path.join(process.cwd(), '_data', 'products.json');
      const fileData = fs.readFileSync(dataPath, 'utf8');
      const jsonData = JSON.parse(fileData);

      return NextResponse.json(jsonData);
 
      
}