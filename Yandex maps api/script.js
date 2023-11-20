// 04201af2-49c1-4248-8aee-4d6b9b0d6231
let center = [48.8866527839977, 2.34310679732974];

function init() {
  let map = new ymaps.Map('map-test', {
    center: center,
    zoom: 17,
  });

  let placemark = new ymaps.Placemark(center, {}, {});

  map.geoObject.add(placemark);
}

ymaps.ready(init);
