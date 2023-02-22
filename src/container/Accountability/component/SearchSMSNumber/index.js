import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "../../../../assets/icons";
import { SearchInput } from "../../../../components";

const SearchSMSNumber = () => {
  return (
    <Box>
      <Box display={"flex"} alignItems="center" justifyContent="space-between">
        <Typography
          component={"h2"}
          color={"#75787B"}
          fontFamily={"Regular"}
          fontSize={"16px"}
        >
          Mobil Nömrə
        </Typography>
        <SearchInput
          placeholder="Mobil nömrə ilə axtarış..."
          color="#75787B"
          height={"32px"}
          width={"250px"}
          backgroundColor="#FFFFFF"
          startAdornment={<Icon name={"search"} />}
        />
      </Box>
    </Box>
  );
};

export default SearchSMSNumber;
