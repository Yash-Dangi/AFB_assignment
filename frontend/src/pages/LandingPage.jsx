import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import Table from "../components/TableComponent";
import axios from 'axios';
function LandingPage(){
       const[id , setID] = useState(1);
       const [idMax , setIdMax] = useState(1);
       const idInt = parseInt(id);
       const [tableData,setTableData] = useState([]);
       const [loading , setLoading] = useState(true);
       const [searchParam , setSearchParam] = useState('Pincode')
       const [searchInput , setSearchInput] = useState('');
       const [count , setCount] = useState(0);
       const [isEdit  ,setIsEdit] = useState(false);
       const [overlayData , setOverlayData] = useState();
    //    {console.log(searchParam , searchInput);}
      useEffect(() => {
           axios.post('http://localhost:3000/fetch-insert' ,{
                searchParam , searchInput
           },
           {
             params : {
                 id : idInt
             }
           }).then((response) => {
                    setIdMax(response.data.idMax);
                    setCount(response.data.count);
                    setTableData(response.data.tableData);
                    setLoading(false);    
           })
      }, [id,searchInput]);
       if((loading))
       {
           return <div>
                loading...
           </div>
       }
       {console.log(tableData)}
       {console.log(overlayData)}
       return(
        <div className="relative">
             {(isEdit ? 
                   <div className="w-full h-full absolute z-50 inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
                             <div className="w-1/4 h-4/5 bg-white rounded-lg bg-opacity-100">
                                  <div className="flex gap-4">
                                       <div>Circle Name:</div>
                                       <div><input className = "border border-gray-300 text-black placeholder:text-gray-500 "type="text" placeholder={overlayData['Cicle Name']} value = {overlayData['Cicle Name']} /></div> 
                                  </div>
                             </div>
    </div>: null)}
             <div className="w-full flex h-10 justify-center border border-b-2 border-gray-200 items-center">
                   <div className="font-bold text-xl">Apps For Bharat</div> 
             </div>
             <div className="flex gap-4 justify-center w-full h-full">
                <div><SearchParamSelect onChange={(e) => {
                    setSearchParam(e.target.value);
                    // setID(1);
                }}></SearchParamSelect></div>
                <div className="w-6/12"><SearchBar onChange={(e) => {
                     setSearchInput(e.target.value);
                     setID(1);
                }}></SearchBar></div>
             </div>
             <div className="w-screen h-full"><Table setOverlayData = {setOverlayData} rowDataArray={tableData} id = {idInt} setID={setID} idMax={idMax} count={count} setIsEdit ={setIsEdit}></Table></div>
        </div>
       )
}

function SearchParamSelect({onChange}){
     return(
        <div className="flex p-2">
        <select onChange = {onChange} defaultValue = "Pincode" id="countries" className ="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg   w-full p-2">
            {/* <option>Choose a country</option> */}
            <option value="Pincode">Pincode</option>
            <option value="Circle Name"> Circle Name</option>
            <option value="District">District</option>
            <option value="Division Name">Division Name</option>
            <option value="Office Name">Office Name</option>
            <option value="Region Name">Region Name</option>
            <option value="StateName">State</option>
        </select>
        </div>
     )
}

function SearchBar({onChange}){
     return(
        <div className="w-full p-2">   
              <div className="w-full"><input onChange = {onChange} type="text"  className="p-2 border border-2  outline-none text-gray-500 foucs:outline-none w-full h-10 rounded " placeholder = "Search pincode,region,state"/></div> 
        </div>
     ) 
}



export default LandingPage;