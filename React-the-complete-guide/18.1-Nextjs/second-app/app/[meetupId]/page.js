import { Fragment } from "react";

function MeetupDetails() {
  return (
    <Fragment>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D1%81%D0%B2%D0%B5%D1%82_%D0%BF%D1%80%D0%B8_-29_%D0%B3%D1%80%D0%B0%D0%B4%D1%83%D1%81%D0%B0%D1%85.jpg/1280px-%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D1%81%D0%B2%D0%B5%D1%82_%D0%BF%D1%80%D0%B8_-29_%D0%B3%D1%80%D0%B0%D0%B4%D1%83%D1%81%D0%B0%D1%85.jpg"
        alt="A First Meetup"
      />
      <h1>A First Meetup</h1>
      <address>Some Street 5, 12345 Some City</address>
      <p>The meetup description</p>
    </Fragment>
  );
}

export default MeetupDetails;
