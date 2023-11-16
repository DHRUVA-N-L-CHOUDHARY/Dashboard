import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const UserTable = () => {
  const data = [
    {
      userName: "Sam Altman",
      email: "samaltman123@gmail.com",
      riskLevel: "Medium",
      triggerReason: "IP Change",
      inQueue: 4,
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "Yes",
      reviewedDate: "23 Aug, 2023",
    },
    {
      userName: "Sameer Choubey",
      email: "sameerchoubey123@gmail.com",
      riskLevel: "High",
      triggerReason: "FIFO",
      inQueue: 4,
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "No",
    },
    {
      userName: "Adarsh Panikkar",
      email: "adarsh@onjuno.com",
      riskLevel: "Low",
      triggerReason: "IP Change",
      inQueue: 5,
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "No",
    },
    {
      userName: "Pratik Shetty",
      email: "pratik3@gmail.com",
      riskLevel: "High",
      triggerReason: "FIFO",
      inQueue: 5,
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "Yes",
      reviewedDate: "12 Sep, 2023",
    },
    {
      userName: "Elon Musk",
      email: "elon@twitterceo.com",
      riskLevel: "Low",
      triggerReason: "FIFO",
      inQueue: 5,
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "Yes",
      reviewedDate: "12 Sep, 2023",
    },
    {
      userName: "Trina Kundu",
      email: "trina@onjuno.com",
      riskLevel: "Low",
      triggerReason: "FIFO",
      inQueue: 5,
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "Yes",
      reviewedDate: "12 Sep, 2023",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table className="text-sm w-full text-gray-500">
        <Thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <Tr>
            <Th className="py-3 px-6 text-center">User</Th>
            <Th className="py-3 px-6 text-center">Risk level</Th>
            <Th className="py-3 px-6 text-center">Trigger reason</Th>
            <Th className="py-3 px-6 text-center">In queue for</Th>
            <Th className="py-3 px-6 text-center">Date added on</Th>
            <Th className="py-3 px-6 text-center">Previously reviewed</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr className="bg-white border text-center" key={index}>
              <Td className="py-4 px-6 border-y flex flex-col items-center justify-center">
                <div>{item.userName}</div>
                <div className="text-xs text-gray-400">{item.email}</div>
              </Td>
              <Td className="py-4 px-6 border-y-2">{item.riskLevel}</Td>
              <Td className="py-4 px-6 border-y-2">{item.triggerReason}</Td>
              <Td className="py-4 px-6 border-y-2">{`${item.inQueue} days`}</Td>
              <Td className="py-4 px-6 border-y-2">{item.dateAdded}</Td>
              <Td className="py-4 px-6 border-y-2">
                {item.previouslyReviewed}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default UserTable;
