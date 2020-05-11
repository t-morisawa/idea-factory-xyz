import React from 'react'

const Explanation = ({ description }) => {
  return (
      <div>
        {description.split("\n").map((m, index) => {
          return (
            <span key={index}>
              {m}
              <br />
            </span>
          )
        })}
      </div>
  );
}

export default Explanation
