import MyPage from "./MyPage";
export const revalidate = 0;

export default function HomePage() {
  return (
    <main className="p-4 max-w-3xl mx-auto space-y-4 text-sm">
      <MyPage />
    </main>
  );
}
