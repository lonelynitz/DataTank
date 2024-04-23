import CollectionsIcon from "@mui/icons-material/Collections";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { ImageList } from "./imageList";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import { api } from "../routes/api";

export const PhotoStore = (props: any) => {
  const { state, setState, handleFile, handleSaveFile, handleFileUpload } = props;

  const fileApi = api();

  const handleCallBackSaveFiles = () => {
    handleSaveFile();
  };

  const handleCallBackFiles = () => {
    handleFile();
  };

  const handleDeleteFile = async () => {
    const response = await fileApi.post("/delete_image", {
      fileId: state.fielfileIds,
    });
    console.log(response.data);
    
  };

  const handleSelectAll = (event:any) => {
    event.stopPropagation()
    const ids = state.image.map((files:any) => files.id)
    setState({...state, checked : !state.checked , fielfileIds : !state.checked ? ids : null})
  }

  
  return (
    <div>
      {!state.isPhotoUpload ? (
        <div
          className="grid justify-items-center"
          onClick={() => handleFileUpload()}
        >
          <CollectionsIcon
            fontSize="large"
            className="cursor-pointer"
            color="success"
          />
          <p className="font-bold">Photos</p>
        </div>
      ) : (
        <div className="grid md:justify-items-center mt-4 pl-14 md:mt-10">
          <Input type="file" onChange={handleCallBackFiles} />
          <Button
            variant="contained"
            onClick={handleCallBackSaveFiles}
            style={{ marginTop: 20, borderRadius: 10 }}
          >
            Save
          </Button>
          <div className="flex justify-center mt-4 md:mt-8">
            <div className="flex items-center">
              {/* <CheckBoxOutlineBlankIcon style={{ marginRight: 20 }} /> */}
              <Button
                variant="contained"
                className="font-bold"
                style={{ borderRadius: 10 }}
                onClick={handleSelectAll}
              >
                {state.checked ? "Unselect All" : "Select All"}
              </Button>
              <div onClick={handleDeleteFile}>
                <DeleteIcon style={{ marginLeft: 20 , cursor: "pointer"}} />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-3 justify-items-center mt-4 md:mt-8">
            {state.image.map((file: any) => (
              <div className="cursor-pointer">
                <ImageList
                  id={file.id}
                  image={file}
                  state={state}
                  setState={setState}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
