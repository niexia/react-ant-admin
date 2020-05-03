import React from 'react';
import url404 from '@/assets/images/error-404.jpg'

const Page404 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px'}}>
      <img src={url404} alt="not found"/>
    </div>
  )
}

export default Page404;