import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import "./ShowItem.css";

const ShowItem = (props) => {
  const [quantity, setQuantity] = React.useState("");

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const mySelectStyle = {
    height: "50px",
    width: "111px",
  };
  const mySubmitButton = {
    height: "50px",
  };

  return (
    <div className="section-ShowItem">
      <div className="item-section-ShowItem">
        <div className="item-left-area">
          <img alt="img" src="https://dummyimage.com/200x200/000/fff" />
          <img alt="img" src="https://dummyimage.com/200x200/000/fff" />
          <img alt="img" src="https://dummyimage.com/200x200/000/fff" />
        </div>
        <div className="item-center-area">
          <img alt="img" src="https://dummyimage.com/400x400/000/fff" />
        </div>
        <div className="item-right-area">
          <div className="item-rigt-description-area">
            <h1>Item name</h1>
            <span>Descripcion del producto</span>
          </div>
          <div className="item-right-form-area">
            <FormControl>
              <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quantity}
                label="Cantidad"
                onChange={handleChange}
                sx={mySelectStyle}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" sx={mySubmitButton}>
              Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
