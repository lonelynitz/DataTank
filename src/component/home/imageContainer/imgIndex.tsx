import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FileUpload } from "../../common/fileUpload";
import { api } from "../../routes/api";
import { useEffect, useState } from "react";

export const ImgIndex = () => {
  const initial = {
    fileList: [],
    img: [],
    thumbnail: [],
  };

  const [state, setState] = useState(initial);

  const fileList = api();

  useEffect(() => {
    const List = async () => {
      try {
        const list = await fileList.get("/viewFile");
        if (list.data) {
          const imgList = list.data.rows;
          const imgBufferData = imgList.map((data: any) => {
            const img = data.img.data;
            return img.toString("base64");
          });
          setState({ ...state, fileList: imgList, img: imgBufferData });
        }
      } catch (error) {
        console.log(error);
      }
    };
    List();
  }, []);

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
        <div className="mt-10">
          <FileUpload />
        </div>
      </div>
    </div>
  );
};
