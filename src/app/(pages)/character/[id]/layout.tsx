import CreateLayout from "@/app/components/layout/create_layout";

export default function CharacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CreateLayout>{children}</CreateLayout>;
}