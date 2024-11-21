import {Metadata} from "next";

export const metadata = {
    title: "ssr-seo 프라이드 치킨 페이지",
    description: "프라이드 치킨 페이지입니다.",
    openGraph:{
        title: "NextJS SNS 공유 테스트 치킨 페이지",
        description: "후라이드 치킨이 아니라 프라이드 치킨이 맞는 말이래요.",
        url: "https://ssr-seo.vercel.app/chicken",
        images: [
            {
                url: "https://www.pngarts.com/files/4/Fried-Chicken-PNG-Image-Transparent-Background.png",
                alt: "fried-chicken"
            }
        ]
    }
}
export default function Page(){
    return (
        <section className="section">
            <h1>Chicken</h1>
            <img
                className="food-img"
                src="https://www.pngarts.com/files/4/Fried-Chicken-PNG-Image-Transparent-Background.png"
                alt="후라이드 치킨"
            />
            <article className="article">
                흔히들 후라이드 치킨이라고 하나, 외래어 표기법상 프라이드치킨이고
                표준국어대사전에도 그렇게 등재되어 있다. 순우리말로 해석하자면 '닭튀김'.
                중국어로는 炸鷄, 일본어로는 フライドチキン라고 불린다. 오늘날 가장
                유명한 프라이드 치킨으로 켄터키 프라이드 치킨(KFC)가 있다. 닭고기 요리의
                종류. 치킨의 부류에서 제일 보편적인 메뉴로, 오늘날 한국의 양념치킨을
                비롯한 몇몇 메뉴들과 함께 치킨집에서 판매하는 가장 대표적인 메뉴 중
                하나다.
            </article>
        </section>

    )
}