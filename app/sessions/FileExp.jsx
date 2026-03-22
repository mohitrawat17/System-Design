import React, { useState } from "react";
import { fileExplorerData } from "../assets/constants";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

const FolderRenderer = ({ folderData, onAddNew, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState({});

  const onAddData = (isFolder, parentId) => {
    setIsExpanded({ ...isExpanded, parentId: true });
    const name = prompt(`${isFolder ? "Folder" : "File"} Name`);
    const obj = {
      id: Math.random(),
      name,
      isFolder,
    };
    onAddNew(obj, parentId);
  };

  return folderData?.map((item) => (
    <div key={item?.id}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {item?.isFolder &&
          (isExpanded[item?.id] ? (
            <FaAngleDown
              onClick={() =>
                setIsExpanded(
                  isExpanded[item?.id]
                    ? { ...isExpanded, [item.id]: false }
                    : { ...isExpanded, [item.id]: true },
                )
              }
            />
          ) : (
            <FaAngleRight
              onClick={() =>
                setIsExpanded(
                  isExpanded[item?.id]
                    ? { ...isExpanded, [item.id]: false }
                    : { ...isExpanded, [item.id]: true },
                )
              }
            />
          ))}

        <h4
          style={{
            fontSize: "14px",
            fontWeight: item?.isFolder ? "500" : "",
            paddingLeft: item?.isFolder ? "" : "10px",
            cursor: "pointer",
          }}
          onClick={() =>
            setIsExpanded(
              isExpanded[item?.id]
                ? { ...isExpanded, [item.id]: false }
                : { ...isExpanded, [item.id]: true },
            )
          }
        >
          {item?.name}
        </h4>
        {item?.isFolder && (
          <>
            <AiOutlineFileAdd
              onClick={() => onAddData(false, item?.id)}
              style={{ cursor: "pointer", height: "14px", width: "14px" }}
            />
            <AiOutlineFolderAdd
              onClick={() => onAddData(true, item?.id)}
              style={{ cursor: "pointer", height: "14px", width: "14px" }}
            />
          </>
        )}
        <MdDeleteOutline
          onClick={() => onDelete(item?.id)}
          style={{ cursor: "pointer", height: "14px", width: "14px" }}
        />
      </div>
      {item?.isFolder && isExpanded[item?.id] && (
        <div>
          <div style={{ paddingLeft: "8px" }}>
            <FolderRenderer
              folderData={item?.children || []}
              onAddNew={onAddNew}
              onDelete={onDelete}
            />
          </div>
        </div>
      )}
    </div>
  ));
};

const FileExp = () => {
  const [data, setData] = useState(fileExplorerData);

  const onAddNew = (newData, parentId) => {
    const updateList = (list) => {
      return list.map((item) => {
        if (item?.id === parentId) {
          return { ...item, children: [newData, ...(item?.children || [])] };
        } else if (item?.children) {
          return { ...item, children: updateList(item?.children) || [] };
        }
        return item;
      });
    };

    setData(updateList(data));
  };

  const onDelete = (id) => {
    const updateList = (list) => {
      return list.map((item) => {
        if (item?.id === id) {
          return { };
        } else if (item?.children) {
          return { ...item, children: updateList(item?.children) };
        }
        return item;
      })?.filter((item)=>item?.id);
    };

    setData(updateList(data));
  };

  return (
    <div
      style={{
        border: "1px solid grey",
        margin: "20px",
        padding: "10px",
        height: "90vh",
        width: "max-content",
        overflowY: "auto",
      }}
    >
      <FolderRenderer
        folderData={data}
        onAddNew={onAddNew}
        onDelete={onDelete}
      />
    </div>
  );
};

export default FileExp;
