import Image from "next/image";
import { advocate } from "@/data/advocate";

export default function Portrait() {
  return (
    <figure className="portrait mx-auto w-full max-w-sm lg:max-w-none">
      <div className="portrait-frame">
        <Image
          src={advocate.portrait.src}
          alt={advocate.portrait.alt}
          fill
          priority
          sizes="(min-width: 1024px) 28rem, (min-width: 640px) 22rem, 85vw"
          className="portrait-image object-cover object-[68%_16%]"
        />
        <div className="portrait-wash" aria-hidden="true" />
      </div>
    </figure>
  );
}
