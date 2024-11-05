"use client";

import Button from "@/components/ui/button/Button";
import styles from "./Celebrate.module.scss";
import Image from "next/image";

export default function Celebrate() {
  return (
    <section className={styles.celebrateSection}>
      <div className={styles.content}>
        <h2>Celebrate with a lot of love</h2>
        <p>
          In this holidays, celebrate with much love and peace, offering many blessings to our loved
          ones, friends and neighbors, wishing them a good Christmas message.
        </p>
        <Button text="Send Good Wishes" height="63px" minWidth="220px" onClick={() => void 0} />
      </div>

      <Image src="/images/celebrate.png" alt="celebrate" width={450} height={450} />
    </section>
  );
}
