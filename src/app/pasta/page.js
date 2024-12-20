import {Metadata} from "next";

export const metadata = {
    title: "SSR SEO-Pasta",
    description: "Pasta 페이지입니다.",
    openGraph: {
        title: "NextJS SNS 공유 테스트 파스타 페이지",
        description: "맛있는 파스타 링귀니가 짱이야",
        siteName: "SSR SEO 테스트",
        url: "https://ssr-seo.vercel.app/pasta",
        images: [
            {
                url: "https://www.pngplay.com/wp-content/uploads/4/Pasta-Transparent-Background.png",

            }
        ]
    }
}



export default function Page() {

    const jsonLd = {
        '@context': "https://schema.org",
        '@type': 'Article',
        'name': 'Pasta',
        'description': '파스타는 물과 듀럼밀 세몰리나를 반죽하여 만드는 이탈리아의 면과 이를 이용한 음시 전반을 일컫는 말이다.',
        'author': {
            "@type": "Person",
            "name:": "소현짱짱"
        },
        'image': 'https://www.pngplay.com/wp-content/uploads/4/Pasta-Transparent-Background.png'
    }
    return (
        <section className="section">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <h1>Pasta</h1>
            <img
                className="food-img"
                src="https://www.pngplay.com/wp-content/uploads/4/Pasta-Transparent-Background.png"
                alt="파스타"
            />
            <article className="article">
                파스타(pasta)는 물과 듀럼밀 세몰리나를 반죽하여 만드는 이탈리아의 면과
                이를 이용한 음식 전반을 일컫는 말이다. 파스타 생산은 최근에 듀럼밀의
                영양학적 우수성이 인정 받아 급성장 중인 산업이며, 스펠트밀,
                호라산밀(카무트), 엠머밀 등 다양한 고대밀을 사용한 파스타 또한
                만들어지고 있다.
            </article>
        </section>
    )
}