import TabView from "~/components/TabView/TabView";
import { useMediaQuery } from "~/hooks";
import CollectionPage from "./CollectionPage";

export default function TabbedCollections() {
  /* Todo: Move media queries to the TabView components so that all parameters
  can be specified for different breakpoints */
  const isLg = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex gap-8 lg:gap-20">
      <TabView
        width="100%"
        height="fit-content"
        tabButtonPosition={isLg ? "left" : "top"}
        tabGap="16px"
        gap={isLg ? "5rem" : "2rem"}
        tabs={[
          { title: "Bibendum tellus", icon: "/icons/search.svg" },
          { title: "Cras eget", icon: "/icons/shield-check.svg" },
          { title: "Dolor pharetra", icon: "/icons/rocket.svg" },
          { title: "Amet, fringilla", icon: "/icons/podcast.svg" },
          { title: "Amet nibh", icon: "/icons/screen.svg" },
          { title: "Sed velit", icon: "/icons/settings-alt.svg" },
        ]}>
        <CollectionPage
          images={[
            "/images/video-banner.jpg",
            "/images/card-2.jpg",
            "/images/shoe-3.jpg",
          ]}
        />

        <CollectionPage
          images={[
            "/images/video-banner.jpg",
            "/images/card-1.jpg",
            "/images/card-2.jpg",
          ]}
        />

        <CollectionPage
          images={[
            "/images/video-banner.jpg",
            "/images/card-1.jpg",
            "/images/card-2.jpg",
          ]}
        />

        <CollectionPage
          images={[
            "/images/video-banner.jpg",
            "/images/card-1.jpg",
            "/images/card-2.jpg",
          ]}
        />

        <CollectionPage
          images={[
            "/images/video-banner.jpg",
            "/images/card-1.jpg",
            "/images/card-2.jpg",
          ]}
        />

        <CollectionPage
          images={[
            "/images/video-banner.jpg",
            "/images/card-1.jpg",
            "/images/card-2.jpg",
          ]}
        />
      </TabView>
    </div>
  );
}
