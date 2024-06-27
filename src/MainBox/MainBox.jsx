import { Tabs, Tab } from "../Components/Tabs";
import { Formik } from "formik";
import MyFlashCards from "../MyFlashCardPage/MyFlashCard";
import { useDispatch, useSelector } from "react-redux";
import { setGroup } from "../InfoSlice";
import { SubmitButton } from "../Submit/Submit";
import DetailPage from "../DetailPage/DetailPage";

import TermSection, { GroupSection } from "../Sections/Sections";
import { isEmpty } from "lodash";

export default function MainBox() {
  const dispatch = useDispatch();
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
            {isEmpty(showDetailsPage) && (
              <Formik
                initialValues={{}}
                validate={(values) => {
                  const errors = {};
                  const fields = ["groupDesc", "groupName", "termName0", "termDesc0"]
                  fields.forEach((x) => {
                    if (!values[x]) {
                      errors[x] = "This field is Required";
                    }
                  })

                  return errors;
                }}
                onSubmit={(values) => {
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
                  isSubmitting,
                  handleDelete,
                }) => (
                    <form onSubmit={handleSubmit}>
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
                      <SubmitButton handleSubmit={handleSubmit} />
                    </form>
                  )}
              </Formik>
            )}
            {!isEmpty(showDetailsPage) && <DetailPage />}
          </Tab>

          <Tab label="My Flashcard">


            <MyFlashCards />
          </Tab>
        </Tabs>
      </div>
    </div >
  );
}
