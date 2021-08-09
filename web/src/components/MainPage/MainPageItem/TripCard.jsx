import React from "react";
import { Typography, Grid, CardContent, Link } from "@material-ui/core";

import {
  StyledCard,
  StyledMainImage,
  StyledTagLink,
  StyledAddtlImage,
  StyledAddtlImageWrapper,
  StyledTripTitle,
  StyledTripDesc,
  StyledMainImageGrid,
} from "../styles/MainPage-styled";

const TripCard = ({ trip, handleTagClick }) => {
  const mainDesc = trip.description.split("\n\n");
  const readMoreDesc = mainDesc.length > 1 ? mainDesc[1].slice(0, 25) : "";
  const hasReadMoreDesc = mainDesc.length > 1;

  return (
    <StyledCard>
      <CardContent>
        <Grid container direction="row" justifyContent="center" spacing={3}>
          <StyledMainImageGrid item xs={12} sm={12} md={4}>
            <StyledMainImage src={trip.photos[0]} />
          </StyledMainImageGrid>
          <Grid item xs={12} sm={12} md={8}>
            <StyledTripTitle variant="h5" gutterBottom>
              <Link underline="none" color="inherit" href={trip.url}>
                {" "}
                {trip.title}
              </Link>
            </StyledTripTitle>

            {hasReadMoreDesc ? (
              <>
                <StyledTripDesc variant="subtitle1" gutterBottom>
                  {mainDesc[0]}
                </StyledTripDesc>
                <StyledTripDesc variant="subtitle1" gutterBottom>
                  {readMoreDesc}
                  <Link href={trip.url}> ...อ่านต่อ</Link>
                </StyledTripDesc>
              </>
            ) : (
              <StyledTripDesc variant="subtitle1" gutterBottom>
                {mainDesc}
                <Link href={trip.url}> ...อ่านต่อ</Link>
              </StyledTripDesc>
            )}

            <Typography variant="caption" gutterBottom>
              หมวด{" "}
              {trip.tags &&
                trip.tags.map((tag) => {
                  return (
                    <StyledTagLink onClick={handleTagClick}>
                      {tag}
                    </StyledTagLink>
                  );
                })}
            </Typography>
            <StyledAddtlImageWrapper>
              <StyledAddtlImage src={trip.photos[1]} />
              <StyledAddtlImage src={trip.photos[2]} />
              <StyledAddtlImage src={trip.photos[3]} />
            </StyledAddtlImageWrapper>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default TripCard;
