import Campagin from "./Campagin";
import Features from "./Features";

export default function Banner() {
  return (
    <section
      className="lg:bg-banner bg-none bg-contain bg-no-repeat"
      style={{
        backgroundPosition: "left 0 bottom 0",
        backgroundSize: "100% 80%",
      }}>
      <Campagin />

      <Features
        features={[
          {
            icon: "/icons/trophy.svg",
            title: "Nibh viverra",
            text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
          },
          {
            icon: "/icons/tunnel.svg",
            title: "Cursus amet",
            text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
          },
          {
            icon: "/icons/tv.svg",
            title: "Ipsum fermentum",
            text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
          },
        ]}
      />
    </section>
  );
}
