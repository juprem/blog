import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router';
import { ArticleCard } from '../components/ArticleCard/ArticleCard.tsx';
import dayjs, { Dayjs } from 'dayjs';
import RandomImage from '../assets/random_image.jpg';

export const Route = createFileRoute('/')({
    component: Index,
});

const articles: {
    img: string;
    title: string;
    date: Dayjs;
    readingTime: number;
    link: keyof FileRoutesByPath;
}[] = [
    {
        date: dayjs(),
        img: RandomImage,
        readingTime: 7,
        title: 'Premier Article',
        link: '/first-article',
    },
    {
        date: dayjs(),
        img: RandomImage,
        readingTime: 7,
        title: 'Premier Article2',
        link: '/first-article',
    },
    {
        date: dayjs(),
        img: RandomImage,
        readingTime: 7,
        title: 'Premier Article3',
        link: '/first-article',
    },
    {
        date: dayjs(),
        img: RandomImage,
        readingTime: 7,
        title: 'Premier Article4',
        link: '/first-article',
    },
    {
        date: dayjs(),
        img: RandomImage,
        readingTime: 7,
        title: 'Premier Article5',
        link: '/first-article',
    },
];

function Index() {
    return (
        <div className="p-2 grid max-lg:grid-cols-1 grid-cols-2 2xl:grid-cols-3 gap-4 justify-items-center">
            {articles.map((article) => {
                const { title, date, img, link, readingTime } = article;

                return (
                    <ArticleCard
                        date={date}
                        img={img}
                        readingTime={readingTime}
                        title={title}
                        link={link}
                        key={`${title}-${date}`}
                    />
                );
            })}
        </div>
    );
}
