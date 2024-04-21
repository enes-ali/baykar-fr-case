import Link from "next/link";

import { Button } from "../Button";

export default function Legal() {
  return (
    <div
      className="flex flex-col items-center gap-6 py-12 
      lg:flex-row lg:justify-between lg:py-6">
      <p className="p-md text-[#E2E8F0]">
        Collers @ 2023. All rights reserved.
      </p>

      <ul className="p-md flex w-fit gap-8 py-3 text-[#E2E8F0]">
        <li>
          <Link href="#">Terms</Link>
        </li>

        <li>
          <Link href="#">Privacy</Link>
        </li>

        <li>
          <Link href="#">Contact</Link>
        </li>

        <li className="flex">
          <Button
            appearance="link"
            className="h-fit w-fit p-0 text-white font-normal"
            textContainerClassName="px-2 "
            leftIcon={<img src="/icons/world.svg" />}>
            EN
          </Button>
        </li>
      </ul>
    </div>
  );
}
