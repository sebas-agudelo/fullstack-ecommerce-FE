import { PulseLoader } from 'react-spinners';


export default function ContentSpinner() {
  return (
  <div className="loading-spinner text-center flex justify-center" style={{ width: "100%", display: "flex", alignItems: "start"}}><PulseLoader
  color="#3b0764"
  margin={0}
  size={26}
/></div>
  );
}
