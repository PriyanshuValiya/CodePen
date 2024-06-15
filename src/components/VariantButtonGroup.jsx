import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { FaCamera } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function VariantButtonGroup() {
  const handleOnClick = () => {
    alert("Screenshot Of Output Functionality Will Be Update Soon...");
  }

  return (
    <Box className="px-3 my-4 ml-auto">
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button onClick={handleOnClick}><FaCamera /></Button>
        <Button><a href="https://www.linkedin.com/in/priyanshu-valiya19012006/" target='blank'><IoPerson /></a></Button>
      </ButtonGroup>
    </Box>
  );
}

export default VariantButtonGroup;