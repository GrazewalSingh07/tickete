import { Divider, Icon, MenuItem, Typography } from "@mui/material";
import React from "react";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export const Details = () => {
  return (
    <div className="max-w-sm py-4 px-2 ">
      <img
        className="rounded-md"
        src="https://media.istockphoto.com/id/660353478/photo/mother-carrying-son-and-daughter-as-they-play-in-park.jpg?s=612x612&w=0&k=20&c=U4n3W0oeNltHfbjHLWQFh-98-eG6nk1CoCrO5ZXS5EU="
        alt=""
      />
      <p className="text-left font-sans font-semibold text-lg py-2">
        Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House
      </p>

      <MenuItem>
        <Typography>
          {" "}
          <ConfirmationNumberIcon />{" "}
          <span className="font-semibold" >{'variant name'}</span>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography>
          {" "}
          <CalendarTodayIcon />{" "}
          <span className="font-semibold">{'date'}</span>
        </Typography>
      </MenuItem>
     
      <MenuItem> <Typography>
        {" "}
        <AccessTimeFilledIcon />{" "}
        <span className="font-semibold">{'time'}</span>
      </Typography></MenuItem>
      <Divider/>
    </div>
  );
};
