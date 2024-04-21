import TableRow from "./TableRowComponent";

export default function Table({
  rowDataArray,
  id,
  setIsEditing,
  setSelectedRow,
  setIsDeleting,
  setDeleteId,
}) {
  return (
    <div className="w-full max-w-full h-full max-h-screen">
      <div className="w-full h-full relative overflow-x-auto shadow-md px-2 sm:rounded-lg">
        <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                S. NO.
              </th>
              <th scope="col" className="px-6 py-3">
                Circle Name
              </th>
              <th scope="col" className="px-6 py-3">
                Delivery
              </th>
              <th scope="col" className="px-6 py-3">
                District
              </th>
              <th scope="col" className="px-6 py-3">
                Division
              </th>
              <th scope="col" className="px-6 py-3">
                Office Name
              </th>
              <th scope="col" className="px-6 py-3">
                Office Type
              </th>
              <th scope="col" className="px-6 py-3">
                Pincode
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                State
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              let index_no = (id - 1) * 8;
              return rowDataArray?.map((rowData, index) => {
                index_no++;
                return (
                  <TableRow
                    key={index}
                    setSelectedRow={setSelectedRow}
                    rowData={rowData}
                    index_no={index_no}
                    setIsEditing={setIsEditing}
                    setDeleteId={setDeleteId}
                    setIsDeleting={setIsDeleting}
                  />
                );
              });
            })()}
          </tbody>
        </table>

      </div>
    </div>
  );
}
