import styled from "styled-components";
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';

const name = 'Antonii Ivanchuk'
export const siteTitle = 'Next.js Sample Website'

export const Layout = ({ children, home }) => {
    return (
    <StyleWrapper>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
            />
            <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
                siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={'header'}>
            {home ? (
            <>
                <Image
                src="/images/avatar.webp"
                className={`${'headerHomeImage'} ${'borderCircle'}`}
                width="256"
                height='256'
                alt={name}
                />
                <h1 className={'heading2Xl'}>{name}</h1>
            </>
            ) : (
            <>
                <Link href="/">
                <a>
                     <Image
                        src="/images/avatar.webp"
                        className={`${'headerHomeImage'} ${'borderCircle'}`}
                        width="256"
                        height='256'
                        alt={name}
                    />
                </a>
                </Link>
                <h2 className={'headingLg'}>
                <Link href="/">
                    <a className={'colorInherit'}>{name}</a>
                </Link>
                </h2>
            </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={'backToHome'}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
            </div>
        )}
    </StyleWrapper>
)
}

const StyleWrapper = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
    .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .headerImage {
    width: 6rem;
    height: 6rem;
    }
    .headerHomeImage {
    width: 8rem;
    height: 8rem;
    }
    .backToHome {
    margin: 3rem 0 0;
    }
`