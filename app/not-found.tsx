import { Space } from "@/components/icons/Space";

export default function NotFound() {
  return (
    <main className="min-h-[90vh] flex flex-col items-center justify-center">
      <div>
        <Space width="20rem" height="20rem" />
        <p className="text-center">404 | This page could not be found.</p>
      </div>
    </main>
  );
}
