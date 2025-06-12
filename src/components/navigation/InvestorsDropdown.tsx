
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
          size="sm"
          className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-1"
        >
          Investors
          <ChevronDown size={14} className="opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 bg-background border border-border shadow-lg rounded-lg p-1" align="start">
        <DropdownMenuItem asChild>
          <Link 
            to="/investors" 
            className="w-full cursor-pointer flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200"
          >
            Investment Overview
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a 
            href="https://calendly.com/yvonne-roberts/wekit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full cursor-pointer flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200"
          >
            Schedule a Call
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InvestorsDropdown;
