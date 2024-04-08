
import styles from "./page.module.css";
import Link from "next/link";
import FeaturedNews from "@/app/FeaturedNews";
import Magazines from "@/app/Magazines";
import Strategy from "@/app/Strategy";
import Leadership from "@/app/Leadership";
import AdSectionFooter from "@/app/AdSectionFooter";


export default  function Home() {


    return (
      <main className={styles.main}>
          <FeaturedNews/>
          <Magazines/>
          <Strategy/>
          <Leadership/>
          <AdSectionFooter/>
      </main>
  );
}
