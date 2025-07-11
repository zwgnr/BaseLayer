import { Calendar, MapPin, MessageCircle, Settings, Star, User } from "lucide-react";

import { Button } from "../core/button/button";
import { Popover, PopoverTrigger } from "../core/popover/popover";

export const PopoverExample = () => (
  <PopoverTrigger>
    <Button className="flex items-center gap-4">
      <User className="size-4" />
      <span className="font-medium text-sm">Alex Morgan</span>
    </Button>
    <Popover>
      <div className="w-80 p-4">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Alex Morgan</h3>
            <p className="text-fg-muted text-sm">Senior Product Designer</p>
            <div className="mt-1 flex items-center gap-1 text-fg-muted text-xs">
              <MapPin className="size-3" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-4 rounded-lg bg-surface-2 p-3">
          <div className="text-center">
            <div className="font-semibold text-lg">127</div>
            <div className="text-fg-muted text-xs">Projects</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg">4.9</div>
            <div className="flex items-center justify-center gap-1 text-fg-muted text-xs">
              <Star className="size-3 fill-current text-yellow-500" />
              Rating
            </div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg">2.1k</div>
            <div className="text-fg-muted text-xs">Followers</div>
          </div>
        </div>
      
        <p className="mb-4 text-fg-muted text-sm">
          Passionate about creating intuitive user experiences and building design systems that scale.
        </p>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1 gap-2">
            <MessageCircle className="size-4" />
            Message
          </Button>
          <Button variant="secondary" size="sm" className="flex-1 gap-2">
            <Calendar className="size-4" />
            Schedule
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="size-4" />
          </Button>
        </div>
      </div>
    </Popover>
  </PopoverTrigger>
); 