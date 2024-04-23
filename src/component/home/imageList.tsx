import { Checkbox, List, ListItem, ListItemText } from "@mui/material";
//import { useState } from "react";
//import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export const ImageList = (props: any) => {
  const { image , state , setState } = props;
 
  return (
    <List>
      <ListItem>
        {(
          <Checkbox
            checked={state.checked}
            onChange={() => setState({...state , fileIds : image.id})}
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
