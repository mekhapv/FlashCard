import { isEmpty } from "lodash";
import { useEffect, useRef, useState } from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import { AddMore } from "../AddMore/AddMore";

export default function TermSection({
  values,
  handleChange: formikChange,
  handleBlur,
  setFieldValue,
  setValues,
  onEdit,
  errors,
}) {
  const [addMore, setAddMore] = useState([0]);

  useEffect(() => {
    if (isEmpty(values)) {
      setAddMore([0]);
    }
  }, [values]);
  const handleChange = (e) => {
    console.log(values);
    console.log(addMore);
    formikChange(e);
  };
  const handleDelete = (indexToDelete) => {
    const updatedArr = [...addMore];
    delete values[`termDesc${indexToDelete}`];
    delete values[`termName${indexToDelete}`];
    delete values[`termImage${indexToDelete}`];
    for (let i = indexToDelete; i < updatedArr.length; i++) {
      values[`termDesc${i}`] = values[`termDesc${i + 1}`];
      delete values[`termDesc${i + 1}`];
      values[`termName${i}`] = values[`termName${i + 1}`];
      delete values[`termName${i + 1}`];
      values[`termImage${i}`] = values[`termImage${i + 1}`];
      delete values[`termImage${i + 1}`];
    }
    updatedArr.pop();
    setAddMore(updatedArr);
  };

  const handleAddMoreClick = () => {
    const add = [...addMore];
    add.push(add.slice(-1)[0] + 1);
    setAddMore(add);
  };
  return (
    <div className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        {addMore.map((x, i) => (
          <AddMore
            setFieldValue={setFieldValue}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            index={i}
            arr={addMore} //arr
            onDelete={() => handleDelete(i)}
            onEdit={onEdit}
            errors={errors}
          />
        ))}
      </div>
      <button
        type="button"
        className="bg-transparent text-blue-700 font-semibold py-5 rounded"
        onClick={() => handleAddMoreClick()}
      >
        +Add More
      </button>
    </div>
  );
}

export function GroupSection({
  values,
  handleChange,
  handleBlur,
  setFieldValue,
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
        setFieldValue(`groupImage`, reader.result); //base64 value is set in formik values
      };
      reader.readAsDataURL(file);
    }
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click(); //just click the input element
  };
  return (
    <div className="w-full ">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Create Group*
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.groupName && "border-red-500"
            } `}
            style={{ width: "30%", marginTop: "25px", marginLeft: "-91px" }}
            id="groupName"
            type="text"
            name="groupName"
            value={values.groupName || ""}
            onChange={handleChange}
          ></input>
          <input
            type="file"
            id="groupImage"
            ref={fileInputRef}
            onChange={handleFileUpload}
            style={{ display: "none" }}
            name={`groupImage`}
          />
          {values[`groupImage`] && (
            <img
              style={{ width: "auto", maxHeight: "65px", marginLeft: "30px" }}
              src={values[`groupImage`]}
              alt=""
            />
          )}
          {!values[`groupImage`] && (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
              style={{ marginLeft: "50px", marginTop: "auto" }}
              onClick={handleButtonClick}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <MdOutlineUploadFile />
                </div>
                Upload Image
              </div>
            </button>
          )}
        </div>
        {errors.groupName && (
          <p className="text-red-500 text-xs italic mb-4">{errors.groupName}</p>
        )}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            for="password"
          >
            Add Description
          </label>

          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.groupDesc && "border-red-500"
            } `}
            style={{ height: 100, width: "80%" }}
            id="groupDesc"
            type="text"
            name="groupDesc"
            onChange={handleChange}
            value={values.groupDesc || ""}
          />
          {errors.groupDesc && (
            <p className="text-red-500 text-xs italic mb-4">
              {errors.groupDesc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
