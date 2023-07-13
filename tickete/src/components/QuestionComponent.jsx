import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
  } from "@mui/material";
 
  import AddIcon from "@mui/icons-material/Add";
  import RemoveIcon from "@mui/icons-material/Remove";


export const QuestionComponent = ({question, answer}) => {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
    sx={{maxWidth:'720px'}}
       disableGutters={true}
            expanded={expanded === "panel"}
            onChange={handleChange("panel")}
          >
            <AccordionSummary
              expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.secondary"}}>
               {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails  >
              <Typography>
              {answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
  )
}
