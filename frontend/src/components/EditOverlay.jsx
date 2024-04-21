import axios from "axios";
import FormElement from "./FormElement";

import { useState } from "react";

export default function EditOverlay({ selectedRow, setIsEditing }) {

  const [data, setData] = useState({
    circleName: selectedRow ? selectedRow["Circle Name"] : "",
    district: selectedRow ? selectedRow["District"] : "",
    delivery: selectedRow ? selectedRow["Delivery"] : "",
    divisionName: selectedRow ? selectedRow["Division Name"] : "",
    state: selectedRow ? selectedRow["StateName"] : "",
    pincode: selectedRow ? selectedRow["PinCode"] : "",
    officeName: selectedRow ? selectedRow["Office Name"] : "",
    officeType: selectedRow ? selectedRow["OfficeType"] : "",
    region: selectedRow ? selectedRow["Region Name"] : ""
  })

  return (
    <div className="w-screen h-screen absolute z-50 inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center ">
      <div className="w-2/4 h-3/5 bg-white rounded-lg bg-opacity-100 p-8 ">
        <FormElement
          label={"Circle Name"}
          value={data.circleName}
        />
        <FormElement
          label={"Delivery"}
          value={data.delivery}
        />
        <FormElement
          label={"District"}
          value={data.district}
        />
        <FormElement
          label={"Division Name"}
          value={data.divisionName}
          />
        <FormElement
          label={"Office Name"}
          value={data.officeName}
          />
        <FormElement
          label={"OfficeType"}
          value={data.officeType}
          />
        <FormElement
          label={"PinCode"}
          value={data.pincode}
          />
        <FormElement
          label={"Region Name"}
          value={data.region}
          />
        <FormElement
          label={"StateName"}
          value={data.state}
          />
        <div className="w-full flex justify-center items-center gap-4">
          <div className="w-2/4 flex justify-center items-center bg-green-500 rounded-md">
            <button
              className="w-full h-10 text-white rounded"
              onClick={async () => {
                // if (
                //   !data.circleName ||
                //   !data.delivery ||
                //   !divisionNameRef.current.value ||
                //   !districtRef.current.value ||
                //   !stateRef.current.value ||
                //   !pincodeRef.current.value ||
                //   !regionRef.current.value ||
                //   !officeNameRef.current.value ||
                //   !officeTypeRef.current.value
                // ) {
                //   alert("Please fill out all the fields");
                //   return;
                // }
                if(selectedRow) {
                  await axios.put("http://localhost:3000/api/v1/update", {
                    id: selectedRow._id,
                    data: {
                      "Circle Name": data.circleName,
                      Delivery: data.delivery,
                      "Division Name": data.divisionName,
                      District: data.district,
                      StateName: data.state,
                      PinCode: data.pincode,
                      "Region Name": data.region,
                      "Office Name": data.officeName,
                      OfficeType: data.officeType,
                    },
                  });
                } else {
                  await axios.post("http://localhost:3000/api/v1/create", {
                    "Circle Name": data.circleName,
                    Delivery: data.delivery,
                    "Division Name": data.divisionName,
                    District: data.district,
                    StateName: data.state,
                    PinCode: data.pincode,
                    "Region Name": data.region,
                    "Office Name": data.officeName,
                    OfficeType: data.officeType,
                  });
                }

                window.location.reload();
                setIsEditing(false);
              }}
            >
              Submit Changes
            </button>
          </div>
          <div className="w-2/4">
            <button
              onClick={() => {
                setIsEditing(false);
                setData({
                  circleName: "",
                  district: "",
                  divisionName: "",
                  delivery: "",
                  state: "",
                  pincode: "",
                  region: "",
                  officeName: "",
                  officeType: ""
                })
              }}
              className="h-10 w-full text-white flex justify-center items-center rounded-md bg-red-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
