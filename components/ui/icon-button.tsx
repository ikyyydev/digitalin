import { MouseEventHandler } from "react";
import { cn } from "@/common/lib/utils";

import Button from "@/components/ui/button";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
