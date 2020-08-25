import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  box: {
    width: "166px",
    margin: "5px"
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "64px",
    padding: "0",
    width: "85%"
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  cardTitle: {
    fontSize: "24px"
  },
  formLabel: {
    paddingBottom: "20px"
  },
  formControl: {
    width: "100%",
    marginBottom: "40px"
  },
  formGroup: {
    flexDirection: "row",
    justifyContent: "center"
  },
  tubingPressure: {
    color: "green"
  },
  casingPressure: {
    color: "blue"
  },
  oilTemp: {
    color: "purple"
  },
  flareTemp: {
    color: "red"
  },
  waterTemp: {
    color: "teal"
  },
  injValveOpen: {
    color: "black"
  }
});

const EOGCheckbox = withStyles({
  root: {
    color: grey[500],
    "&$checked": {
      color: grey[900]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const metricArray = [
  {
    value: "tubingPressure",
    label: "Tubing Pressure",
    color: ""
  },
  {
    value: "casingPressure",
    label: "Casing Pressure"
  },
  {
    value: "oilTemp",
    label: "Oil Temp"
  },
  {
    value: "flareTemp",
    label: "Flare Temp"
  },
  {
    value: "waterTemp",
    label: "Water Temp"
  },
  {
    value: "injValveOpen",
    label: "Inj Valve Open"
  }
];

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedMetric = useSelector(
    state => state.selectedMetrics.selectedMetric
  );
  const measurements = useSelector(state => state.measurements);

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend" className={classes.formLabel}>
        Select metric:
      </FormLabel>
      <FormGroup className={classes.formGroup}>
        {metricArray.map((metric, i) => {
          const isChecked = metric.value === selectedMetric;
          return (
            <Box className={classes.box} key={`metric${i}`}>
              <FormControlLabel
                control={
                  <EOGCheckbox
                    // checked={selectedMetrics[metric.value]}
                    checked={isChecked}
                    onChange={() =>
                      dispatch({
                        type: "SELECT_METRIC",
                        payload: metric.value
                      })
                    }
                    value={metric.value}
                  />
                }
                label={metric.label}
              />
              {isChecked ? (
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.cardTitle}>
                      <span className={classes[selectedMetric]}>
                        {measurements.length ? (
                          measurements[measurements.length - 1].value
                        ) : (
                          <>...</>
                        )}
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              ) : null}
            </Box>
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
