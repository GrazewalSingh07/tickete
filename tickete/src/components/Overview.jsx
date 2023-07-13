import { Box, Divider, MenuItem, Typography } from "@mui/material";
import React from "react";
import SellIcon from "@mui/icons-material/Sell";
export const Overview = () => {
  return (
    <Box className="max-w-[360px] py-4 px-2 ">
      <p className="font-semibold text-lg text-left">Tickets overview</p>
      <Box className="min-w-[300px] pt-4">
        <MenuItem>
          {" "}
          <p className="flex justify-between w-full ">
            <span>{"<pax type>"}</span> <span>{"<price>"}</span>
          </p>
        </MenuItem>
        <MenuItem>
          {" "}
          <p className="flex justify-between w-full ">
            <span>{"<pax type>"}</span> <span>{"<price>"}</span>
          </p>
        </MenuItem>
        <MenuItem>
          {" "}
          <p className="flex justify-between w-full ">
            <span>{"<pax type>"}</span> <span>{"<price>"}</span>
          </p>
        </MenuItem>
      </Box>
      <Box>
        <MenuItem>
          {" "}
          <p className="flex justify-between w-full py-2">
            <span className="text-green-700">{"<discount applied>"}</span>{" "}
            <span className="text-green-700">{"< - price>"}</span>
          </p>
        </MenuItem>
      </Box>
      <Divider />
      <Box>
        <MenuItem>
          {" "}
          <p className=" py-2">
            <SellIcon className="text-green-700" />
            <span className="text-green-800 font-semibold px-2 underline">
              Have a coupon code?
            </span>{" "}
          </p>
        </MenuItem>
      </Box>
      <Divider />
      <Box className='py-4'>
        <p className="flex justify-between w-full">
          <span >{"Total"}</span>{" "}
          <span className="font-semibold">{"<price>"}</span>
        </p>
        <p className="text-left text-sm underline">You will pay in {"INR"}</p>
      </Box>
      <Box className="p-4 bg-slate-200 rounded-md">
        <p className="text-left">
          <span>{"Free cancellation"}</span>{" "}
        </p>

        <p className="text-left">
          {" "}
          <span className="text-gray-700">
            {"Cancel before <date> for a full refund"}
          </span>
        </p>
      </Box>
    </Box>
  );
};
