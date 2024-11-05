"use client";

import Image from "next/image";
import styles from "./StartGiving.module.scss";
import { startGivingCards } from "@/helpers/constants";

export default function StartGiving() {
  return (
    <section className={styles.startGiving}>
      <h2>Start giving this christmas</h2>

      <div className={styles.cards}>
        {startGivingCards.map((card, i) => (
          <div key={i} className={styles.card}>
            <Image src={card.image} alt={card.title} width={120} height={120} />
            <h3>{card.title}</h3>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
