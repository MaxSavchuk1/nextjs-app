"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import styles from "./ShareAGift.module.scss";
import { giftsToShare } from "@/helpers/constants";
import classNames from "classnames";

export default function ShareAGift() {
  return (
    <section className={styles.shareAGift}>
      <h2>Share a gift</h2>
      <div className={styles.gifts}>
        {giftsToShare.map((gift) => (
          <Gift key={gift.id} gift={gift} />
        ))}
      </div>
    </section>
  );
}

function Gift({ gift }: { gift: (typeof giftsToShare)[number] }) {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked((v) => !v);

  return (
    <div key={gift.id} className={styles.gift}>
      <Heart
        size={20}
        className={classNames(styles.heart, {
          [styles.filled]: isLiked,
          animate__animated: isLiked,
          animate__heartBeat: isLiked,
        })}
        onClick={toggleLike}
      />

      <Image src={gift.image} alt={gift.title} width={120} height={120} />

      <h3>${gift.price}</h3>

      <p className="text-sm">{gift.title}</p>
    </div>
  );
}
