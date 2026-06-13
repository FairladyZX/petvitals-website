import Image from "next/image";
import { siteConfig } from "@/lib/site";

type AppStoreButtonsProps = {
  className?: string;
};

export function AppStoreButtons({ className = "" }: AppStoreButtonsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={siteConfig.appStoreUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Download PetVitals on the App Store"
        className="rounded-md focus-visible:brand-focus"
      >
        <Image
          src="/assets/English_3x-2.png"
          width={133}
          height={44}
          alt="Download on the App Store"
        />
      </a>
      <a
        href={siteConfig.googlePlayUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Get PetVitals on Google Play"
        className="rounded-md focus-visible:brand-focus"
      >
        <Image
          src="/assets/English_3x.png"
          width={133}
          height={44}
          alt="Get it on Google Play"
        />
      </a>
    </div>
  );
}
