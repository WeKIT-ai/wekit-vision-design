
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const InvestorsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-sm font-medium text-gray-500 hover:text-gray-600 p-0 h-auto bg-transparent hover:bg-transparent flex items-center gap-1"
        >
          Investors
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
        <DropdownMenuItem asChild>
          <Link to="/investors" className="w-full cursor-pointer">
            Investment Overview
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a 
            href="https://calendly.com/yvonne-roberts/wekit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full cursor-pointer"
          >
            Schedule a Call
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InvestorsDropdown;
