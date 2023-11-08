import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useState, useEffect } from "react";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((selectedBot) => selectedBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((selectedBot) => selectedBot.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    fetch(` http://localhost:8002/bots/${botId}`, {
      method: "DELETE",
    })
      .then(() => {
        removeFromArmy(army.find((bot) => botId === botId));
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  return (
    <div className="army">

      <YourBotArmy
        army={army}
        removeFromArmy={removeFromArmy}
        dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
}


export default BotsPage;