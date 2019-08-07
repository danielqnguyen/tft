import axios from "axios";

class testApi {
  //will eventually add in other regions just doing na currently for simplicity reason
  static testOne(user, onSuccess, onError) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=`
      )
      .then(onSuccess)
      .catch(onError);
  }

  static testTwo(id, onSuccess, onError) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=`
      )
      .then(onSuccess)
      .catch(onError);
  }
}

export default testApi;
