import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo/pdark.png";
import logo2 from "../../public/img/logo/plight.png";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image
            width={160}
            height={40}
            className="logo_light"
            src={logo}
            alt="brand"
          />
          <Image
            width={160}
            height={40}
            className="logo_dark"
            src={logo2}
            alt="brand"
          />
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
