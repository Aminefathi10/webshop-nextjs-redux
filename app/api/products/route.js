import { NextResponse } from "next/server";
import { promises as fs} from 'fs';


export async function GET() {
   try {
      const fileData = await fs.readFileSync('/app/_data/products.json', 'utf8');
      const jsonData = JSON.parse(fileData);

      return NextResponse.json(jsonData);
   } catch (error) {
      console.error("Error reading or parsing file:", error);
      return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
   
}