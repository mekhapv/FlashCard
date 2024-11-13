import { Form, Formik } from "formik";
import { isEmpty } from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs } from "../Components/Tabs";
import DetailPage from "../DetailPage/DetailPage";
import { setGroup } from "../InfoSlice";
import MyFlashCards from "../MyFlashCardPage/MyFlashCard";
import TermSection, { GroupSection } from "../Sections/Sections";
import { SubmitButton } from "../Submit/Submit";

export default function MainBox() {
  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = useState(false);
  const handleEdit = (index) => {
    const x = document.getElementById(`termName${index}`);
    x?.focus();
  };

  const showDetailsPage = useSelector(
    (state) => state.infoReducer.showDetailsPage
  );
  return (
    <div className="container py-10 ">
      <h1 style={{ fontWeight: "700" }}>Create Flashcard</h1>
      <div>
        <Tabs>
          <Tab label="Create New">
            <Formik
              initialValues={{}}
              validate={(values) => {
                console.log(values);
                const errors = {};
                const fields = [
                  "groupDesc",
                  "groupName",
                  "termName0",
                  "termDesc0",
                ];
                fields.forEach((x) => {
                  if (!values[x]) {
                    errors[x] = "This field is Required";
                  }
                });

                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                let termArr = [];
                Object.keys(values).forEach((x) => {
                  //ternm,termdesc  arr
                  if (x.startsWith("termName")) {
                    let index = x.split("termName")[1]; //index-1,2 its in array

                    let obj = {
                      name: values[`termName${index}`],
                      desc: values[`termDesc${index}`],
                      image: values[`termImage${index}`],
                    };
                    termArr.push(obj);
                  }
                });
                dispatch(
                  setGroup({
                    name: values.groupName,
                    desc: values.groupDesc,
                    image: values.groupImage,
                    term: termArr,
                  })
                );
                console.log("Form reset initiated");
                resetForm();

                console.log("form is resetted", values);
                setShowPopup(true);
                setTimeout(() => {
                  setShowPopup(false);
                }, 2000);
              }}
            >
              {({
                values, //{termName0 , termDesc0} //obj
                errors,
                touched,
                handleChange,
                setFieldValue,
                handleBlur,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <GroupSection
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TermSection
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFieldValue={setFieldValue}
                    onEdit={handleEdit}
                    errors={errors}
                  />
                  <SubmitButton />
                </Form>
              )}
            </Formik>

            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-in-out">
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-95">
                  <p className="text-lg font-bold text-gray-800">
                    Form created!
                  </p>
                </div>
              </div>
            )}
          </Tab>

          <Tab label="My Flashcard">
            {isEmpty(showDetailsPage) ? <MyFlashCards /> : <DetailPage />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
