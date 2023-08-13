import { Button } from "bootstrap";
import React from "react";

const ApprovalTable = () => {
  return (
    <>
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Department
              </th>
              <th scope="col" className="px-6 py-4">
                Leave Type
              </th>
              <th scope="col" className="px-6 py-4">
                Leave Credits
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">UI/UX</td>
              <td className="whitespace-nowrap px-6 py-4">PAID</td>
              <td className="whitespace-nowrap px-6 py-4">9</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Jaylen</td>
              <td className="whitespace-nowrap px-6 py-4">UI/UX</td>
              <td className="whitespace-nowrap px-6 py-4">PAID</td>
              <td className="whitespace-nowrap px-6 py-4">9</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">Josh</td>
              <td className="whitespace-nowrap px-6 py-4">UI/UX</td>
              <td className="whitespace-nowrap px-6 py-4">PAID</td>
              <td className="whitespace-nowrap px-6 py-4">9</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
              <td className="whitespace-nowrap px-6 py-4">Stephen</td>
              <td className="whitespace-nowrap px-6 py-4">UI/UX</td>
              <td className="whitespace-nowrap px-6 py-4">PAID</td>
              <td className="whitespace-nowrap px-6 py-4">9</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">5</td>
              <td className="whitespace-nowrap px-6 py-4">Lyndell</td>
              <td className="whitespace-nowrap px-6 py-4">UI/UX</td>
              <td className="whitespace-nowrap px-6 py-4">PAID</td>
              <td className="whitespace-nowrap px-6 py-4">9</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">6</td>
              <td className="whitespace-nowrap px-6 py-4">Christine</td>
              <td className="whitespace-nowrap px-6 py-4">UI/UX</td>
              <td className="whitespace-nowrap px-6 py-4">PAID</td>
              <td className="whitespace-nowrap px-6 py-4">9</td>
            </tr>
            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 font-medium">7</td>
              <td className="whitespace-nowrap px-6 py-4">John</td>
              <td className="whitespace-nowrap px-6 py-4">UI/UX</td>
              <td className="whitespace-nowrap px-6 py-4">PAID</td>
              <td className="whitespace-nowrap px-6 py-4">9</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApprovalTable;
