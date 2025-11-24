import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#e4e9f7] pt-8 text-sm text-[#6e7897]">
      <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Nichula Sathmith Wasalathilaka. All rights reserved.</p>
        <div className="flex gap-4 text-[#0f348c]">
          <Link href="mailto:nichula2001@gmail.com" className="hover:underline">
            Email
          </Link>
          <Link href="https://github.com/nichula01" target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/nichula-wasalathilaka/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
