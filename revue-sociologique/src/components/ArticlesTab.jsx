import React from "react";
import { articlesData } from "../components/data/journalData";
import { ArticleItem } from "../components/item/ArticleItem";

const ArticlesTab = () => {
  return (
    <div className="space-y-4">
      {articlesData.map((article, index) => (
        <ArticleItem key={article.id} article={article} index={index} />
      ))}
    </div>
  );
};
export { ArticlesTab };