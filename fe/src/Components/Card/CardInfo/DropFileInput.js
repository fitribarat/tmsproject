import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UploadIcon from "@mui/icons-material/Upload";
import useFileDownloader from "./useFileDownloader";

import "./DropFileInput.css";

import { FileConfig } from "./FileConfig";
import uploadImg from "./fileimg/uploadfoto.png";

const files = [
  {
    name: "Photo 1",
    thumb:
      "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=427&q=80 427w",
    file:
      "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?rnd=" +
      Math.random(),
    filename: "photo-1.jpg,",
  },
];

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  const [downloadFile, downloaderComponentUI] = useFileDownloader();
  const fileDownload = (file) => downloadFile(file);

  const fileUpload = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>Drag & Drop your files here</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">List Attachment</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <img
                src={
                  FileConfig[item.type.split("/")[1]] || FileConfig["default"]
                }
                alt=""
              />
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
                <p>{item.size}B</p>
              </div>

              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              >
                <DeleteForeverIcon />
              </span>
              <span
                className="drop-file-preview__item__download"
                onClick={() => fileDownload(item)}
              >
                <DownloadIcon />
              </span>
              <span
                className="drop-file-preview__item__upload"
                onClick={() => fileUpload(item)}
              >
                <UploadIcon />
              </span>
            </div>
          ))}
        </div>
      ) : null}
      {downloaderComponentUI}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
