import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "./searchSlice";
import "./index.scss";
import seachIcon from "./search-icon.png";
import { DisplayEvents } from "./DisplayEvents";

export const Search = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const [events, setEvents] = useState({});
  const data = useSelector((state) => state.search.data);

  useEffect(() => {
    if (data) {
      setEvents(data);
    }
    if (userInput === "") {
      setEvents({});
    }
  }, [userInput, data]);

  const handleChange = (e) => {
    let value = e.target.value;
    dispatch(fetchEvents(value));
    setUserInput(value);
  };

  return (
    <div className="search">
      <div className="search-input-container">
        <img className="search-input-icon" src={seachIcon} />
        <input
          className="search-input-box"
          value={userInput}
          type="text"
          onChange={(e) => handleChange(e)}
        />
      </div>
      {events?.events?.length ||
      events?.performers?.length ||
      events?.venues?.length ? (
        <div className="search-result">
          <DisplayEvents data={events} />
        </div>
      ) : null}
    </div>
  );
};
