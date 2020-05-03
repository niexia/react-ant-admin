import React from 'react';
import url500 from '@/assets/images/error-500.jpg'

const Page500 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <img src={url500} alt="server error" />
    </div>
  )
}

export default Page500;