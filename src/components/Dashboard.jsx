import React, { useState } from "react";
import "../Style/Dashboard.css";
import { Tree } from "antd";
import treeData from "./TreeData1";
// import { CheckOutlined } from "@ant-design/icons";



const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Validate DocType");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const generateTreeData = (nodes, path = "") => {
    return nodes.map((node, index) => {
      return {
        title: node.text,
        children: node.children ? generateTreeData(node.children) : undefined,
      };
    });
  };

  ////////////////////////////////////////////   DirectoryTree   ///////////////////////////////////////////////////////////////////////////

  const { DirectoryTree } = Tree;
  const onExpand = (keys, info) => {
    console.log("Trigger Expand", keys, info);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const TreeData = generateTreeData(treeData);

  // const [showLine, setShowLine] = useState(true);
  // const [showIcon, setShowIcon] = useState(false);
  // const [showLeafIcon, setShowLeafIcon] = useState(true);

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  // const handleLeafIconChange = (value) => {
  //   if (value === "custom") {
  //     return setShowLeafIcon(<CheckOutlined />);
  //   }
  //   if (value === "true") {
  //     return setShowLeafIcon(true);
  //   }
  //   return setShowLeafIcon(false);
  // };


  const renderContent = () => {
    switch (activeTab) {
      case "Validate DocType":
        return (
          <div>
            <div className="directoryTree">
              <DirectoryTree className="directory-tree"
                multiple
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={TreeData}
              />
            </div>
            {/* <div style={{ marginBottom: 16 }}>
              <Tree
                showLine={showLine ? { showLeafIcon } : false}
                showIcon={showIcon}
                onSelect={onSelect}
                treeData={TreeData}
                style={treeStyle} 
              />
            </div> */}

            <div className="content-btn">
              <button
                type="button"
                className="btn btn-danger rounded-0"
                onClick={() => handleTabClick("Validate DITA Source")}
              >
                Next
              </button>
            </div>
          </div>
        );

      case "Validate DITA Source":
        return (
          <div className="main-block">
            <div className="block-content">
              <div className="row">
                <div className="col-md-9 col-xl-10">
                  <div className="mb-4">
                    <label className="form-label" htmlFor="example-file-input">
                      File Input (Should be in .doc format)
                    </label>
                    <input
                      className="form-control rounded-0"
                      type="file"
                      id="example-file-input"
                      placeholder="test"
                    />
                  </div>
                </div>
                <div className="col-md-3 col-xl-2">
                  <button
                    type="button"
                    className="btn  rounded-0 dita-btn proceed-btn"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <div className="dita-btn1">
                <button
                  type="button"
                  className="btn btn-secondary rounded-0"
                  disabled=""
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btn btn-danger rounded-0"
                  onClick={() => handleTabClick("Output")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case "Output":
        return (
          <div>
            <div className="output-btn">
              <button
                type="button"
                className="btn btn-lg rounded-0  px-4 me-1 mb-3"
                disabled
              >
                <i className="fa-solid fa-rocket"></i> Download Script
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container">
        <div className="tabBar">
          <button
            className={`tab ${
              activeTab === "Validate DocType" ? "tabActive" : ""
            }`}
            onClick={() => handleTabClick("Validate DocType")}
          >
            Validate DocType
          </button>
          <button
            className={`tab ${
              activeTab === "Validate DITA Source" ? "tabActive" : ""
            }`}
            onClick={() => handleTabClick("Validate DITA Source")}
          >
            Validate DITA Source
          </button>
          <button
            className={`tab ${activeTab === "Output" ? "tabActive" : ""}`}
            onClick={() => handleTabClick("Output")}
          >
            Output
          </button>
        </div>
        <div className="content">{renderContent()}</div>
      </div>
    </>
  );
};

export default Dashboard;
