import { NextResponse } from "next/server";
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';


export async function GET(_req, { params }) {
      const dataPath = path.join(process.cwd(), '_data', 'products.json');
      const fileData = fs.readFileSync(dataPath, 'utf8');
=======
import { promises as fs } from 'fs';


export async function GET(_req, { params }) {

   try {
      const fileData = await fs.readFileSync('/app/_data/products.json', 'utf8');
>>>>>>> e7df8eb6da9fa0d07089fa7f624cfc936bdbf196
      const jsonData = JSON.parse(fileData).find(item => item.id === parseInt(params.id));

      if(jsonData){
      return NextResponse.json(jsonData);
      } else {
      return NextResponse.json({ error: "Item not found!" }, { status: 404 });
      }

<<<<<<< HEAD
}
=======
   
}
>>>>>>> e7df8eb6da9fa0d07089fa7f624cfc936bdbf196
