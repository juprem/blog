import { Dayjs } from 'dayjs';
import { FileRoutesByPath, Link } from '@tanstack/react-router';

interface ArticleCardProps {
    img: string;
    title: string;
    date: Dayjs;
    readingTime: number;
    link: keyof FileRoutesByPath;
}

export function ArticleCard({ img, title, date, readingTime, link }: ArticleCardProps) {
    return (
        <Link to={link} className="w-fit">
            <div className="w-[270px]">
                <img className="w-[270px] h-[200px] rounded-t" src={img} alt="random_image" />
                <div className="border-x border-b border-blue-300 p-4 rounded">
                    <div className="font-bold text-xl">{title}</div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-[13px] text-gray-400">{date.format('DD MMMM YYYY')}</div>
                        <div className="text-[13px] text-gray-400">Lecture ~ {readingTime} min</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
