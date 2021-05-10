import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "./searchSlice";
import "./index.scss";
import seachIcon from "./search-icon.png";

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
          <div className="search-result-container">
            {events.events.slice(0, 3).map((e, index) => (
              <div key={index} className="event">
                {displayEvent("events", e)}
              </div>
            ))}
            {events.performers.slice(0, 3).map((e, index) => (
              <div key={index} className="event">
                {displayEvent("performers", e)}
              </div>
            ))}

            {events.venues.slice(0, 3).map((e, index) => (
              <div key={index} className="event">
                {displayEvent("venues", e)}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const displayEvent = (type, event) => {
  let image = "";
  let title = "";
  let subtitle = "";
  if (type === "events") {
    image = event.event.map_url;
    title = event.event.name;
    subtitle = event.venue.slug.replace(/(?:_| |\b)(\w)/g, function ($1) {
      return $1.toUpperCase().replace("_", " ");
    });
  }

  if (type === "performers") {
    image = event.hero_image_url;
    title = event.medium_name;
    subtitle = event.name;
  }

  if (type === "venues") {
    image = event.image_url;
    title = event.name;
    subtitle = event.city;
  }

  return (
    <div className="event-container">
      <div className="event-image">
        <img src={image} />
      </div>
      <div className="event-title">{title}</div>
      <div className="event-subtitle">{subtitle}</div>
    </div>
  );
};
