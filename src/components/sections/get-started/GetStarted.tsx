"use client";

import Button from "@/components/ui/button/Button";
import Image from "next/image";
import styles from "./GetStarted.module.scss";

export default function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <Image src="/images/santa.png" alt="santa" width={500} height={442} />
      <div className={styles.content}>
        <h1>Merry Christmas and Happy New Year!</h1>
        <p className="text-sm">
          Christmas and a new year is about to begin, all good wishes and successes.
        </p>
        <Button text="Get started" height="63px" minWidth="210px" onClick={() => void 0} />
      </div>
    </section>
  );
}
