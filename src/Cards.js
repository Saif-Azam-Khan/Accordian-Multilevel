import { useState } from "react";

function Cards() {
  const [showThree, setShowThree] = useState(false);

  return (
    <div>
      {/* Parent card container */}
      <div className="card">
        {/* Header of this card, when clicked toggle showThree state */}
        <h1 onClick={() => setShowThree(!showThree)}>two</h1>

        {/* If showThree is true then render child card */}
        {showThree && (
          <div className="card">
            <h1>three</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;