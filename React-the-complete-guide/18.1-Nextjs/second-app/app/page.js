import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D1%81%D0%B2%D0%B5%D1%82_%D0%BF%D1%80%D0%B8_-29_%D0%B3%D1%80%D0%B0%D0%B4%D1%83%D1%81%D0%B0%D1%85.jpg/1280px-%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D1%81%D0%B2%D0%B5%D1%82_%D0%BF%D1%80%D0%B8_-29_%D0%B3%D1%80%D0%B0%D0%B4%D1%83%D1%81%D0%B0%D1%85.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Western_Military_District_buildings_Saint_Petersburg_arch.jpg/1280px-Western_Military_District_buildings_Saint_Petersburg_arch.jpg",
    address: "Some address 15, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
