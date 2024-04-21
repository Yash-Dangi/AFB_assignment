import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import Table from "../components/TableComponent";
import axios from 'axios';
import EditOverlay from "../components/EditOverlay";
import CreateComp from "../components/CreateComponent";
import DeleteComp from "../components/DeleteComponent";
function LandingPage(){
       const[id , setID] = useState(1);
       const [idMax , setIdMax] = useState(1);
       const idInt = parseInt(id);
       const [tableData,setTableData] = useState([]);
       const [loading , setLoading] = useState(true);
       const [searchParam , setSearchParam] = useState('PinCode')
       const [searchInput , setSearchInput] = useState('');
       const [count , setCount] = useState(0);
       const [isEdit  ,setIsEdit] = useState(false);
       const [overlayData , setOverlayData] = useState();
       const [isCreate , setIsCreate] = useState(false);
       const [isDelete , setIsDelete] = useState(false);
       const [deleteId , setDeleteId] = useState('');
    //    {console.log(searchParam , searchInput);}
      useEffect(() => {
           axios.post('http://localhost:3000/api/v1/fetchData' ,{
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
       return(
        <div className="relative">
             {isDelete ? <DeleteComp setIsDelete={setIsDelete} id={deleteId}></DeleteComp> : null}
             {isCreate ? <CreateComp setIsCreate={setIsCreate}></CreateComp> : null}
             {(isEdit ? <EditOverlay overlayData={overlayData} setIsEdit={setIsEdit}></EditOverlay>: null)}
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
                <div className="flex justify-center items-center">
                      <button className="h-10 bg-green-500 text-white rounded p-2" onClick={() => {
                           setIsCreate(true);
                      }}> Create New Row</button>
                </div>
             </div>
             <div className="w-screen h-full"><Table setOverlayData = {setOverlayData} rowDataArray={tableData} id = {idInt} setID={setID} idMax={idMax} count={count} setIsEdit ={setIsEdit} setIsDelete={setIsDelete} SetDeleteId={setDeleteId}></Table></div>
        </div>
       )
}

function SearchParamSelect({onChange}){
     return(
        <div className="flex p-2 w-64 justify-center item-center">
        <select onChange = {onChange} defaultValue = "PinCode" id="countries" className ="text-center text-lg w-full bg-gray-500 outline-none border border-gray-300 text-white text-sm rounded-lg   w-full p-2">
            {/* <option>Choose a country</option> */}
            <option value="PinCode">Pincode</option>
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
        <div className="w-full p-2  flex justify-center item-center">   
              <div className="w-full"><input onChange = {onChange} type="text"  className="p-2 border border-2  outline-none text-gray-500 foucs:outline-none w-full h-10 rounded " placeholder = "Search pincode,region,state"/></div> 
        </div>
     ) 
}



export default LandingPage;