import Image from "next/image";

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconImg: "/img/address/phone.png",
      name: "Phone",
      info: (
        <>
          <li>
            <a>+1 619 520 9475</a>
          </li>
          <li>
            <a>&#8203;</a>
          </li>
        </>
      ),
      animDelay: "0",
    },
    {
      id: 2,
      iconImg: "/img/address/email.png",
      name: "Email",
      info: (
        <>
          <li>
            <a href="mailto:ib-themes21@gmail.com">ms.ptidke@gmail.com</a>
          </li>
          <li>
            <a href="mailto:ib-themes21@gmail.com">ptidke4710@sdsu.edu</a>
          </li>
        </>
      ),
      animDelay: "100",
    },
    {
      id: 3,
      iconImg: "/img/address/location.png",
      name: "Address",
      info: (
        <>
          <li>
            <p>
              6560 Montezuma Road,
              <br />
              San Diego, USA
            </p>
          </li>
        </>
      ),
      animDelay: "200",
    },
  ];

  return (
    <ul className="wrapper">
      {addressContent.map((item) => (
        <li
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={item.animDelay}
          key={item.id}
        >
          <div className="list_inner">
            <div className="icon">
              <Image width={25} height={25} src={item.iconImg} alt="icon" />
            </div>
            {/* End icon */}
            <div className="content">
              <h3>{item.name}</h3>
              <ul>{item.info}</ul>
            </div>
            {/* End .content */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
