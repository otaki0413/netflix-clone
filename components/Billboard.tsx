import useBillBoard from "@/hooks/useBillboard";
import { FC } from "react";

export const Billboard: FC = () => {
  const { data } = useBillBoard();
  console.log(data?.videoUrl);
  console.log(data);

  return (
    <div className="relative h-56 w-56">
      <p>{data?.title}</p>
      <video
        autoPlay
        muted
        loop
        poster="http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
        controls
      ></video>
    </div>
  );
};
