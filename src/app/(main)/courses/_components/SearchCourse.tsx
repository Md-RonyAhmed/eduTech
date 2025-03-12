"use client"
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchCourse = () => {
  return (
    <div className="flex relative justify-between items-center h-10 max-lg:w-full">
          <Search className="text-gray-500 z-10 h-4 w-4 absolute left-3" />
          <Input
            type="text"
            placeholder="Search courses..."
            className="pl-8 pr-3 py-2 text-sm" // Add additional styling as needed
          />
        </div>
  )
}

export default SearchCourse