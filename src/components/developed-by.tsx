import Link from "next/link";

export function DevelopedBy() {
  return (
    <div className="flex items-center justify-center border mt-[-56px] bg-secondary">
      <p className="text-primary-foreground">
        Desenvolvido por{" "}
        <Link
          href="https://www.linkedin.com/in/luiz-henrique-lima-de-oliveira/"
          target="_blank"
          className="underline hover:text-primary"
        >
          Luiz Henrique Lima de Oliveira
        </Link>
      </p>
    </div>
  );
}
