import Link from "next/link";
import styles from "./A.module.scss"

export default function ({href, text}) {
    return(
        <Link className={styles.link} href={href}>
            {text}
        </Link>
    )
}