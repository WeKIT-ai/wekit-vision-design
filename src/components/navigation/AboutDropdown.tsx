
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AboutDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-sm font-medium text-gray-500 hover:text-gray-600 p-0 h-auto bg-transparent hover:bg-transparent flex items-center gap-1"
        >
          About Us
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
        <DropdownMenuItem asChild>
          <Link to="/about" className="w-full cursor-pointer">
            Our Story
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/about#team" className="w-full cursor-pointer">
            Our Team
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/about#mission" className="w-full cursor-pointer">
            Mission & Vision
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AboutDropdown;
