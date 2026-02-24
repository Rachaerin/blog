import Image from "next/image";

export default function Girl() {
  return (
    <div className="fixed left-0 bottom-0 -z-10 md:block hidden">
      <Image
        src="/img/131939292_p0.jpg"
        width={200}
        height={400}
        alt="flower1"
      />
    </div>
  );
}
