import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="Salinas Soccer Academy Logo"
          width={80}
          height={80}
          priority
        />
        <span className="text-xl font-semibold text-green-700">
          Salinas Soccer Academy
        </span>
      </Link>
    </header>
  );
}
