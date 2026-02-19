import React, { useState } from "react";
import { processFile } from "./services/fileProcessor.service";
import type { CSVRow } from "./types/csv.types";

function App() {
  const [data, setData] = useState<CSVRow[]>([]);
  const [error, setError] = useState<string>("");

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const parsed = await processFile(file);
      setData(parsed);
      setError("");
    } catch (err: any) {
      setError(err.message);
      setData([]);
    }
  };
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Retail Analytics Dashboard</h1>

      <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data.length > 0 && (
        <div>
          <h3>Parsed Rows: {data.length}</h3>
          <pre>{JSON.stringify(data.slice(0, 3), null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App
