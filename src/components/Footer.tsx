import FooterLinks from "../data/footer/FooterLinks.json";

function Footer() {
  return (
    <div className=" bg-grey-800 flex-col md:pl-[40px] py-[120px] overflow-hidden place-items-center">
      <div className=" smw:px-[20px] msmw:container flex-col flex">
        <div className="mx-auto grid mdw:gap-12 mdw:grid-cols-3 smw:grid-cols-1 grid-cols-5">
          <div className="flex flex-col place-content-center mdw:col-span-3 smw:col-span-1 col-span-2">
          <a href="/" className="flex gap-0.5 md:gap-2 place-items-center">
          <div
            className="boundless text-lg font-poppins bg-black p-2 rounded-lg flex w-fit h-auto"
          >
            SIMON TEST

            </div>
       </a>

            <p className="font-light font-manRope text-[12px] mt-[20px] mdw:text-[14px] leading-normal text-grey-200  md:w-4/6 ">
              {
                "Lorem ipsum dolor sit amet consectetur. Lectus nisl \nmi porta tristique porttitor nullam. Platea ipsum pretium tortor nunc enim. "
              }
            </p>
          </div>

          {FooterLinks.map((link) => (
            <div
              key={link.title.link}
              className="flex flex-col gap-[20px] text-start"
            >
              <a
                className="text-[#757DEE] font-medium text-[15px]"
                href={link.title.link}
              >
                {" "}
                {link.title.title}{" "}
              </a>
              {link.children.map((child) => (
                <a
                  key={child.link}
                  className="text-text-100 font-light text-[13px]"
                  href={child.link}
                >
                  {" "}
                  {child.title}{" "}
                </a>
              ))}
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default Footer;
