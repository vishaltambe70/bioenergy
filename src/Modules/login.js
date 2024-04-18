// src/Login.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Array of user objects with username and password properties
  const users = [
    { username: "admin", password: "123" },
    { username: "akash_rale", password: "123" },
    { username: "vikram_singh", password: "123" },
    { username: "sarala_jain", password: "123" },
    { username: "kamini_rathod", password: "123" },
    // Add more users as needed
  ];

  const handleLogin = () => {
    // Check if there's a user with the entered username and password
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      if (username === "admin") {
        navigate("/dashboard", { state: { user: username } });
      } else {
        let userId = 12;
        navigate("/user-dashboard", {
          state: { user: username, userId: userId },
        });
      }
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        // minHeight: "100vh", // Ensure the container covers the entire viewport height
      }}
    >
      <Container
        sx={{
          m: 2,
          p: 2,
          // border: "2px solid #4CAF50", // Green energy color
          // borderRadius: "10px", // Rounded border
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

        <div
          style={{
            margin: 2,
            padding: 2,
            // border: "2px solid #4CAF50", // Green energy color
            // borderRadius: "10px", // Rounded
          }}
        >
          <Typography variant="h2">
            <img
              src={process.env.PUBLIC_URL + "/images/bioene.png"}
              alt="My Image"
              height={"50px"}
              width={"50px"}
              style={{ marginRight: "15px" }}
            />
            Bioenergy
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />
          <br />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
