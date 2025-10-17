// components/ui/navigation-menu.tsx
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Your utility for merging classNames
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu-components"; // Adjust import paths

// Base trigger style using CVA
export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        default: "text-yellow-400 hover:text-green-500 hover:bg-transparent",
        contact: "text-yellow-400 hover:text-green-500 hover:bg-transparent",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface NavigationMenuTriggerProps extends React.ComponentProps<typeof NavigationMenuTrigger> {
  intent?: "default" | "contact";
}

export const NavigationMenuTriggerButton = React.forwardRef<
  HTMLButtonElement,
  NavigationMenuTriggerProps
>(({ className, intent, ...props }, ref) => (
  <NavigationMenuTrigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle({ intent }), className)}
    {...props}
  />
));
NavigationMenuTriggerButton.displayName = "NavigationMenuTriggerButton";

// Example menu structure
export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTriggerButton>Home</NavigationMenuTriggerButton>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTriggerButton>Features</NavigationMenuTriggerButton>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTriggerButton intent="contact">Contact</NavigationMenuTriggerButton>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* Add dropdown contents if needed */}
      <NavigationMenuContent>
        <NavigationMenuLink href="/contact">Get in touch</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenu>
  );
}
