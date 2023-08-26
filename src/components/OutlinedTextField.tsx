import React from "react";

function OutlinedTextField({
  placeholder,
  value,
  onChange,
  className,
  type,
  allowNewLine,
}: {
  placeholder: String;
  value: String;
  onChange: (input: String) => void;
  type?: String;
  className?: String;
  allowNewLine?: boolean;
}) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    // Prevent line breaks in the input value
    let cleanedValue;
    if (type === "text") {
      if (allowNewLine === null || allowNewLine === false) {
        cleanedValue = event.target.value.replace(/\r?\n/g, "");
      } else {
        cleanedValue = event.target.value;
      }
    } else if (type === "date"|| type === "datetime-local") {
      console.log(event.target.value)
      // Convert the input date to UTC format
      // const dateObject = new Date(event.target.value);
      // const formattedDateString = dateObject.toISOString();
      // cleanedValue = formattedDateString;
      cleanedValue = event.target.value;
    } else {
      cleanedValue = event.target.value;
    }
    onChange(cleanedValue);
  };

  return (
    <input
      value={value.toString()}
      onChange={(e) => handleInputChange(e)}
      placeholder={placeholder.toString()}
      type={type ? type.toString() : "text"}
      className={`font-manRope outline-none border text-grey-200 border-grey-400 bg-grey-800 px-[10px] py-[6px] md:px-[20px] md:py-[13px] rounded-md md:rounded-lg ${className}`}
    />
  );
}

export default OutlinedTextField;

export function OutlinedTextField2() {
  return (
    <input
      placeholder="enter phone number"
      className={` ml-2 outline-none border-0 w-full text-grey-200  bg-grey-800 rounded-lg }`}
    />
  );
}
