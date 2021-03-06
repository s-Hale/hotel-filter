
import React from 'react';

const Stars = (props) => {
    const { number } = props;
    const starUrl = 'https://www.dropbox.com/s/e0qr5yh2n8g08xp/star.png?raw=1';
    return (
      <div className="star-wrapper">{Array.from({ length: number }, ((val, i) => <img alt="star" className="star" key={i} src={starUrl} />))}</div>
    )
 }


export default Stars;