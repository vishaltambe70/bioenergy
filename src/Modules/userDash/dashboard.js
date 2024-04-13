// src/Dashboard.js
import React from "react";
import Navbar from "../navbar";
import { useLocation } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AnimatedNumbers from "react-animated-numbers";

function Dashboard() {
  const location = useLocation();
  const { user } = location.state || {};
  console.log("props", user);

  const rows = [
    {
      id: 1,
      username: "akash",
      zone: "zone1",
      totalGarbage: 100458,
      todaysGarbage: 92,
      bioEnergy: 49,
      TotalBioEnergy: 8777,
    },
    {
      id: 2,
      username: "Vikram",
      zone: "zone1",
      totalGarbage: 3440,
      todaysGarbage: 13,
      bioEnergy: 13,
      TotalBioEnergy: 433,
    },
  ];

  const columns = [
    { field: "username", headerName: "First name", flex: 1, minWidth: 150 },
    { field: "zone", headerName: "Zone", flex: 1, minWidth: 150 },
    {
      field: "todaysGarbage",
      headerName: "Todays Garbage",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "bioEnergy",
      headerName: "Todays Bioenergy",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "totalGarbage",
      headerName: "Total Garbage",
      flex: 1,
      minWidth: 150,
    },

    {
      field: "TotalBioEnergy",
      headerName: "Total Bioenergy",
      flex: 1,
      minWidth: 150,
    },
  ];
  return (
    <>
      <Navbar user={user} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "100vh", // Ensure the container covers the entire viewport height
        }}
      >
        <Container
          sx={{
            m: 2,
            p: 2,
            border: "2px solid #4CAF50", // Green energy color
            borderRadius: "10px", // Rounded border
            position: "relative", // To position the watermark
          }}
        >
          {/* Watermark Image */}
          <img
            src={process.env.PUBLIC_URL + "/images/bioene.png"}
            alt="Watermark"
            style={{
              position: "absolute",
              height: "700px",
              right: "250px",
              top: "-60px",
              opacity: 0.1,
            }}
          />

          {/* Content inside the container */}
          <div>
            {/* Your content goes here */}
            <h2>Bioenergy Generation</h2>
            <Grid>
              Total Energy generted:
              <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={45544}
                fontStyle={{
                  fontSize: 40,
                  color: "red",
                }}
              />
              kW
            </Grid>
            <DataGrid
              columns={columns}
              rows={rows}
              slots={{
                toolbar: GridToolbar,
              }}
            />{" "}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
