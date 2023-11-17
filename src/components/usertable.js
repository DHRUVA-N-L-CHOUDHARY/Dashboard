import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import TableData from '../data/data.json'
import { FiExternalLink } from "react-icons/fi";

const UserTable = () => {

  console.log(TableData)

  return (
    <div className="overflow-x-auto">
      <Table className="text-sm w-full text-gray-500 rounded-t-lg">
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
          {TableData.pendingUsers.map((item, index) => (
            <Tr className="bg-white border text-center border-b-2" key={index}>
              <Td className="py-4 px-4 flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <div>{item.userName}</div>
                  <div className="text-xs text-gray-400">{item.email}</div>
                </div>
                <div>
                  <a className="cursor-pointer">
                    <FiExternalLink color="blue" />
                  </a>
                </div>
              </Td>
              <Td className={`py-4 px-6 text-left font-semibold ${item.riskLevel == 'Medium' ? 'text-yellow-500' : null} ${item.riskLevel == 'Low' ? 'text-green-400' : null} ${item.riskLevel == 'High' ? 'text-red-400' : null}`}>{`• ${item.riskLevel}`}</Td>
              <Td className="py-4 px-6 ">{item.triggerReason}</Td>
              <Td className="py-4 px-6 ">{`${item.inQueue} days`}</Td>
              <Td className="py-4 px-6 ">{item.dateAdded}</Td>
              <Td className="py-4 px-6 ">
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
