import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import CupsRedux from "./CupsRedux";
import CupChampionships from "./CupChampionships";

const cupLayout = () => {
  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <CupChampionships />
        </Grid.Column>
        <Grid.Column width={12}>
          <CupsRedux />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default cupLayout;
