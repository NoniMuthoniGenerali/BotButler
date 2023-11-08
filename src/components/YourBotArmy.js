import React from "react";

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
 

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
      
          <h1>Your Bot Army.</h1>
          {army.map((bot) => (
            <div key={bot.id}>
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <button onClick={() => removeFromArmy(bot)}>Release</button>
              <button onClick={() => dischargeBot(bot.id)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;