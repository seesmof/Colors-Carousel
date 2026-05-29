import Link from "next/link";

export enum Tab {
  Manual,
  ShadCN,
}

interface HeaderProps {
  active: Tab;
}

const CommonLinkStyles = "w-full text-center hover:bg-slate-200 h-full p-3";

const Header = ({ active }: HeaderProps) => {
  return (
    <nav className="rounded-md outline outline-slate-200 mb-5 flex flex-row justify-between">
      <Link
        className={`${CommonLinkStyles} ${active === Tab.Manual ? "bg-slate-200" : ""}`}
        href={"/"}
      >
        Manual
      </Link>
      <Link
        className={`${CommonLinkStyles} ${active === Tab.ShadCN ? "bg-slate-200" : ""}`}
        href={"/lib"}
      >
        From ShadCN
      </Link>
    </nav>
  );
};
export default Header;
