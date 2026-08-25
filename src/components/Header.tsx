import Link from "next/link";

export enum Tab {
  Manual,
  ShadCN,
}

type HeaderProps = {
  activeTab: Tab;
};

const commonLinkStyles: string = "w-full text-center hover:bg-slate-200 p-3";

export default function Header({ activeTab }: HeaderProps) {
  return (
    <nav className="rounded-md outline outline-slate-200 mb-5 flex flex-row justify-between">
      <Link
        className={`${commonLinkStyles} ${activeTab === Tab.Manual ? "bg-slate-200" : ""}`}
        href={"/"}
      >
        Manual
      </Link>
      <Link
        className={`${commonLinkStyles} ${activeTab === Tab.ShadCN ? "bg-slate-200" : ""}`}
        href={"/shadcn"}
      >
        Using ShadCN
      </Link>
    </nav>
  );
}
