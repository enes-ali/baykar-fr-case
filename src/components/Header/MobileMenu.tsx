import { useState } from "react";
import { MenuScale } from "iconoir-react";

import { Button } from "../Button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        unstyled
        appearance={null}
        size={null}
        className="h-6 w-6 p-0 lg:hidden"
        leftIcon={
          <MenuScale className="h-6 w-6 scale-x-[-1] text-primary" />
        }
      />
    </>
  );
}
