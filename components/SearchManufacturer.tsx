"use client";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import Image from 'next/image';
import { useState } from 'react';

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers = 
  query === ""
  ? manufacturers
  : manufacturers.filter((item) =>
    item
    .toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g,""))
    );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
            src="/car-logo.svg" 
            width={20}
            height={20}
            className="ml-4"
            alt="Car Logo"
            />
          </Combobox.Button>

          <Combobox.Input className="search-manufacturer__input"
           placeholder="Volkswagen"
           displayValue={(manufacturer: string) => manufacturer}
           onChange={(e)  => setQuery(e.target.value)}
           />
           ,<Transition>
            
           </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
