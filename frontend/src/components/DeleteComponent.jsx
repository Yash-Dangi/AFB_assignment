import axios from "axios";
export default function DeleteComp({ id, setIsDeleting }) {
  return (
    <div className="w-sceen h-screen absolute z-50 inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center ">
      <div className="w-1/3 h-1/3 bg-white rounded-lg bg-opacity-100 p-8 ">
        <div>
          <div className="text-3xl font-bold p-8 flex justify-center item-center">
        
            <div>{"Are you sure ?"}</div>
          </div>
          <div className="w-full flex justify-center items-center gap-4">
            <div className="w-2/4 flex justify-center items-center rounded-md">
              <button
                className="w-full text-white flex items-center justify-center h-10 rounded-md bg-red-500"
                onClick={async () => {
                  await axios.delete("http://localhost:3000/api/v1/delete", {
                    params: {
                      id,
                    },
                  });
                  window.location.reload();
                  setIsDeleting(false);
                }}
              >
                {"Delete"}
              </button>
            </div>
            <div className="w-2/4">
              <button
                onClick={() => {setIsDeleting(false)}}
                className="h-10 w-full flex justify-center items-center rounded-md bg-green-500"
              >
                {"Cancel"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
