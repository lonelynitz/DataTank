import { createBrowserRouter } from "react-router-dom"
import App from "../../App"
import { ImgIndex } from "../home/imageContainer/imgIndex"


export const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/photos",
    element : <ImgIndex/>
  },
  // // {
  // //   path : "/videos",
  // //   element : <VideoStore/>
  // // },
  // // {
  // //   path : "/musics",
  // //   element : <AudioStore/>
  // }
])

