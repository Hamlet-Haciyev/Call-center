import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const BankCard = () => {
  const data = [
    {
      contractNumber: 1243412,
      price: 12345,
      debtBalance: 123,
      accountBalance: 76825,
      nextPayDate: "12.12.2022",
      nextPayPrice: 76825,
      filial: "Expressbank ASC",
      specialist: "Lorem",
    },
  ];
  return (
    <TableContainer>
      <Table aria-label="scrollable table">
        <TableHead>
          <TableRow>
            <TableCell>Müqavilə nömrəsi</TableCell>
            <TableCell>Müqavilə nömrəsi</TableCell>
            <TableCell>Müqavilə məbləği</TableCell>
            <TableCell>Əsas borc qalığı</TableCell>
            <TableCell>Hesab qalığı</TableCell>
            <TableCell>Növbəti ödəniş tarixi</TableCell>
            <TableCell>Növbəti ödəniş məbləği</TableCell>
            <TableCell>Gecikmiş ödəniş məbləği</TableCell>
            <TableCell>Filial</TableCell>
            <TableCell>Mütəxəssis</TableCell>
            <TableCell>Ödəniş cədvəli</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.contractNumber}</TableCell>
              <TableCell>{row.contractNumber}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.debtBalance}</TableCell>
              <TableCell>{row.accountBalance}</TableCell>
              <TableCell>{row.nextPayDate}</TableCell>
              <TableCell>{row.nextPayPrice}</TableCell>
              <TableCell>{row.overduePaymentAmount}</TableCell>
              <TableCell>{row.filial}</TableCell>
              <TableCell>{row.specialist}</TableCell>
              <TableCell>{row.paymentBoard}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BankCard;
