// src/DashboardUser.js
import React, { useState, useEffect } from "react";
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
import {
  ADMIN_ROWS,
  AKASH_RALE,
  KAMINI_RATHOD,
  SARALA_JAIN,
  VIKRAM_SINGH,
} from "../../constants";
function DashboardUser() {
  const location = useLocation();
  const { user, userId } = location.state || {};
  console.log("props", user);

  const columns = [
    // {
    //   field: "actions",
    //   type: "actions",
    //   headerAlign: "center",
    //   align: "center",
    //   headerName: "Actions",
    //   width: 100,
    //   cellClassName: "actions",
    //   renderHeader: () => <strong>{"Actions "}</strong>,
    //   getActions: (params) => {
    //     // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    //     // if (isInEditMode) {
    //     //   return [
    //     //     <GridActionsCellItem
    //     //       icon={<SaveIcon />}
    //     //       label="Save"
    //     //       sx={{
    //     //         color: "primary.main",
    //     //       }}
    //     //       // onClick={handleSaveClick(id)}
    //     //     />,
    //     //     <GridActionsCellItem
    //     //       icon={<CancelIcon />}
    //     //       label="Cancel"
    //     //       className="textPrimary"
    //     //       // onClick={handleCancelClick(id)}
    //     //       color="inherit"
    //     //     />,
    //     //   ];
    //     // }

    //     return [
    //       <GridActionsCellItem
    //         icon={<VisibilityIcon color={"primary"} />}
    //         label="Edit"
    //         className="textPrimary"
    //         onClick={(e) => {
    //           handleViewClick(e, params.row);
    //         }}
    //         color="inherit"
    //       />,
    //     ];
    //   },
    // },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => <strong align="center">{"Date "}</strong>,
    },

    {
      field: "todaysGarbage",
      headerName: "Garbage",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => (
        <strong>
          {"Garbage Collected "}
          <span role="img" aria-label="enjoy">
            (Tons)
          </span>
        </strong>
      ),
    },
    {
      field: "bioEnergy",
      headerName: "Bioenergy",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => (
        <strong>
          {"Bioenergy Generated "}
          <span role="img" aria-label="enjoy">
            (kW)
          </span>
        </strong>
      ),
    },
    {
      field: "progress",
      headerName: "Progress",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => (
        <strong align="center">
          {"Progress "}
          <span role="img" aria-label="enjoy">
            (Level 1-6)
          </span>
        </strong>
      ),
    },

    {
      field: "expectedEndDate",
      headerName: "Expected Time",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderHeader: () => (
        <strong align="center">
          {"Expected Time "}
          <span role="img" aria-label="enjoy">
            (Days)
          </span>
        </strong>
      ),
    },
  ];
  const [listData, setListData] = useState([]);
  const [totalGarbage, setTotalGarbage] = useState(0);
  const [totalBioEnergy, setTotalBioEnergy] = useState(0);
  const [total, setTotal] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const handleViewClick = (e, params) => {
    console.log("params", params);
  };

  const getData = () => {
    const filteredUser = ADMIN_ROWS.filter((name) => name.userId === user);
    console.log("filtered user ", filteredUser);
    let data = [];
    if (filteredUser[0].userId === "kamini_rathod") {
      data = KAMINI_RATHOD;
      setListData(KAMINI_RATHOD);
    } else if (filteredUser[0].userId === "akash_rale") {
      data = AKASH_RALE;
      setListData(AKASH_RALE);
    } else if (filteredUser[0].userId === "sarala_jain") {
      data = SARALA_JAIN;
      setListData(SARALA_JAIN);
    } else if (filteredUser[0].userId === "vikram_singh") {
      data = VIKRAM_SINGH;
      setListData(VIKRAM_SINGH);
    }

    const totalBioEnergy = data.reduce((total, user) => {
      return total + user.bioEnergy;
    }, 0);

    const totalGarbage = data.reduce((total, user) => {
      return total + user.todaysGarbage;
    }, 0);

    setTotalBioEnergy(totalBioEnergy);
    setTotalGarbage(totalGarbage);

    return listData;
  };
  return (
    <>
      <Navbar user={user} id={userId} />

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
            <h2>Bioenergy Generation </h2>
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
                animateToNumber={totalBioEnergy}
                fontStyle={{
                  // fontSize: 40,
                  color: "#4CAF50",
                }}
              ></AnimatedNumbers>
              &nbsp; kW &nbsp;&nbsp; Total Garbage Collected: &nbsp;&nbsp;
              <AnimatedNumbers
                includeComma
                // className={styles.container}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={totalGarbage}
                fontStyle={{
                  // fontSize: 40,
                  color: "#4CAF50",
                }}
              ></AnimatedNumbers>
              &nbsp; kW
            </Grid>
            <DataGrid
              columns={columns}
              rows={listData}
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

export default DashboardUser;
