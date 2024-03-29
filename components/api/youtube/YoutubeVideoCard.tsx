import { Card } from "@/components/ui/card";
import { YoutubeSearchResultData } from "@/types/youtube";
import Image from "next/image";
import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import VideoPlayer from "./VideoPlayer";

function YoutubeVideoCard(props: YoutubeSearchResultData) {
  const { snippet, id } = props;

  return (
    <Card className="w-full h-full sm flex p-2 gap-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white dark:bg-slate-800">
      <Dialog>
        <div className="w-[50%] sm:w-[30%] flex items-center">
          <DialogTrigger asChild>
            <Image
              className="w-full aspect-video hover:cursor-pointer object-cover"
              src={snippet?.thumbnails?.high?.url}
              width={200}
              height={200}
              alt="thumbnail"
            />
          </DialogTrigger>
        </div>
        <div className="w-[50%] sm:w-[70%] flex flex-col justify-center mx-2">
          <DialogTrigger asChild>
            <h1 className="font-extrabold font-JEJUGothic text-gray-700 dark:text-gray-300 hover:underline cursor-pointer whitespace-nowrap pr-2 text-ellipsis overflow-hidden ...">
              {snippet?.title}
            </h1>
          </DialogTrigger>
          <div className="w-full flex justify-between">
            <a
              href={`https://www.youtube.com/channel/${snippet.channelId}`}
              target="_blank"
              className="text-gray-500 font-black text-sm mt-1 hover:cursor-pointer">
              {snippet?.channelTitle}
            </a>
            <p className="text-gray-400 text-sm font-normal mt-1">
              {snippet?.publishTime.split("T")[0]}
            </p>
          </div>
          <div className="flex justify-between">
            <DialogTrigger asChild>
              <p className="text-gray-500 text-sm mt-2 pb-1 line-clamp-2 pr-2 hover:cursor-pointer hover:underline">
                {snippet?.description}
              </p>
            </DialogTrigger>
          </div>
        </div>
        <VideoPlayer vid={id?.videoId} />
      </Dialog>
    </Card>
  );
}

export default YoutubeVideoCard;
