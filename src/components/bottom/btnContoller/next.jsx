import { BsFillSkipEndFill } from "react-icons/bs";
import { DataProvider, useDataContext } from "../../dataProvider/context";
import React, { useState, useEffect } from "react";
import { useDataContextSong } from "../../dataProvider/getSong";
export default function Next_btn() {
  const { data, index, setIndex, getSongData, onplay, isLike } =
    useDataContext();
  const { getNewAdd } = useDataContextSong();
  const Next = () => {
    setIndex(index + 1);
    onplay();
  };
  return (
    <>
      <BsFillSkipEndFill
        className="icons"
        onClick={() => {
          getNewAdd()
          if (index == data.length - 1) {
            setIndex(0);
            Next(), getSongData(data, 0);
          } else {
            Next(), getSongData(data, index + 1);
          }
        }}
      />
    </>
  );
}
