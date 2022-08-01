import { csvParse } from "d3-dsv";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/material";

interface TableBlockProps {
  csvData: string;
}

interface TableProps {
  block: TableBlockProps;
}

const TableIsInvalid = () => {
  return (
    <Container>
      <div>Table: CSV is invalid</div>
    </Container>
  );
};

export const TableBlock = ({ block }: TableProps) => {
  let parsedCsvData;

  try {
    parsedCsvData = csvParse(block.csvData);
  } catch {
    return <TableIsInvalid />;
  }

  // Add an ID to each row
  const rows = parsedCsvData.map((row, i) => {
    return {
      ...row,
      id: i,
    };
  }) as GridRowsProp;

  // Change the columns so that it fits MUI's
  // DataGrid columns prop
  const columns = parsedCsvData.columns.map((column: string) => {
    return {
      field: column,
      headerName: column,
      width: 150,
    };
  }) as GridColDef[];

  return (
    <div style={{ height: 750, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          borderColor: "divider",
          borderRadius: 0,
          "& .MuiDataGrid-cell": {
            borderColor: "divider",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderColor: "divider",
          },
          "& .MuiDataGrid-footerContainer": {
            borderColor: "divider",
          },
        }}
      />
    </div>
  );
};
