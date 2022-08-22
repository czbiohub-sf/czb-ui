import { csvParse } from "d3-dsv";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbarExport,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { Container, Box, useMediaQuery, useTheme } from "@mui/material";

interface TableBlockProps {
  csvData: string;
  inContainer?: boolean;
  allowDownload?: boolean;
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

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
    </GridToolbarContainer>
  );
}

export const TableBlock = ({ block }: TableProps) => {
  const theme = useTheme();
  // If on a smaller screen, make the height shorter as filling
  // the screen with the table makes scrolling the
  // actual page (not the table) harder
  const smallerScreen = useMediaQuery(theme.breakpoints.down("lg"));

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

  const TableComponent = () => {
    return (
      <Box sx={{ height: smallerScreen ? 500 : 750, width: "100%", my: 5 }}>
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
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "fontWeightBold",
            },
            "& .MuiDataGrid-footerContainer": {
              borderColor: "divider",
            },
          }}
          components={{
            Toolbar: block.allowDownload ? CustomToolbar : undefined,
          }}
        />
      </Box>
    );
  };

  if (block.inContainer) {
    return (
      <Container>
        <TableComponent />
      </Container>
    );
  }

  return <TableComponent />;
};
