"use client";

import { TimeField } from "../core/time-field/time-field";

export const TimeFieldExample = () => (
  <div className="space-y-6">
    <TimeField label="Meeting time" />
    
    <TimeField 
      label="Appointment time" 
    />
    
    <TimeField 
      label="Reminder time"
      description="Set a time for your daily reminder"
    />
  </div>
); 