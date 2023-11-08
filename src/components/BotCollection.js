function BotCollection({ bots, addToArmy }) {

  
  return (
    <div className="ui four column grid">
      <h1>Bot Collection</h1>
      <div className="row">
      </div>
      {bots.map((bot) => (
        <div className="contents" key={bot.id}>
          <h2>{bot.name}</h2>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Bot Class: {bot.bot_class}</p>
          <p>Catch Phrase: {bot.catchphrase}</p>
          <p>Created At: {bot.created_at}</p>
          <p>Updated At: {bot.updated_at}</p>

          <button onClick={() => addToArmy(bot)}>Add to Army</button>
        </div>
      ))}


    </div>
  );
}

export default BotCollection;