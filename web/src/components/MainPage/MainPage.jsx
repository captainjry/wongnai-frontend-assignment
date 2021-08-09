import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import useQuery from "../../hooks/useQuery";
import { Input, Grid } from "@material-ui/core";
import { StyledTitle } from "./styles/MainPage-styled";
import Card from "./MainPageItem/TripCard";

const MainPage = () => {
  let query = useQuery();
  let history = useHistory();
  const queryKeyword = !!query.get("keyword") ? query.get("keyword") : "";

  const [tripsData, setTripsData] = useState([]);
  const [input, setInput] = useState(queryKeyword);
  const [keyword, setKeyword] = useState(queryKeyword);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/v1/trips");
        setTripsData(data.trips);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrips();
  }, []);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const fetchTrips = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:3000/api/v1/trips?keyword=${keyword}`
          );
          setTripsData(data.trips);
        } catch (err) {
          console.error(err);
        }
      };
      fetchTrips();
    });

    return () => clearTimeout(timeOutId);
  }, [keyword]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setKeyword(e.target.value);
    history.push({ search: `?keyword=${e.target.value}` });
  };

  const handleTagClick = (e) => {
    setInput(e.target.innerText);
    setKeyword(e.target.innerText);
    history.push({ search: `?keyword=${e.target.innerText}` });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} alignSelf="center">
        <StyledTitle variant="h2">เที่ยวไหนดี</StyledTitle>
      </Grid>
      <Grid item xs={12}>
        <Input
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          inputProps={{
            "aria-label": "description",
            style: { textAlign: "center" },
          }}
          onChange={handleInputChange}
          value={input}
        />
      </Grid>
      <Grid item xs={12}>
        {tripsData &&
          tripsData.map((trip) => {
            return (
              <Card
                key={trip.eid}
                trip={trip}
                handleTagClick={handleTagClick}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default MainPage;
