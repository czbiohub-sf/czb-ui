interface TableBlockProps {
  csvData: string;
}

interface TableProps {
  block: TableBlockProps;
}

export const TableBlock = ({ block }: TableProps) => {
  return <div>{JSON.stringify(block.csvData)}</div>;
};
