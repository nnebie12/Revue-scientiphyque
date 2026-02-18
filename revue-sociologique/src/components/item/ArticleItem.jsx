import { Download, FileText } from 'lucide-react';
import fileService from '../../services/fileService';

const ArticleItem = ({ article, index }) => {
  return (
    <div className="group border-l-4 border-blue-600 pl-4 py-4 hover:bg-gray-50 transition-all rounded-r-lg">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
            {index + 1}
          </span>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 cursor-pointer">
              {article.title}
            </h4>
            <p className="text-sm text-gray-700 mb-2 italic">Par: {article.authors}</p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded">{article.category}</span>
              <span>Publié le: {new Date(article.publicationDate).toLocaleDateString()}</span>
              {article.doi && (
                <a href={`https://doi.org/${article.doi}`} className="text-blue-600 hover:underline">
                  DOI: {article.doi}
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Bouton de téléchargement */}
        <button 
          onClick={() => fileService.downloadArticlePdf(article.id, `${article.title}.pdf`)}
          className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
        >
          <Download size={16} />
          <span className="hidden sm:inline">PDF</span>
        </button>
      </div>
    </div>
  );
};
export { ArticleItem };