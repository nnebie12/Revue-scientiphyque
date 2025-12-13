const ArticleItem = ({ article, index }) => {
  return (
    <div className="border-l-4 border-blue-600 pl-4 py-2 hover:bg-gray-50 transition-colors">
      <div className="flex items-start space-x-3">
        <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
          {index + 1}
        </span>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
            {article.title}
          </h4>
          <p className="text-sm text-gray-600 mb-2">Auteur(s): {article.authors}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Page: {article.pages}</span>
            <a href={article.doi} className="text-blue-600 hover:underline">
              DOI: {article.doi.split('/').pop()}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ArticleItem };