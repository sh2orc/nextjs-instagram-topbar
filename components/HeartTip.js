import { UserIcon } from '@heroicons/react/solid';
import React from 'react';

function HeartTip() {
  return <div className="heart-tip animate-fade opacity-0 origin-top absolute top-[50px] bg-red-500 left-1/2 -translate-x-1/2 p-3 rounded-lg">
      <div className="flex space-x-1">
        <UserIcon className="h-6 w-6 text-white"/>
        <div className="text-white font-semibold">1</div>
      </div>
  </div>;
}

export default HeartTip;