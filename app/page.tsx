
import styles from "./page.module.css";
import Link from "next/link";
import FeaturedNews from "@/app/FeaturedNews";
import Magazines from "@/app/Magazines";
import BusinessNews from "@/app/BusinessNews";
import ExpertOpinions from "@/app/ExpertOpinions";
import AdSectionFooter from "@/app/AdSectionFooter";


export default  function Home() {
  

    return (
      <main className={styles.main}>
          <FeaturedNews/>
          <Magazines/>
          <BusinessNews/>
          <ExpertOpinions/>
          <AdSectionFooter/>
      </main>
  );
}
