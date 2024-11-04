"use client";

import { useState } from "react";
import { LayoutGrid, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "@/components/theme-switch/ThemeSwitch";
import styles from "./Header.module.scss";
import { menuItems } from "@/helpers/constants";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <Image src="/images/santa-emoji.png" alt="santa" width={24} height={24} />
        <h4>Christmas</h4>
      </div>

      <div className={styles.menu}>
        <div className={styles.desktopLinks}>
          {menuItems.map((item, i) => (
            <Link href={item.link} key={i} className={styles.link}>
              {item.title}
            </Link>
          ))}
        </div>

        <ThemeSwitch />

        <LayoutGrid size={20} className={styles.gridIcon} onClick={() => setShowMobileMenu(true)} />

        {showMobileMenu && (
          <div
            className={[
              styles.mobileLinks,
              "theme-bg",
              "animate__animated",
              "animate__slideInDown",
            ].join(" ")}
          >
            {menuItems.map((item, i) => (
              <Link href={item.link} key={i} className={styles.link}>
                {item.title}
              </Link>
            ))}

            <X size={20} className={styles.closeIcon} onClick={() => setShowMobileMenu(false)} />

            <Image src="/images/light-bulbs.png" alt="bulbs" width={96} height={57} />
          </div>
        )}
      </div>
    </div>
  );
}
