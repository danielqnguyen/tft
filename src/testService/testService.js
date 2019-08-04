import axios from "axios";

class testApi {
  static testOne(user) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=`
      )
      .then(resp => testApi.testTwo(resp.data.id));
  }

  static testTwo(id) {
    axios
      .get(
        `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=`
      )
      .then(resp => console.log(resp));
  }
}

export default testApi;
