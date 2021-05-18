import "./App.css";
import CustomInput from "./components/CustomInput";
import switchImg from "./assets/switch.png";
import CustomSelect from "./components/CustomSelect";
import CustomButton from "./components/CustomButton";
import { useRef, useState } from "react";
import { dummyData } from "./dummyData";

function App() {
  const [value, setValue] = useState("");
  const [firstOption, setFirstOption] = useState(null);
  const [secondOption, setSecondOption] = useState(null);

  const labelRef = useRef();

  const calculateRate = () => {
    let amount;
    if (value) {
      amount = value;
    } else {
      alert("please fill input value.");
    }
    if (firstOption != null) {
      if (firstOption === secondOption) {
      } else {
        const selectedValue = dummyData.filter(
          (item) => item.code === firstOption
        )[0].value;
        console.log(selectedValue);
        amount = value * parseFloat(selectedValue);

        labelRef.current.value = Number.isInteger(amount)
          ? amount
          : amount.toFixed(2);
      }
    } else {
      alert("Please choose currencies");
    }
  };

  return (
    <div className="container">
      <div className="converter-body">
        <span className="from-text">From</span>
        <div className="input-centent">
          <CustomInput value={value} setvalue={setValue} />
          <CustomSelect dummyData={dummyData} setOption={setFirstOption} />
        </div>
        <img src={switchImg} className="switch-img" alt="" />
        <span className="to-text">To</span>
        <div className="input-centent">
          <CustomInput disabled={true} labelRef={labelRef} />
          <CustomSelect
            dummyData={dummyData}
            setOption={setSecondOption}
            disabled={true}
          />
        </div>
        <CustomButton click={calculateRate} />
      </div>
    </div>
  );
}

export default App;
