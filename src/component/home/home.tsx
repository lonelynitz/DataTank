import { useState } from "react";
import { api } from "../routes/api";
import { PhotoStore } from "./store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { VideoStore } from "./videoStore";
import { AudioStore } from "./AudioStore";

export const Home = () => {
  const initial = {
    files: null,
    image: [],
    fileIds: [],
    checked: false,
    isPhotoUpload: false,
    isCheckDisable : false
  };
  const [state, setState] = useState(initial);

  const fileApi = api();

  const handleFile = (event: any) => {
    setState({ ...state, files: event.target.files[0] });
  };

  const handleSaveFile = async () => {
    try {
      if (state.files) {
        const convertImg = new FormData();
        convertImg.append("image", state.files);
        await fileApi.post("/SaveFile", convertImg);
      } else {
        console.log("File not selected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async () => {
    const filesLists = await fileApi.post("/view_files");
    setState({ ...state, image: filesLists.data, isPhotoUpload: true });
  };

  return (
    <div>
      <div className="flex justify-center bg-blue-400 p-10 relative">
        <div onClick={() => setState({ ...state, isPhotoUpload: false })}>
          <ArrowBackIcon
            fontSize="large"
            className="absolute left-3 cursor-pointer"
          />
        </div>
        <p className="font-bold text-2xl md:text-4xl">My Files</p>
      </div>
      <div className="flex justify-center mt-10">
        <div onClick={handleFileUpload} className="mr-10">
          <PhotoStore
            state={state}
            setState={setState}
            handleSaveFile={handleSaveFile}
            handleFile={handleFile}
            handleFileUpload={handleFileUpload}
          />
        </div>
        <div className="mr-10">
          {!state.isPhotoUpload && <VideoStore />}
        </div>
        <div>
          {!state.isPhotoUpload && <AudioStore />}
        </div>
      </div>
    </div>
  );
};
