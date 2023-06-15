import BoulderConstructor from "./BoulderConstructor"
import LeadConstructor from "./LeadConstructor"

/** Constructor for bouldering to create an array of objects with the data from the API */

export default function ScoreBoardConstructor({ ...props }) {
  if (props.dataFromApi.typeOfClimb === "bouldering") {
    let boulderConstructor = BoulderConstructor(props)
    return boulderConstructor;
  }
  if (props.dataFromApi.typeOfClimb === "lead") {
    /** create lead event **/
    let leadConstructor = LeadConstructor(props);
    return leadConstructor
  }
}
