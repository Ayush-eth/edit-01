import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Navbar from "../components/Navbar";

function HomeScreen() {
  const [rooms, setrooms] = useState([]);
  useEffect(async () => {
    async function fetchData() {
      try {
        const roomdata =  await axios.get("/api/rooms/getallrooms");
        console.log(roomdata.data);
        setrooms(rooms => [...rooms, roomdata.data]);
      } catch (error) {
        console.log(error);
      }
    }
    await fetchData();
  }, []);
  const x = rooms[0];
  return (
    <div>
      <Navbar />
      <Room data={x} />
      List Of rooms
    </div>
  );
}

export default HomeScreen;
