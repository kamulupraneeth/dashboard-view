import React from "react";
import { Grid, Paper } from "@mui/material";
import InvoiceChart from "./InvoiceChart";
import CashFlowChart from "./CashFlowChart";
import WatchList from "./WatchList";
import MainComponent from "./LineChart/MainComponent";

const width = 500;
const height = 300;

const Dashboard = ({ data, handleRandomizeLineData }) => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper style={{ marginLeft: 40 }}>
            <MainComponent
              width={width}
              height={height}
              data={data.CheckAccountData}
              handleRandomizeLineData={handleRandomizeLineData}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ marginRight: 40 }}>
            <InvoiceChart
              width={width}
              height={height}
              data={data.InvoiceData}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ marginLeft: 40, marginBottom: 20 }}>
            <CashFlowChart
              width={width}
              height={height}
              data={data.CashFlowData}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ marginRight: 40 }}>
            <WatchList width={width} height={height} />
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Dashboard;
