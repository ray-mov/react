import Link from "next/link";
import { CiCalendarDate, CiCreditCard1, CiDeliveryTruck, CiFacebook, CiInstagram, CiLinkedin, CiMoneyBill, CiTwitter } from "react-icons/ci";
import FoorterFeature from "./FoorterFeature";

const Footer = () => {
  return (
    <footer className="mt-10 lg:px-20 ">
      <div className="border-t-2 py-20 border-gray-100 flex justify-between">
        <FoorterFeature title={"Free shipping"} para={"on all orders"} icon={<CiDeliveryTruck />} />
        <FoorterFeature title={"15 days return"} para={"money back gaurantee"} icon={<CiCalendarDate />} />
        <FoorterFeature title={"Secure checkout"} para={"100% protected by Razorpay"} icon={<CiCreditCard1 />} />
        <FoorterFeature title={"100% free warranty"} para={"money back gaurantee"} icon={<CiMoneyBill />} />

      </div>
      <div className="flex border-t-2  border-gray-100 py-6 justify-between items-center">
        <div className="flex lg:gap-5 text-3xl">
          <Link href={""}>
            <CiFacebook />
          </Link>
          <Link href={""}>
            <CiInstagram />
          </Link>
          <Link href={""}>
            <CiTwitter />
          </Link>
          <Link href={""}>
            <CiLinkedin />
          </Link>
        </div>
        <p className="text-gray-600"><span>&copy; {new Date().getFullYear()} </span>
          <span className="font-bold">Clothix.</span>
          <span> Privacy Policy </span>
          <span>. Terms of use</span></p>
        <div>
          <p className="text-gray-400 font-robo">Powered By <span>M9 Devs</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
