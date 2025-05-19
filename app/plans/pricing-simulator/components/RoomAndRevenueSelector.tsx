import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parseNumericInput } from "../utils";

interface RoomAndRevenueSelectorProps {
  roomCount: number;
  setRoomCount: (value: number) => void;
  formattedExpectedSales: string;
  onExpectedSalesChange: (value: string) => void;
}

export function RoomAndRevenueSelector({ 
  roomCount, 
  setRoomCount, 
  formattedExpectedSales, 
  onExpectedSalesChange 
}: RoomAndRevenueSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="roomCount" className="mb-2 block">部屋数</Label>
        <Input
          id="roomCount"
          type="number"
          min={1}
          step={1}
          value={roomCount}
          onChange={(e) => {
            const value = Math.max(1, parseInt(e.target.value) || 1);
            setRoomCount(value);
          }}
          onBlur={(e) => {
            const value = parseInt(e.target.value);
            if (isNaN(value) || value < 1) {
              setRoomCount(1);
            }
          }}
          className="w-full"
        />
      </div>
      <div>
        <Label htmlFor="expectedSales" className="mb-2 block">月間想定売上（円）</Label>
        <Input
          id="expectedSales"
          type="text"
          value={formattedExpectedSales}
          onChange={(e) => onExpectedSalesChange(e.target.value)}
          className="w-full"
          placeholder="例: 300,000"
        />
      </div>
    </div>
  );
}

export default RoomAndRevenueSelector;