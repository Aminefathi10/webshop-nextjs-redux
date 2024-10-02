import { NextResponse } from "next/server";
import fs from 'fs';
import path from "path";


export async function GET() {
   try {
      const filePath = path.join(process.cwd(), 'public', 'products.json');
      const fileData = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(fileData);

      return NextResponse.json(jsonData);
   } catch (error) {
      console.error("Error reading or parsing file:", error);
      return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
   
}