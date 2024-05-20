import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Tableau10 = [
  "#f28e2c",
  "#59a14f",
  "#4e79a7",
  "#e15759",
  "#76b7b2",
  "#edc949",
  "#af7aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ab",
];

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 200,
};
export default function BasicColor() {
  const [color, setColor] = React.useState("#f28e2c");

  const handleChange = (event, nextColor) => {
    setColor(nextColor);
  };
  const p = (
    <>
      <p style={{ color: "red", fontSize: "300px" }}>kljkx</p>
    </>
  );

  return (
    <Stack
      direction="column"
      spacing={2}
      color="yellow"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <LineChart
        {...chartsParams}
        series={[
          {
            data: [15, 23, 18, 19, 13],
            label: `${p.props.children.props.children}  `,
            color,
          },
        ]}
      />
      <ToggleButtonGroup
        // orientation="vertical"
        value={color}
        exclusive
        onChange={handleChange}
      >
        {Tableau10.map((value) => (
          <ToggleButton key={value} value={value} sx={{ p: 1 }}>
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: value,
                display: "inline-block",
              }}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}
