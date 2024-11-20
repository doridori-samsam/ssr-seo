import Head from "next/head";

export const metadata = {
    title: "SSR SEO-Home",
    description: "Nextjs SEO 테스트 홈페이지입니다.",
    openGraph: {
        title: "Nextjs로 SEO 테스트",
        description: "Nextjs를 안쓰는건 미친짓이다.",
        siteName: "SSR SEO 테스트",
        image: [
            {
                url: "https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/9242ab46828d4360a19648d54691f497/4c56d329980b4d69baa2180101043594_1599932445.jpg",
                width: 900,
                height: 900
            }
        ]
    }
}
export default function Home() {
  return (
      <>
          <Head>
              <title>SSR에서 SEO-홈페이지</title>
              <meta name="description" content="홈페이지입니다."/>
              <meta property={"og:title"} content={'nextjs에서 seo'}/>
              <meta property={"og:description"} content={"NextJS SEO 홈페이지입니다."}/>
              <meta property={"og:image"} content='https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/9242ab46828d4360a19648d54691f497/4c56d329980b4d69baa2180101043594_1599932445.jpg'/>
          </Head>
   <h1>Home page!🐣</h1>
      </>
  );
}
