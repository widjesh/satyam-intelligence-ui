/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiTypography from "components/SuiTypography";

function ReviewCell({ rating }) {
  const ratings = {
    0.5: [
      <Icon className="" key={1}>
        star_outline
      </Icon>,
      <Icon className="" key={2}>
        star_outline
      </Icon>,
      <Icon className="" key={3}>
        star_outline
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    1: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star_outline
      </Icon>,
      <Icon className="" key={3}>
        star_outline
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    1.5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star_half
      </Icon>,
      <Icon className="" key={3}>
        star_outline
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    2: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star_outline
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    2.5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star_half
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    3: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    3.5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star_half
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    4: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    4.5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star
      </Icon>,
      <Icon className="" key={5}>
        star_half
      </Icon>,
    ],
    5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star
      </Icon>,
      <Icon className="" key={5}>
        star
      </Icon>,
    ],
  };

  return (
    <SuiTypography variant="h4" textColor="text">
      {ratings[rating]}
    </SuiTypography>
  );
}

// Typechecking props for the ReviewCell
ReviewCell.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ReviewCell;
