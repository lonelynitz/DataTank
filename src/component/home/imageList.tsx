import { Checkbox, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
//import { useState } from "react";
//import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export const ImageList = (props: any) => {
  const { image , state , setState } = props;

  const [ checked , setChecked ] = useState(false)

  const handleCheckboxChange = (event:any) => {
    const { checked } = event.target;
    setChecked(checked)
    setState({ ...state, fileIds: checked ? [image.id] : []});
  };

 
  return (
    <List>
      <ListItem>
        {(
          <Checkbox
            checked={checked}
            onChange={handleCheckboxChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        )}
        <div 
        // onClick={handleCheckBox}
        >
          <ListItemText style={{ marginLeft: 5 }} primary={image.filename} />
        </div>
      </ListItem>
    </List>
  );
};
