import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full items-center h-20 justify-between p-1">
      <Image src="" alt="logo icon" width={2} height={2}></Image>
      <p>*Drom menu</p>
    </header>
  );
}
