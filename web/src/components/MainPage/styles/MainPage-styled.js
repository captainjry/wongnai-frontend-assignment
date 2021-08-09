import styled from "styled-components";
import { Card, Typography, Link, Grid } from "@material-ui/core";

export const StyledTitle = styled(Typography)`
  color: #2c9cdb;
  margin: 0 1em 0;
`;

export const StyledTripTitle = styled(Typography)`
  font-weight: 600;
`;

export const StyledTripDesc = styled(Typography)`
  color: #828282;
  line-height: 1.5;
  margin-bottom: 0.75em;
`;

export const StyledCard = styled(Card)`
  margin: 1em 0;
`;

export const StyledTagLink = styled(Link)`
  margin: 0.25em;
  font-size: 1rem;
  color: #828282;
  text-decoration: underline;
`;

export const StyledMainImageGrid = styled(Grid)`
  align-self: center;
`;

export const StyledMainImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 2/3;
  object-fit: cover;
  object-position: center;
  border-radius: 15%;
`;

export const StyledAddtlImageWrapper = styled.div`
  margin-top: 0;
  overflow: hidden;

  @media (min-width: 1280px) {
    margin-top: 2em;
  }

  @media (min-width: 1440px) {
    margin-top: 4em;
  }
`;

export const StyledAddtlImage = styled.img`
  width: 25%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: bottom;
  border-radius: 15%;
  margin: 0.75em;

  :hover {
    transform: scale(1.25);
  }
`;
