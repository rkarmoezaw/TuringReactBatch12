"use client";

import { Movie } from "@/lib/types";
import MovieList from "./components/MovieList";

const movies: Movie[] = [
  {
    _id: "mov_001",
    title: "The Silent Echo",
    year: 2022,
    director: {
      _id: "dir_101",
      name: "Elena Rodriguez",
      phoneNo: "555-0102",
    },
  },
  {
    _id: "mov_002",
    title: "Midnight in Tokyo",
    year: 2019,
    director: {
      _id: "dir_102",
      name: "Kenji Tanaka",
      phoneNo: "555-0145",
    },
  },
  {
    _id: "mov_003",
    title: "Dust and Starlight",
    year: 2024,
    director: {
      _id: "dir_103",
      name: "Sarah Jenkins",
      phoneNo: "555-0189",
    },
  },
  {
    _id: "mov_004",
    title: "The Last Cipher",
    year: 2021,
    director: {
      _id: "dir_104",
      name: "Marcus Thorne",
      phoneNo: "555-0121",
    },
  },
  {
    _id: "mov_005",
    title: "Ocean's Breath",
    year: 2018,
    director: {
      _id: "dir_105",
      name: "Luca Moretti",
      phoneNo: "555-0166",
    },
  },
  {
    _id: "mov_006",
    title: "Beyond the Grid",
    year: 2025,
    director: {
      _id: "dir_106",
      name: "Amina Al-Farsi",
      phoneNo: "555-0133",
    },
  },
  {
    _id: "mov_007",
    title: "Concrete Jungle",
    year: 2020,
    director: {
      _id: "dir_107",
      name: "David 'Dax' Miller",
      phoneNo: "555-0177",
    },
  },
  {
    _id: "mov_008",
    title: "The Clockwork Heart",
    year: 2023,
    director: {
      _id: "dir_108",
      name: "Isabella Dubois",
      phoneNo: "555-0192",
    },
  },
  {
    _id: "mov_009",
    title: "Neon Shadows",
    year: 2017,
    director: {
      _id: "dir_109",
      name: "Victor Volkov",
      phoneNo: "555-0111",
    },
  },
  {
    _id: "mov_010",
    title: "Faded Canvas",
    year: 2021,
    director: {
      _id: "dir_110",
      name: "Maya Lin",
      phoneNo: "555-0154",
    },
  },
];

export default function page() {
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
