// ============================================
// PURPOSE: Detect file type and route to correct parser
// ============================================

import { parseCSV } from "./csvParser.service";
import { parseExcel } from "./excelParser.service";
import type { CSVRow } from "../types/csv.types";

export async function processFile(file: File): Promise<CSVRow[]>{
    const fileName = file.name.toLowerCase();

    if (fileName.endsWith(".csv")) {
        const text = await file.text();
        return parseCSV(text);
    }

    if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
        return parseExcel(file);
    } 

    throw new Error("Unsupported file format. Please upload CSV or Excel file.")
}