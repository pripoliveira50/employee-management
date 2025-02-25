import React from "react";
import { FlatList } from "react-native";
import TableHeader from "../table-header";
import TableRow from "../table-row";
import { TableRowProps } from "../table-row/model";

const EmployeeTable = ({ data }: { data: TableRowProps[] }) => {
  return (
    <>
      <TableHeader />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TableRow {...item} />}
      />
    </>
  );
};

export default EmployeeTable;
