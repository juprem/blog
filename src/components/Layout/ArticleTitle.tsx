interface ArticleTitleProps {title: string}

export function ArticleTitle({title}: ArticleTitleProps) {
    return <div className="font-bold text-[30px] w-fit">{title}</div>;
}