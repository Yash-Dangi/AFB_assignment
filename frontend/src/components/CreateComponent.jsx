import { FormElement} from "./EditOverlay";
import { useRef } from "react";
import axios from 'axios'
export default function CreateComp({setIsCreate}){
    const circleNameRef = useRef();
    const districtRef = useRef();
    const deliveryref = useRef();
    const divisionNameRef = useRef();
    const stateRef = useRef();
    const pincodeRef = useRef();
    const officeNameRef = useRef();
    const officeTypeRef = useRef();
    const regionRef = useRef();
  //   const circleNameRef = useRef();
    return(<div className="w-full h-full absolute z-50 inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center ">
    <div className="w-2/4 h-3/5 bg-white rounded-lg bg-opacity-100 p-8 ">
        <FormElement label = {'Circle Name'} inputName={'Circle Name'} elemRef={circleNameRef}></FormElement>  
        <FormElement label = {'Delivery'} inputName={'Delivery'} elemRef={deliveryref}></FormElement>  
        <FormElement label = {'District'} inputName={'District'} elemRef={districtRef}></FormElement>  
        <FormElement label = {'Division Name'} inputName={'Division Name'} elemRef={divisionNameRef}></FormElement>  
        <FormElement label = {'Office Name'} inputName={'Office Name'} elemRef={officeNameRef}></FormElement>  
        <FormElement label = {'OfficeType'} inputName={'OfficeType'} elemRef={officeTypeRef}></FormElement>  
        <FormElement label = {'PinCode'} inputName={'PinCode'} elemRef={pincodeRef}></FormElement>  
        <FormElement label = {'Region Name'} inputName={'Region Name'} elemRef={regionRef}></FormElement>  
         <FormElement label = {'StateName'} inputName={'StateName'} elemRef = {stateRef}></FormElement>
         <div className="w-full flex justify-center items-center gap-4">
             <div className="w-2/4 flex justify-center items-center rounded-md">
             <button className = "w-full text-white flex items-center justify-center h-10 rounded-md bg-green-500" onClick = {
                   async () => {
                       await axios.post('http://localhost:3000/api/v1/create' , {
                           
                                'Circle Name' : circleNameRef.current.value,
                                'Delivery' : deliveryref.current.value,
                                'Division Name' : divisionNameRef.current.value,
                                'District' : districtRef.current.value,
                                'StateName' : stateRef.current.value,
                                'PinCode' : pincodeRef.current.value,
                                'Region Name' : regionRef.current.value,
                                'Office Name' : officeNameRef.current.value,
                                'OfficeType' : officeTypeRef.current.value
                       })
                       console.log('req sent');
                       setIsCreate(false);
                   }
              }>Submit Changes</button>
             </div>
             <div className="w-2/4">
             <button onClick = {() => {
             setIsCreate(false);
         }}className="h-10 w-full flex justify-center items-center rounded-md bg-red-500"> Cancel </button>
             </div> 
         </div>
        
    </div>
</div>)
} 