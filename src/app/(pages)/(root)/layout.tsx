import CreateLayout from "@/app/components/layout/create_layout";

export default function CharacterListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CreateLayout>{children}</CreateLayout>;
}
