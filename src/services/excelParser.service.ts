// ============================================
// PURPOSE: Parse Excel file into structured CSVRow[]
// ============================================

import * as XLSX from "xlsx";
import type { CSVRow } from "../types/csv.types";

export async function parseExcel(file: File): Promise<CSVRow[]>{
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer);

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json<any>(worksheet);

    return jsonData.map(row => ({
        orderId: row.orderId,
        date: row.date,
        productName: row.productName,
        category: row.category,
        brand: row.brand,
        quantity: Number(row.quantity),
        unitPrice: Number(row.unitPrice),
        totalRevenue: Number(row.totalRevenue),
    }));

}

