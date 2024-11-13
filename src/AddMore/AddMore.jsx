import { useRef } from "react";
import { TbEdit } from "react-icons/tb";
import { TfiTrash } from "react-icons/tfi";
import "./AddMore.css";

export function AddMore({
  values,
  handleChange,
  setFieldValue,
  index,
  onDelete,
  onEdit,
  arr,
  errors,
}) {
  const fileInputRef = useRef(null);
  const handleFileUpload = (e) => {
    e.preventDefault();
    handleChange(e);

    if (e.target.files.length) {
      let file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue(`termImage${arr[index]}`, reader.result); //base64 value is set in formik values
      };
      reader.readAsDataURL(file);
    }
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click(); //just click the input element
  };

  const handleEditClick = (index) => {
    onEdit(index); //passing onedit fn with index
  };
  return (
    <div className="mb-4">
      <div className="flex">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Enter Term*
          </label>

          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors[`termName${arr[index]}`] && "border-red-500"
            } `}
            id={`termName${index}`}
            type="text"
            name={`termName${index}`}
            onChange={handleChange}
            value={values[`termName${arr[index]}`] || ""} //values - obj //{termName0:"gjbhdb"}
          />

          {errors?.[`termName${arr[index]}`] && (
            <p className="text-red-500 text-xs italic mb-4">
              {errors?.[`termName${arr[index]}`]}
            </p>
          )}
        </div>

        <div className="description-username">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 "
            for="username"
          >
            Enter Description*
          </label>

          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors[`termName${arr[index]}`] && "border-red-500"
            } `}
            style={{ width: "500px", height: "auto" }}
            id="termDesc"
            name={`termDesc${index}`}
            type="text"
            value={values[`termDesc${arr[index]}`] || ""}
            onChange={handleChange}
          />

          {errors?.[`termDesc${arr[index]}`] && (
            <p className="text-red-500 text-xs italic mb-4">
              {errors?.[`termDesc${arr[index]}`]}
            </p>
          )}
        </div>
        <div className="termimage">
          <input
            type="file"
            id="termImage"
            ref={fileInputRef}
            onChange={handleFileUpload}
            style={{ display: "none" }}
            name={`termImage${index}`}
          />
          {values[`termImage${arr[index]}`] && (
            <img
            className="term-image"
             src={values[`termImage${arr[index]}`]}
              alt=""
            />
          )}
          {!values[`termImage${arr[index]}`] && (
            <button
              className="termimage-button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={handleButtonClick}
            >
              Select Image
            </button>
          )}
        </div>
        <div className="editdelete-buttons">
          <div>
            <button type="button" onClick={() => onDelete(index)}>
              <TfiTrash />
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleEditClick(index)}>
              <TbEdit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
