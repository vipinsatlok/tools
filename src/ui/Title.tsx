interface IProps {
  tag: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
  size?: number;
}

export default function Title({ tag, size, children }: IProps) {
  const tagClassName =
    tag === "h1"
      ? "text-3xl font-bold"
      : tag === "h2"
      ? "text-2xl font-semibold"
      : tag === "h3"
      ? "text-lg"
      : "text-base";
  const className = `${size ? `text-[${size}]` : tagClassName}`;

  return tag === "h1" ? (
    <h1 className={className}>{children}</h1>
  ) : tag === "h2" ? (
    <h2 className={className}>{children}</h2>
  ) : tag === "h3" ? (
    <h3 className={className}>{children}</h3>
  ) : (
    <p className={className}>{children}</p>
  );
}
