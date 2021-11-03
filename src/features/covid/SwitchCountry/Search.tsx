import React from "react";
import {TextField, Box} from "@material-ui/core";

const SearchField: React.FC = () => {
  return (
    <div>
      <Box>
        <TextField id="outlined-basic" label="Search id" variant="outlined" />
      </Box>
    </div>
  );
};

export default SearchField;
