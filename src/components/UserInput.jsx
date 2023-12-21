export default function UserInput({ onInput, userInputObject }) {
  const restrictAlphabets = (event) => {
    event.target.value = event.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="text"
            required
            value={userInputObject.initialInvestment}
            onInput={restrictAlphabets}
            onChange={(event) =>
              onInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="text"
            required
            value={userInputObject.annualInvestment}
            onInput={restrictAlphabets}
            onChange={(event) =>
              onInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="text"
            required
            value={userInputObject.expectedReturn}
            onInput={restrictAlphabets}
            onChange={(event) => onInput("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="text"
            required
            value={userInputObject.duration}
            onInput={restrictAlphabets}
            onChange={(event) => onInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
