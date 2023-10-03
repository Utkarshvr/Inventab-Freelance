import { useState } from "react";
import { read, utils } from "xlsx";

function ExcelDataExtractor() {
  const [excelData, setExcelData] = useState(null);
  console.log({ excelData });
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // Assuming the first sheet
        const sheet = workbook.Sheets[sheetName];
        const extractedData = utils.sheet_to_json(sheet, { header: 1 });
        setExcelData(extractedData);
      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {excelData && (
        <table>
          <thead>
            <tr>
              {excelData[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExcelDataExtractor;
