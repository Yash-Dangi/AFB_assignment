import { Link } from "react-router-dom"
import TableRow from "./TableRowComponent"
// import { set } from "mongoose"
export default function Table({rowDataArray , id , setID , idMax , count , setIsEdit , setOverlayData , setIsDelete , SetDeleteId}){
    return(
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
                let index_no = (id-1)*10;
                // const name = value;
                return (  rowDataArray.map((rowData) => {
                    // index_no++;
                    index_no++;
                    return(<TableRow setOverlayData = {setOverlayData} rowData={rowData} index_no={index_no} setIsEdit={setIsEdit} setDeleteId={SetDeleteId} setIsDelete={setIsDelete}></TableRow>) 
               }));
            })()}
            
       </tbody>
   </table>
   <nav className="flex items-center flex-column flex-wrap md:flex-row justify-center gap-4 pt-2" aria-label="Table navigation">
       <span className="text-sm font-normal font-semibold mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900">{`${Math.min(id*10 - 9 , count)}- ${Math.min(count , id *10)} of ${count}`}</span></span>
       <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
           <li>
           <button onClick = {() => {
              (id > 1 ? setID(id-1) : null)
           }} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{"< Previous"}</button>
           </li>
           <li>
           <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{id}</button>
           </li>
           {(id + 1) <= idMax ?  <li>
           <button onClick = {() => {
                setID(id + 1);
           }} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{id + 1}</button>
           </li> : null}
           {(id + 2) <= idMax ?  <li>
           <button onClick = {() => {
            setID(id + 2);
           }} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{id + 2}</button>
           </li> : null}
           {(id + 3) <= idMax ? <li>
           <button onClick = {() => {
            setID(id + 3)
           }} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{id + 3}</button>
           </li> : null}
           {(id + 4) <= idMax ? <li>
            <button onClick = {() => {
                 setID(id + 4)
            }} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{id + 4}</button>
           </li> : null}
           {(id + 1) <= idMax ? <li>
            <button onClick = {() => {setID(id + 1)}} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{"Next >"}</button>
           </li> : null}
       </ul>
   </nav>
</div>

       </div>
    )
}