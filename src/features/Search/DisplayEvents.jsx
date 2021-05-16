import React from "react";

export const DisplayEvents = ({ data }) => {
  return (
    <div className="search-result">
      <div className="search-result-container">
        {renderEvents(data.events)}
        {renderPerformers(data.performers)}
        {renderVenues(data.venues)}
      </div>
    </div>
  );
};

const renderEvents = (events) => {
  return events.slice(0, 3).map((event) => (
    <Event
      title={event.event.name}
      subtitle={event.venue.slug.replace(/(?:_| |\b)(\w)/g, function ($1) {
        return $1.toUpperCase().replace("_", " ");
      })}
      image_url={event.event.map_url}
    />
  ));
};

const renderPerformers = (performers) => {
  return performers
    .slice(0, 3)
    .map((performer) => (
      <Event
        title={performer.medium_name}
        subtitle={performer.name}
        image_url={performer.hero_image_url}
      />
    ));
};

const renderVenues = (venues) => {
  return venues
    .slice(0, 3)
    .map((venue) => (
      <Event
        title={venue.name}
        subtitle={venue.city}
        image_url={venue.image_url}
      />
    ));
};

const Event = ({ title, subtitle, image_url }) => {
  return (
    <div className="event-container">
      <div className="event-image">
        <img src={image_url} />
      </div>
      <div className="event-title">{title}</div>
      <div className="event-subtitle">{subtitle}</div>
    </div>
  );
};
