import React from "react";

const SpecialHours = () => {
  const specialHours = {
    mondayToThursday: { open: "8:00am", close: "7:45pm" },
    friday: { open: "9:00am", close: "7:45pm" },
    saturday: { open: "9:00am", close: "5:45pm" },
    sunday: { open: "9:00am", close: "5:45pm" },
  };

  return (
    <div className="flex justify-center">
      <div className="special-hours p-4 bg-[#fde5e5] rounded-md shadow-md w-full max-w-md">
        <h2 className="flex text-lg font-bold mb-1 text-red-600 justify-center">
          Special Hours
        </h2>
        <p className="text-center text-sm text-gray-700 mb-3">
          8:00am - 8:00pm
        </p>
        <ul className="space-y-4">
          <li className="text-center text-gray-700">
            <h3 className="font-medium text-lg">Monday - Thursday</h3>
            <p className="text-sm">
              {specialHours.mondayToThursday.open} -{" "}
              {specialHours.mondayToThursday.close}
            </p>
          </li>
          <li className="text-center text-gray-700">
            <h3 className="font-medium text-lg">Friday</h3>
            <p className="text-sm">
              {specialHours.friday.open} - {specialHours.friday.close}
            </p>
          </li>
          <li className="text-center text-gray-700">
            <h3 className="font-medium text-lg">Saturday</h3>
            <p className="text-sm">
              {specialHours.saturday.open} - {specialHours.saturday.close}
            </p>
          </li>
          <li className="text-center text-gray-700">
            <h3 className="font-medium text-lg">Sunday</h3>
            <p className="text-sm">
              {specialHours.sunday.open} - {specialHours.sunday.close}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialHours;
