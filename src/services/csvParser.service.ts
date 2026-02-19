// ============================================
// PURPOSE: Parse CSV text into structured CSVRow[]
// =======================================

import type { CSVRow } from "../types/csv.types";

export function parseCSV(text: string): CSVRow[]{
    const lines = text.split("\n").filter(line => line.trim() !== "");

    if (lines.length < 2) {
        throw new Error("CSV must contain header and at least one row.");
    }

    const headers = lines[0].split(",").map(h => h.trim());

    const requiredColumns = [
        "orderId",
        "date",
        "productName",
        "category",
        "brand",
        "unitPrice",
        "totalRevenue",
    ];

    requiredColumns.forEach(col => {
        if (!headers.includes(col)) {
            throw new Error(`Missing required column: ${col}`);
        }
    });

    const data: CSVRow[] = [];

    for (let i = 1; i < lines.length; i++){
        const values = lines[i].split(",").map(v => v.trim());

        const row: CSVRow = {
            orderId: values[headers.indexOf("orderId")],
            date: values[headers.indexOf("date")],
            productName: values[headers.indexOf("productName")],
            category: values[headers.indexOf("category")],
            brand: values[headers.indexOf("brand")],
            quantity: Number(values[headers.indexOf("quantity")]),
            unitPrice: Number(values[headers.indexOf("unitPrice")]),
            totalRevenue: Number(values[headers.indexOf("totalRevenue")]),
        };

        data.push(row);
    }
    
    return data;
}