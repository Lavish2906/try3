import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, } from "@/Components/ui/command"

function SearchBoxDropDown({ isSearchOpen , handleSearchOpen}) {
    return (
        <Command open={isSearchOpen}>
            <CommandInput onSearchClick={handleSearchOpen} placeholder="Search cars by name..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {/* <CommandGroup heading="Suggestions"> */}
                <CommandGroup>
                    <CommandItem className="text-white">All Popular cars</CommandItem>
                    <CommandItem className="text-white">Rolls-Royce Cullinan</CommandItem>
                    <CommandItem className="text-white">Bentley Continental GT</CommandItem>
                    <CommandItem className="text-white">Mercedes-Benz Maybach S-Class</CommandItem>
                    <CommandItem className="text-white">Lamborghini Aventador</CommandItem>
                    <CommandItem className="text-white">Aston Martin DB11</CommandItem>
                    <CommandItem className="text-white">Ferrari LaFerrari</CommandItem>
                    <CommandItem className="text-white">Porsche 911 Turbo S</CommandItem>
                </CommandGroup>
                {/* <CommandSeparator /> */}
                {/* <CommandGroup heading="Settings"> */}
                {/* <CommandGroup>
                    
                </CommandGroup> */}
            </CommandList>
        </Command>
    )
}
export default SearchBoxDropDown