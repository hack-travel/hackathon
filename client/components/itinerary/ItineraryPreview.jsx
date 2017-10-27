import React from 'react';

const ItineraryPreview = function render(props) {
  const { itinerary } = props;
  const { name, dateStart, dateEnd, pictureUrl } = itinerary;
  console.log('pictureUrl', pictureUrl)
  const alt = `${name} trip location`
  return (
    <div className="itinerary-preview">
      <div> name: {name} </div>
      <div> start date: {dateStart} </div>
      <div> end date: {dateEnd} </div>
      <img src={pictureUrl} alt={alt} />
    </div>
  );
};

export default ItineraryPreview;
