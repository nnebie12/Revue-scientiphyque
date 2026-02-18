import { TabButton } from "../layout/TabButton";
import { ArticlesTab } from "../ArticlesTab";
import { OverviewTab } from "../OverviewTab";

const ArticlesSection = ({ activeTab, setActiveTab }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex border-b border-gray-200 mb-6">
        <TabButton 
          active={activeTab === 'apercu'}
          onClick={() => setActiveTab('apercu')}
        >
          Aperçu
        </TabButton>
        <TabButton 
          active={activeTab === 'articles'}
          onClick={() => setActiveTab('articles')}
        >
          Derniers articles publiés
        </TabButton>
      </div>

      {activeTab === 'apercu' && <OverviewTab />}
      {activeTab === 'articles' && <ArticlesTab />}
    </section>
  );
};
export { ArticlesSection };