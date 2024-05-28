'use client'
import React, { useEffect, useState } from 'react';

function MapComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <div style={{ width: '100%' }}>
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Nepal%20Kathmandu+(My%20Business%20Name)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  ) : null;
}

export default MapComponent;
