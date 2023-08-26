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

function CapsuleViewer({
  capsule,
  onDismiss,
}: {
  capsule: Capsule;
  onDismiss: () => void;
}) {
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
    <main onClick={e => onDismiss()} className="w-screen z-50 fixed top-0 left-0 h-screen bg-black/10 backdrop-blur-md flex place-content-center place-items-center">
      <section className="rounded-xl max-w-[90vw] h-fit max-h-[90vh] overflow-auto md:min-w-[40vw] bg-grey-600 text-grey-50">
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
          <p className=" text-grey-200 font-light ">
            {" "}
            {formatUtcTime(capsule.original_launch)}
          </p>
          <div className="flex gap-6 place-items-center">
          <h2 className="  text-[22px] text-onPrimary font-semibold ">
            {" "}
            {capsule.type}  
          </h2>
          <p className="rounded-xl bg-primary-100 p-2 w-fit"> {capsule.status} </p>
          </div>
          <p className=" grow md:w-5/6 h-full xsw:text-[14px] text-[16px] text-grey-50 font-light ">
            {" "}
            {capsule.details}
          </p>

          <hr className="w-full border-grey-100/50 border-[1px]"/>

          <ul className="flex flex-col text-grey-50">

            <h1 className="text-lg"> Missions: </h1>

            {capsule.missions.map((mission,index) => {
                return <li className="xsw:text-[14px] mt-2 text-[16px] ">
                   ({index+1}). {" "}<span className="font-bold">Name:</span> {mission.name} -   <span className="font-bold">Flight:</span>: {mission.flight}
                </li>
            })}

          </ul>

          <p className="text-lg smw:text-base"> Number of Landings: {capsule.landings} </p>
          <p className="text-lg smw:text-base"> Reused: {capsule.reuse_count} </p>
          <p className="text-lg smw:text-base"> Capsule original launch unix: {capsule.original_launch_unix} </p>


          <button onClick={e => onDismiss()}>
            <OutlinedButton classNames=" border-primary-300 text-primary-300 text-[13px] w-fit ">
              {" "}
              Dismiss {" "}
            </OutlinedButton>
          </button>
        </div>
      </section>
    </main>
  );
}

export default CapsuleViewer;
