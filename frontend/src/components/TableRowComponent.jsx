export default  function TableRow({rowData , index_no, setIsEdit , setOverlayData})
{
    return(
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="w-4 p-4">
        <div className="flex items-center">
            {index_no}
        </div>
    </td>
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {rowData['Circle Name']}
    </th>
    <td className="px-6 py-4">
         {rowData['Delivery']}
    </td>
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {rowData['District']}
    </th>
    <td className="px-6 py-4">
    {rowData['Division Name']}
    </td>
    <td className="px-6 py-4">
         {rowData['Office Name']}
    </td>
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {rowData['OfficeType']}
    </th>
    <td className="px-6 py-4">
        {rowData['PinCode']}
    </td>
    <td className="px-6 py-4">
         {rowData['Region Name']}
    </td>
    <td className="px-6 py-4">
         {rowData['StateName']}
    </td>
    <td className="px-6 py-4">
        <button onClick = {() => {
               setOverlayData(rowData);
               setIsEdit(true);
        }}className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
    </td>
</tr>
        </>
    )
}