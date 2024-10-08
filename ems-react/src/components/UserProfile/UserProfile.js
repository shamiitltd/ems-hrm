import React, { useState } from "react";
import { Avatar, Button, TextField, Grid, Paper, Typography } from "@mui/material";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    username: "john_doe",
    email: "john.doe@example.com",
    role: "Employee",
    profilePicture: "https://via.placeholder.com/150", // Placeholder for profile picture
  });

  // Toggle between Edit and Save mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Handle changes to input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "20px auto" }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Avatar
            src={user.profilePicture}
            alt="Profile Picture"
            style={{ width: "100px", height: "100px" }}
          />
        </Grid>

        <Grid item>
          <Typography variant="h5">{user.username}</Typography>
          <Typography variant="subtitle1">{user.role}</Typography>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Role"
              name="role"
              value={user.role}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" onClick={handleEditClick}>
            {isEditing ? "Save" : "Edit Profile"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default UserProfile;
