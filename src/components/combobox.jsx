"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Health } from "./healthcare"; // Ensure Health is an array
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ComboboxDemo({ onSelectHealth }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
  
    const handleSelect = (currentValue) => {
      setValue(currentValue === value ? "" : currentValue);
      setOpen(false);
      if (onSelectHealth) {
        onSelectHealth(currentValue); // Call the parent callback
      }
      console.log("Selected value:", currentValue);
    };
  
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between text-white bg-black"
          >
            {value
              ? Health.find((health) => health.value === value)?.label
              : "Select health..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search health..." />
            <CommandList>
              <CommandEmpty>No health found.</CommandEmpty>
              <CommandGroup>
                {Health.map((health) => (
                  <CommandItem
                    key={health.value}
                    value={health.value}
                    onSelect={handleSelect}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === health.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {health.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
  