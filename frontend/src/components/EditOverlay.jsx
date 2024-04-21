import { useRef } from "react"
import axios from 'axios'
export default function EditOverlay({overlayData , setIsEdit}){
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
          <FormElement label = {'Circle Name'} inputName={overlayData['Circle Name']} elemRef={circleNameRef}></FormElement>  
          <FormElement label = {'Delivery'} inputName={overlayData['Delivery']} elemRef={deliveryref}></FormElement>  
          <FormElement label = {'District'} inputName={overlayData['District']} elemRef={districtRef}></FormElement>  
          <FormElement label = {'Division Name'} inputName={overlayData['Division Name']} elemRef={divisionNameRef}></FormElement>  
          <FormElement label = {'Office Name'} inputName={overlayData['Office Name']} elemRef={officeNameRef}></FormElement>  
          <FormElement label = {'OfficeType'} inputName={overlayData['OfficeType']} elemRef={officeTypeRef}></FormElement>  
          <FormElement label = {'PinCode'} inputName={overlayData['PinCode']} elemRef={pincodeRef}></FormElement>  
          <FormElement label = {'Region Name'} inputName={overlayData['Region Name']} elemRef={regionRef}></FormElement>  
           <FormElement label = {'StateName'} inputName={overlayData['StateName']} elemRef = {stateRef}></FormElement>
           <div className="w-full flex justify-center items-center gap-4">
             <div className="w-2/4 flex justify-center items-center bg-green-500 rounded-md" >
             <button className = "w-full h-10 text-white rounded" onClick = {
                    async () => {
                        await axios.put('http://localhost:3000/' , {
                            id : overlayData._id,
                            data : {
                                'Circle Name' : circleNameRef.current.value,
                                'Delivery' : deliveryref.current.value,
                                'Division Name' : divisionNameRef.current.value,
                                'District' : districtRef.current.value,
                                'StateName' : stateRef.current.value,
                                'PinCode' : pincodeRef.current.value,
                                'Region Name' : regionRef.current.value,
                                'Office Name' : officeNameRef.current.value,
                                'OfficeType' : officeTypeRef.current.value
                            }
                        })
                        await axios.get("")
                        console.log('req sent');
                        setIsEdit(false);
                    }
                }>Submit Changes</button>
             </div>
             <div className="w-2/4">
             <button onClick = {() => {
             setIsEdit(false);
         }}className="h-10 w-full text-white flex justify-center items-center rounded-md bg-red-500"> Cancel </button>
             </div> 
         </div> 
      </div>
</div>)
} 

export function FormElement({label , inputName , elemRef})
{
    return( <div className="flex gap-4 text-lg mb-2">
    <div className="w-2/5 font-semibold">{label}:</div>
    <div className="w-full"><input className = "px-2 w-full rounded-md border border-gray-300 text-black placeholder:text-gray-500 "type="text"   ref={elemRef} defaultValue={inputName}/></div> 
</div>)
}



