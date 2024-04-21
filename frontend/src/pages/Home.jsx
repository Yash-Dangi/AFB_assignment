import { useEffect, useState } from "react";
import Table from "../components/TableComponent";
import axios from "axios";
import EditOverlay from "../components/EditOverlay";

import DeleteComp from "../components/DeleteComponent";
import LoadingComponent from "../components/LoadingComponent";
import SearchBar from "../components/SearchBar";
import SearchParamSelect from "../components/SearchParamSelect";

function Home() {
  const [id, setID] = useState(1);
  const [idMax, setIdMax] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParam, setSearchParam] = useState("PinCode");
  const [searchInput, setSearchInput] = useState("");
  const [count, setCount] = useState(0);

  const [selectedRow, setSelectedRow] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/api/v1/fetchData",
        {
          params: {
            id,
            searchParam,
            searchInput
          }
        }
      )
      .then((response) => {
        setIdMax(response.data.idMax);
        setCount(response.data.count);
        setTableData(response.data.tableData);
        setLoading(false);
      });
  }, [id, searchInput]);


  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <div className="relative">
      {isDeleting ? (
        <DeleteComp setIsDeleting={setIsDeleting} id={deleteId} />
      ) : null}
      {isEditing ? (
        <EditOverlay
          selectedRow={selectedRow}
          setIsEditing={setIsEditing}
          setSelectedRow={setSelectedRow}
          />
      ) : null}
      <div className="w-full flex h-10 justify-center border border-b-2 border-gray-200 items-center">
        <div className="font-bold text-xl">Apps For Bharat</div>
      </div>
      <div className="flex gap-4 justify-center w-full h-full">
        <div>
          <SearchParamSelect
            onChange={(e) => {
              setSearchParam(e.target.value);
            }}
          />
        </div>
        <div className="w-6/12">
          <SearchBar
            onChange={(e) => {
              setSearchInput(e.target.value);
              setID(1);
            }}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="h-10 bg-green-500 text-white rounded p-2"
            onClick={() => {
              setIsEditing(true);
              setSelectedRow(null);
            }}
          >
            Create New Row
          </button>
        </div>
      </div>
      <div className="w-screen h-full">
        <Table
          setSelectedRow={setSelectedRow}
          rowDataArray={tableData}
          id={id}
          setIsEditing={setIsEditing}
          setIsDeleting={setIsDeleting}
          setDeleteId={setDeleteId}
        ></Table>
      </div>
      <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-center gap-4 pt-2"
          aria-label="Table navigation"
        >
          <span className="text-sm font-semibold mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-900">{`${Math.min(id * 8 - 7, count)}- ${Math.min(count, id * 8)} of ${count}`}</span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button
                onClick={() => {
                  id > 1 ? setID(id - 1) : null;
                }}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {"< Previous"}
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                {id}
              </button>
            </li>
            {id + 1 <= idMax ? (
              <li>
                <button
                  onClick={() => {
                    setID(id + 1);
                  }}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {id + 1}
                </button>
              </li>
            ) : null}
            {id + 2 <= idMax ? (
              <li>
                <button
                  onClick={() => {
                    setID(id + 2);
                  }}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {id + 2}
                </button>
              </li>
            ) : null}
            {id + 3 <= idMax ? (
              <li>
                <button
                  onClick={() => {
                    setID(id + 3);
                  }}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {id + 3}
                </button>
              </li>
            ) : null}
            {id + 4 <= idMax ? (
              <li>
                <button
                  onClick={() => {
                    setID(id + 4);
                  }}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {id + 4}
                </button>
              </li>
            ) : null}
            {id + 1 <= idMax ? (
              <li>
                <button
                  onClick={() => {
                    setID(id + 1);
                  }}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {"Next >"}
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
    </div>
  );
}




export default Home;
