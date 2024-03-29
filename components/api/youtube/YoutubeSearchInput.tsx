"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { YoutubeContext } from "@/context/youtube";
import React, { useContext, useState } from "react";

function YoutubeSearchInput() {
  const { setInput } = useContext(YoutubeContext);
  const [searched, setSearched] = useState<boolean>(false);
  const [query_string, set_query_string] = useState<string>("");

  const handleSubmit = () => {
    setInput(query_string);
    setSearched(true);
  };
  return (
    <div className="flex flex-col items-center">
      {!searched && (
        <h1 className="font-semibold text-black dark:text-white text-6xl mb-16 text-center">
          Youtube API Test Playground
        </h1>
      )}
      <Card className="w-[80vw] sm:w-[40vw]">
        <div className="flex w-full space-x-2 p-2 md:w-full bg-slate-950 dark:bg-white rounded-sm">
          <Input
            className="bg-white dark:bg-slate-900"
            type="text"
            placeholder="Youtube 검색어 입력..."
            onChange={(e) => set_query_string(e.target.value)}
          />
          <Button type="submit" onClick={handleSubmit}>
            검색
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default YoutubeSearchInput;
