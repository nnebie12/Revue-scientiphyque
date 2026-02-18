import React from "react";
import { ArticleItem } from "../components/item/ArticleItem";

const ArticlesTab = ({ articles = [], loading }) => {
  if (loading) return <div className="py-10 text-center text-gray-500">Chargement des articles...</div>;
  
  if (articles.length === 0) return <div className="py-10 text-center text-gray-500">Aucun article trouvé.</div>;

  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <ArticleItem key={article.id} article={article} index={index} />
      ))}
    </div>
  );
};
export { ArticlesTab };