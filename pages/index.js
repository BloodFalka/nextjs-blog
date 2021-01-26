import Head from "next/head";
import Link from "next/link";
import Date from '../components/Date'; 
import { Layout, siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={"headingMd"}>
        <p>
          Hello, I'm <b>Antonii</b>. I'm frontend Developer. Now I'm learn{" "}
          <b>Next.js</b>. I'm know React, Redux, HTML, CSS, fetch, git, npm &
          yarn.
        </p>
        <p>
          You’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.
        </p>
      </section>
      <section className={`${"headingMd"} ${"padding1px"}`}>
        <h2 className={"headingLg"}>Blog</h2>
        <ul className={"list"}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={"listItem"} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className='lightText'>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
