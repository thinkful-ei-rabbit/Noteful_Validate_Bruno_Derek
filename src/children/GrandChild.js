import React from 'react'
import GreatGrandChild from './GreatGrandChild';

const GrandChild = () => {
  return (
    <div className='GrandChild'>
      <GreatGrandChild />
    </div>
  );
}

export default GrandChild
