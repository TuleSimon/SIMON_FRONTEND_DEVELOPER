import axios from "axios";

export function fetchCapsules(sort="capsule_serial",order="desc",filter,filterValue) {
  return new Promise((resolve) => {
    let url 
    if(filter!==undefined && filterValue!==undefined){
      url = `https://api.spacexdata.com/v3/capsules?order=${order}&sort=${sort}&${filter}=${filterValue}`
    }
    else{
        url = `https://api.spacexdata.com/v3/capsules?order=${order}&sort=${sort}`
    }
    axios.get(url).then((res) => {
      resolve(res.data);
    });
  });
}
