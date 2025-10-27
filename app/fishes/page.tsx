'use client';

import { fishData } from "@/constants/fishData";
import { FishDataType } from "@/constants/types";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";

const wikiUrl = 'https://echoesoftheplumgrove.wiki.gg';

function FishCards() {
  const [userFishes, setUserFishes] = useState<string[]>([]);

  useEffect(() => {
    const fishes = JSON.parse(localStorage.getItem('fishes') as string);

    if (fishes) {
      setUserFishes(fishes);
    }
  }, [setUserFishes]);

  const handleSetUserFishes = useCallback((fishName: string, target: HTMLElement) => {
    if (target.tagName === 'A') {
      // user has clicked the "More info" link
      return;
    }

    let indexOfFish = userFishes.indexOf(fishName) ;

    if (indexOfFish === -1) {
      userFishes.push(fishName);
    } else {
      userFishes.splice(indexOfFish, 1);
    }

    localStorage.setItem('fishes', JSON.stringify(userFishes));

    setUserFishes([...userFishes]);
  }, [userFishes, setUserFishes]);

  return fishData.map((fish: FishDataType) => {
    const hasFish = useMemo(() => userFishes.indexOf(fish.name) !== -1, [userFishes]);

    return (
      <div className={clsx('card', 'pt-2', 'cursor-pointer', hasFish && 'selected')} key={fish.link} role="button" onClick={(evt) => handleSetUserFishes(fish.name, evt.target as HTMLElement)}>
        <img src={`${wikiUrl}${fish.imgLink}`} alt={`${fish.name} thumbnail`} />

        <div className="card-content text-center">
          <h2>{fish.name}</h2>
          <a href={`${wikiUrl}${fish.link}`} target="_blank" rel="noopener noreferrer">More Info</a>
        </div>
      </div>
    );
  })
}

export default function Page() {
  return (
    <>
      <h1>Fishes</h1>
      <p className="mb-2">Click to add or remove a fish</p>

      <div className="grid grid-cols-5 gap-2">
        <FishCards />
      </div>
    </>
  );
}
