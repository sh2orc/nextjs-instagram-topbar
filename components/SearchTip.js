import { PlusIcon } from '@heroicons/react/outline';
import React from 'react';

function SearchTip() {
  return (
  <div className="search-tip animate-fade opacity-0 origin-top absolute top-10 bg-white w-96 left-1/2 -translate-x-1/2 shadow-xl p-5 rounded-md">

    <div className="flex justify-between mb-5">
        <h3 className="font-bold">Recent</h3>
        <button className="text-blue-400 text-xs font-bold">Clear All</button>
    </div>

    <div className="flex item-center justify-between">
        <div className="flex items-center">
            <div className="avatar">
                <div className="rounded-full w-14 h-14">
                    <img src="http://daisyui.com/tailwind-css-component-profile-5@56w.png" />
                </div>
            </div>
            <div className="pl-4">
                <div className="text-md font-semibold">Metaverse</div>
                <div className="text-gray-500">the metaverse is sooner than you think</div>
            </div>
        </div>
        <PlusIcon className="rotate-45 h-5 w-5 text-gray-400"/>
    </div>
  </div>
  );
}

export default SearchTip;
