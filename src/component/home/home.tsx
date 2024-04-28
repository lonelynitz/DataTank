import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import DuoIcon from "@mui/icons-material/Duo";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="grid justify-items-center mt-10">
      <h2 className="text-2xl font-medium">File Manager</h2>
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
      <div className="grid gap-8 grid-cols-2 grid-rows-2 mt-10">
        <div className="grid justify-items-center">
          <Link to={"/photos"}>
            <AddPhotoAlternateOutlinedIcon
              fontSize="large"
              className="cursor-pointer"
            />
          </Link>
          <p>Photos</p>
        </div>
        <div className="grid justify-items-center">
          <Link to={"/videos"}>
          <DuoIcon fontSize="large" className="cursor-pointer" />
          </Link>
          <p>Videos</p>
        </div>
        <div className="grid justify-items-center">
          <Link to={"/documents"}>
          <ReceiptLongIcon fontSize="large" className="cursor-pointer" />
          </Link>
          <p>Documents</p>
        </div>
        <div className="grid justify-items-center">
          <Link to={"/musics"}>
          <LibraryMusicIcon fontSize="large" className="cursor-pointer" />
          </Link>
          <p>Musics</p>
        </div>
      </div>
    </div>
  );
};
