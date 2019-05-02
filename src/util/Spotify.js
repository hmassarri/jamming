let userToken;

const Spotify = {

  getAccessToken() {
      if(userToken) {
        return userToken;
      }
  }

}

export default Spotify;
