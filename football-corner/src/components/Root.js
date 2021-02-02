import React, { useEffect, useState } from "react";
import Axios from "axios";

//importing components
import Teams from './Teams'

function Root() {
  useEffect(() => {
    console.log('use effect triggered')
    getInfo()
  },[])

  const [teams, setTeams] = useState([])
  const getInfo = async ()=>{
    const response = await Axios.get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`);
    await console.log(response)
    setTeams(response.data.teams)
  }

  return (
    <div>
      {teams.map(team =>(
      <Teams
        name={team.strTeam}
        description={team.strDescriptionEN}
      />
      ))}
    </div>
  );
}

export default Root;
