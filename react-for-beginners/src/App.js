import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [inputValue, setInputValue] = useState(0);
  const onChange = (event) => {
    if (!isNaN(event.target.value)) {
      setInputValue(event.target.value);
    } else {
      return;
    }
  };

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const onSelect = (e) => {
    if (e.target.value === "none") {
      return;
    }
    var coinPrice = e.target.value.split("|")[0];
    var coinName = e.target.value.split("|")[1];
    setSelectedValue(coinPrice);
    setSelectedName(coinName);
    setIsSelected(true);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <div className={loading ? styles.hidden : styles.show}>
        <h2>Write USD</h2>
        <input
          value={inputValue === 0 ? "" : inputValue}
          onChange={onChange}
          type="text"
        />
        <select onChange={onSelect}>
          <option value={"none"}></option>
          {coins.map((coin) => (
            <option
              value={coin.quotes.USD.price + "|" + coin.symbol}
              key={coin.id}
            >
              {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
        <h2>{isSelected ? "" : "골라"}</h2>
        <h2>{isSelected ? "USD ➡ " + selectedName : ""}</h2>
        <h2>
          {isSelected
            ? inputValue +
              "(USD) = " +
              inputValue / selectedValue +
              "(" +
              selectedName +
              ")"
            : ""}
        </h2>
      </div>
    </div>
  );
}

export default App;
