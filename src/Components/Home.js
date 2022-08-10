import React from 'react';
import { Container, Grow, Grid } from "@mui/material";
import { Form } from "./Form.js";
import { Posts } from "./Posts/Posts.js";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../Redux/Slice";


export const Home = () => {
    const [currentId, setCurrentId] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
        <Container>
          <Grid
            sx={{
              flexDirection: {
                xs: "column-reverse",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}
