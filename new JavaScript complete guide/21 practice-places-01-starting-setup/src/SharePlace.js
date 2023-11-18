import { Modal } from './UI/Modal';

// mane class
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('submit', this.findAddressHandler);
  }

  // taking geolocation from user browser
  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('Location feature is not available in your browser');
      return;
    }

    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait!'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        console.log(coordinates);
      },
      (error) => {
        modal.hide();
        alert(
          'Could not locate you unfortunately. Please enter an address manually!'
        );
      }
    );
  }

  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
