import { TfiTrash } from "react-icons/tfi";
import { TbEdit } from "react-icons/tb";
import { useRef } from "react";

export function AddMore({
  values,
  handleChange,
  setFieldValue,
  index,
  onDelete,
  onEdit,
  arr,
  errors
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
    <div class="mb-4">
      <div className="flex">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Enter Term*
          </label>

          <input
            class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[`termName${arr[index]}`] && 'border-red-500'} `}
            id={`termName${index}`}
            type="text"
            name={`termName${index}`}
            onChange={handleChange}
            value={values[`termName${arr[index]}`]} //values - obj //{termName0:"gjbhdb"}
          />

          {errors?.[`termName${arr[index]}`] && (
            <p className="text-red-500 text-xs italic mb-4">{errors?.[`termName${arr[index]}`]}</p>
          )}
        </div>

        <div style={{ marginLeft: "50px" }}>
          <label
            class="block text-gray-700 text-sm font-bold mb-2 "
            for="username"
          >
            Enter Description*
          </label>

          <textarea
            class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[`termName${arr[index]}`] && 'border-red-500'} `}
            style={{ width: "500px", height: "65px" }}
            id="termDesc"
            name={`termDesc${index}`}
            type="text"
            value={values[`termDesc${arr[index]}`]}
            onChange={handleChange}
          />

          {errors?.[`termDesc${arr[index]}`] && (
            <p className="text-red-500 text-xs italic mb-4">{errors?.[`termDesc${arr[index]}`]}</p>
          )}

        </div>
        <div style={{ marginLeft: "50px", marginTop: "25px" }}>
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
              style={{ width: "auto", maxHeight: "65px" }}
              src={values[`termImage${arr[index]}`]}
            />
          )}
          {!values[`termImage${arr[index]}`] && (
            <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              style={{ marginTop: "5px" }}
              onClick={handleButtonClick}
            >
              Select Image
            </button>
          )}
        </div>
        <div
          style={{
            marginTop: "25px",
            marginLeft: "20px",
            height: "65px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <button onClick={() => onDelete(index)}>
              <TfiTrash />
            </button>
          </div>
          <div>
            <button onClick={() => handleEditClick(index)}>
              <TbEdit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


