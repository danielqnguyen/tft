import axios from "axios";

class testApi {
  static testOne(user, onSuccess, onError) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?`
      )
      .then(onSuccess)
      .catch(onError);
  }

  static testTwo(id, onSuccess, onError) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?`
      )
      .then(onSuccess)
      .catch(onError);
  }
}

export default testApi;
