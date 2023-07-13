import { Box, Divider, Radio } from "@mui/material";
import React from "react";
import { SiMastercard } from "react-icons/si";
export const Card = ({ name,controlProps }) => {
   
  return (
    <Box className="py-4 max-w-[920px]">
      {" "}
      <Divider />
      <Box className="flex justify-between">
        <Box className="flex align-baseline py-4 ">
          <SiMastercard className="text-[32px]" />
          <p className="px-2 font-semibold">{name}</p>
        </Box>
        <Radio {...controlProps('a')} />
      </Box>
      <Divider />
    </Box>
  );
};
