import AppWindow from "~/components/AppWindow";

interface CollectionPageProps {
  images: [string, string, string];
}

export default function CollectionPage({ images }: CollectionPageProps) {
  return (
    <div className="relative pb-[20%]">
      <AppWindow className="h-[80%] w-[80%] overflow-hidden">
        <img className="h-full w-full" src={images[0]} />
      </AppWindow>

      <AppWindow className="absolute left-[10%] top-[20%] h-[80%] w-[80%] overflow-hidden">
        <img className="h-full w-full" src={images[1]} />
      </AppWindow>

      <img
        className="absolute bottom-[7%] right-0 z-10 h-[55%] w-[27%] rounded-[10px]
        border-[5px] border-white object-cover shadow-app-window"
        src={images[2]}
      />
    </div>
  );
}
