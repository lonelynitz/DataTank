import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { routes } from "../routes/links";

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
      <div>
        <div className="grid gap-8 grid-cols-2  grid-rows-2 mt-10">
          {routes.map((order: any) => (
            <div className="flex justify-center text-center">
              <Link to={order.link}>{order.icon}<p>{order.name}</p></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
