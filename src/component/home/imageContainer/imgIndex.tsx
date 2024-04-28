import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { api } from "../../routes/api";

export const ImgIndex = () => {

  const apiServer = api()

  const handleUploadImage = (event:any) => {
    //const response = apiServer.post('/fileUpload')
    console.log(event.file.uid);
    
  }


  return (
    <div className="">
      <div className="ml-10 mt-10">
        <p className="font-medium">Photos</p>
        <TextField
          variant="standard"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ marginTop: 20, width: 300 }}
        />
        <div className="flex justify-center mt-10">
          <Upload onChange={handleUploadImage}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
          <Button className="ml-2">Save</Button>
        </div>
      </div>
    </div>
  );
};
