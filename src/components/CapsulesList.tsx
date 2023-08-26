import React from "react";
import OutlinedButton from "./buttons/OutlinedButton";

interface Capsule {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: string;
    original_launch_unix: number;
    missions: {
      name: string;
      flight: number;
    }[];
    landings: number;
    type: string;
    details: string;
    reuse_count: number;
  }

function CapsulesList({
  capsules,
  onCapsuleClicked
}: {
  capsules: Capsule[];
  onCapsuleClicked:( capsule:Capsule)=>void
}) {
  console.log(capsules);

  // FORMATS THE DATE TO READABLE FORMAT
  function formatUtcTime(utcTimeString: string) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
    };

    const utcDate = new Date(utcTimeString);
    const formattedDate = utcDate.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  return (
    <section className=" mx-auto place-content-center  py-[50px]">
      {capsules.length > 0 && (
        <div className="grid grid-cols-3 mdw:grid-cols-2 smw:grid-cols-1  place-items-start gap-[35px] place-content-center relative text-center">
          {capsules.map((capsule) => (
            <div
              key={capsule.capsule_serial}
              className="flex relative h-full flex-col smw:w-full max-w-[340px] overflow-hidden rounded-xl bg-grey-600 "
            >
              <div className="relative arc-border h-fit">
                <img
                  className={`w-full  xsw:h-[200px] h-[248px] transition-all duration-300 ease-in-out hover:scale-105  cursor-pointer bg-grey-400 overflow-hidden`}
                  src="/backgrounds/Image_placeholder.svg"
                  alt={capsule.capsule_serial}
                  width={500}
                  height={500}
                />
                <h1 className=" text-[42px] tracking-widest absolute top-0 left-0 w-full h-full  bottom-0  flex place-items-center place-content-center right-0 text-onPrimary font-semibold ">
                  {" "}
                  {capsule.capsule_serial}
                </h1>
              </div>

              <div className="flex h-full flex-col px-[20px] py-[18px] mb-[20px] text-start gap-4">
                <p className=" text-xs text-grey-200 font-light ">
                  {" "}
                  {formatUtcTime(capsule.original_launch)}
                </p>
                <h2 className="  text-[22px] text-onPrimary font-semibold ">
                  {" "}
                  {capsule.type}
                </h2>
                <p className=" grow h-full line-clamp-3 xsw:text-[14px] text-[16px] text-grey-50 font-light ">
                  {" "}
                  {capsule.details}
                </p>

                <button  onClick={e => onCapsuleClicked(capsule)}>
                  <OutlinedButton classNames=" border-primary-300 text-primary-300 text-[13px] w-fit ">
                    {" "}
                    View Details{" "}
                  </OutlinedButton>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {capsules.length < 1 && (
        <div className="flex flex-col  place-content-center place-items-center">
          <img src="/empty_bin.svg" width={500} height={500} className="text-white w-3/6 md:w-2/6" alt="Empty" />
          <p className="  text-[26px] mt-4 text-onPrimary font-semibold ">
            {"No Capsules Found "}
          </p>
          <p className=" xsw:text-[14px] text-[16px] text-grey-50 font-light ">
            {"Sorry, there were no Capsules found, please try again."}
          </p>
        </div>
      )}
    </section>
  );
}

export default CapsulesList;
