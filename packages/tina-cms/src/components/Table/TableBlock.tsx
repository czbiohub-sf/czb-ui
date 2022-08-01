import { csvParse } from "d3-dsv";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";

interface TableBlockProps {
  csvData: string;
}

interface TableProps {
  block: TableBlockProps;
}

export const TableBlock = ({ block }: TableProps) => {
  let parsedCsvData;

  try {
    parsedCsvData = csvParse(block.csvData);
  } catch {
    return (
      <Container>
        <div>CSV is invalid</div>
      </Container>
    );
  }

  console.log(parsedCsvData);

  return <div></div>;
};
