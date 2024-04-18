// src/Dashboard.js
import React from "react";
import Navbar from "../navbar";
import { useLocation } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
} from "@mui/x-data-grid";
import AnimatedNumbers from "react-animated-numbers";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ADMIN_ROWS } from "../../constants";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const location = useLocation();
  const { user } = location.state || {};
  console.log("props", user);

  const columns = [
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      headerAlign: "center",
      align: "center",
      cellClassName: "actions",
      renderHeader: () => <strong>{"Actions "}</strong>,
      getActions: (params) => {
        // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        // if (isInEditMode) {
        //   return [
        //     <GridActionsCellItem
        //       icon={<SaveIcon />}
        //       label="Save"
        //       sx={{
        //         color: "primary.main",
        //       }}
        //       // onClick={handleSaveClick(id)}
        //     />,
        //     <GridActionsCellItem
        //       icon={<CancelIcon />}
        //       label="Cancel"
        //       className="textPrimary"
        //       // onClick={handleCancelClick(id)}
        //       color="inherit"
        //     />,
        //   ];
        // }

        return [
          <GridActionsCellItem
            icon={<VisibilityIcon color={"primary"} />}
            label="Edit"
            className="textPrimary"
            onClick={(e) => {
              handleViewClick(e, params.row);
            }}
            color="inherit"
          />,
        ];
      },
    },
    {
      field: "username",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => <strong>{"Name "}</strong>,
    },
    {
      field: "zone",
      headerName: "Zone",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => <strong>{"Zone "}</strong>,
    },
    {
      field: "todaysGarbage",
      headerName: "Todays Garbage",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => (
        <strong>
          {"Todays Garbage "}
          <span role="img" aria-label="enjoy">
            (Tons)
          </span>
        </strong>
      ),
    },
    {
      field: "bioEnergy",
      headerName: "Todays Bioenergy",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => (
        <strong>
          {"Todays Bioenergy "}
          <span role="img" aria-label="enjoy">
            (kW)
          </span>
        </strong>
      ),
    },
    {
      field: "totalGarbage",
      headerName: "Total Garbage",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => (
        <strong>
          {"Total Garbage "}
          <span role="img" aria-label="enjoy">
            (Tons)
          </span>
        </strong>
      ),
    },

    {
      field: "TotalBioEnergy",
      headerName: "Total Bioenergy",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => (
        <strong>
          {"Total Bioenergy "}
          <span role="img" aria-label="enjoy">
            (kW)
          </span>
        </strong>
      ),
    },
  ];

  const handleViewClick = (e, params) => {
    console.log("params", params);
  };
  return (
    <>
      <Navbar user={user} id={0} />

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
            <h2>Bioenergy Generation (Admin)</h2>
            <Grid sx={{ display: "flex", justifyContent: "center", m: 2 }}>
              {/* <Typography sx={{ fontSize: 20 }}> */}
              Total BioEnergy Generted: &nbsp;&nbsp;
              <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={45544}
                fontStyle={{
                  // fontSize: 40,
                  color: "#4CAF50",
                }}
              ></AnimatedNumbers>
              &nbsp; kW &nbsp;&nbsp; BioEnergy Generted Today: &nbsp;&nbsp;
              <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={330}
                fontStyle={{
                  // fontSize: 40,
                  color: "#4CAF50",
                }}
              ></AnimatedNumbers>
              &nbsp; kW
            </Grid>
            <DataGrid
              columns={columns}
              rows={ADMIN_ROWS}
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
