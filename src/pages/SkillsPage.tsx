import { Header } from '@/components/Header';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
