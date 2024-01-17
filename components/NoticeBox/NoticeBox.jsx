"use client";
import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { usePathname, useRouter, useSearchParams} from "next/navigation";


export default function NoticeBox({ props }) {
  
  const router = useRouter();
  const path = usePathname();
  
  function openNotice(id) {
    router.push(path+"?id="+id);
  }
  

  return (
    <Grid item xs={5} minHeight="15rem" sx={{ padding: "1rem" }}>
      <Paper sx={{ height: "100%", padding: "1rem" }}>
        <Typography variant="p">{props.type}</Typography>
        <Typography component="h4" variant="h5">
          {props.title}
        </Typography>
        <Grid item xs={5}>
          <Typography component="h6" variant="h6">
            {props.area}
          </Typography>
        </Grid>
        <Typography component="p">{props.ingress}</Typography>
        <Button variant="outlined" onClick={() => openNotice(props.id)} >Open notice</Button>
      </Paper>
    </Grid>
  );
};
