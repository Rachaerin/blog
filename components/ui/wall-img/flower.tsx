import Image from "next/image";

export default function Flower() {
  return (
    <div className="fixed right-0 top-0 -z-10 md:block hidden">
      <Image
        src="/img/7fad04190c8.png"
        width={200}
        height={400}
        alt="flower1"
      />
    </div>
  );
}
