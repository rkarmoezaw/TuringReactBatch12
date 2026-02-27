import { Movie } from "@/lib/types";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import NextLink from "next/link";

export default function MovieUI({ movie }: { movie: Movie }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", margin: "1rem" }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://miro.medium.com/v2/resize:fit:1400/1*w5ShKpux3UiYf9Ml9WXaPA.jpeg"
        alt="Live from space album cover"
      />

      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          {movie.title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          {movie.year}
        </Typography>
        <Typography component="div" variant="h6">
          {movie.director.name}
        </Typography>

        <Button
          component={NextLink}
          href={`/movies/${movie._id}`}
          sx={{ marginTop: 15 }}
          variant="contained"
        >
          Movie Details
        </Button>
      </CardContent>
    </Card>
  );
}
