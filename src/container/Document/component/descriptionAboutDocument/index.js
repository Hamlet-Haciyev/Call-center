import React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { Button } from "../../../../components";
import { Icon } from "../../../../assets/icons";
const DescriptionDocument = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Typography
        component={"h4"}
        fontFamily="Regular"
        padding="15px 20px"
        backgroundColor="#FBFBFB"
        color={"#75787B"}
      >
        Sənəd haqqında açıqlama
      </Typography>
      <Box sx={{ padding: "20px 0" }}>
        <Typography
          component={"p"}
          fontFamily="Regular"
          margin="0 20px 20px"
          color={"#75787B"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam pharetra
          imperdiet laoreet nunc venenatis, tristique nunc, tempus, amet. Id
          aliquam augue ante egestas mattis libero, velit consectetur ipsum. Et,
          rutrum ullamcorper volutpat semper. A, a vitae interdum gravida nunc
          tincidunt.
        </Typography>
        <Box sx={{ width: "150px", margin: "0 20px" }}>
          <Button
            text={"Düzəliş et"}
            variant={"outlined"}
            startIcon={<Icon name="edit" />}
            radius="12px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DescriptionDocument;
