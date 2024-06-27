import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { setShowDetailsPage } from "../InfoSlice";
const Tabs = ({ children }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const { showDetailsPage } = useSelector((state) => state.infoReducer);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
    dispatch(setShowDetailsPage({}));
  };
  useEffect(() => {
    if (!isEmpty(showDetailsPage)) {
      setActiveTab("Create New");
    }
  }, [showDetailsPage])
  return (
    <div>
      <div className="flex border-b border-gray-300" style={{ width: "33%" }}>
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${activeTab === child.props.label
              ? "border-b-2 border-red-800"
              : ""
              } flex-1 text-gray-700 font-medium py-2 padding-right-50`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};
const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
