import React from 'react';

interface TableProps {
  columns: string[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="px-4 py-2 bg-gray-200 text-left">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td key={index} className="border px-4 py-2">{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
