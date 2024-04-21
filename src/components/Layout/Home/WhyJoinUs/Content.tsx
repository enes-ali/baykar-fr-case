import { Button } from "~/components/Button";

const CheckItem = ({ text }: { text: string }) => (
  <p className="p-md lg:p-xl flex gap-2">
    <img src="/icons/check.svg" className="h-6 w-6" /> <span>{text}</span>
  </p>
);

export function WhyJoinUsContent() {
  return (
    <div className="z-40 flex w-full flex-col items-center gap-6 lg:items-start ">
      <h5 className="h5 lg:h2 w-fit text-center lg:text-[3.5rem]">
        Why join us
      </h5>

      <div className="flex flex-col gap-2 lg:gap-0">
        <CheckItem text="Est et in pharetra magna adipiscing ornare aliquam." />
        <CheckItem text="Tellus arcu sed consequat ac velit ut eu blandit." />
        <CheckItem text="Ullamcorper ornare in et egestas dolor orci." />
      </div>

      <Button size="lg">Sign up now</Button>
    </div>
  );
}
