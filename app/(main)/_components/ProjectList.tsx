"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import ReviewCard from "@/components/Card";

// 50個くらいのカードデータを作成
const cardsData = [...Array(50).keys()].map((i) => ({
  id: i,
  title: `Card Title ${i}`,
  subheader: `Card Subheader ${i}`,
}));

interface HomeProps {}

export const ProjectList: React.FC<HomeProps> = () => {
  return (
    <Grid container spacing={2} px={2}>
      {cardsData.map((cardData) => (
        <Grid item xs={12} sm={6} md={4} key={cardData.id}>
          <ReviewCard cardData={cardData} />
        </Grid>
      ))}
    </Grid>
  );
};
