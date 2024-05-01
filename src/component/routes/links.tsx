import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import DuoIcon from "@mui/icons-material/Duo";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

export const routes = [
  {
    id: 1,
    name: "Photos",
    link: "/photos",
    icon: (
      <AddPhotoAlternateOutlinedIcon
        fontSize="large"
        className="cursor-pointer"
      />
    ),
  },
  {
    id: 2,
    name: "Videos",
    link: "/videos",
    icon: <DuoIcon fontSize="large" className="cursor-pointer" />,
  },
  {
    id: 3,
    name: "Documents",
    link: "/documents",
    icon: <ReceiptLongIcon fontSize="large" className="cursor-pointer" />,
  },
  {
    id: 4,
    name: "Musics",
    link: "/musics",
    icon: <LibraryMusicIcon fontSize="large" className="cursor-pointer" />,
  },
];