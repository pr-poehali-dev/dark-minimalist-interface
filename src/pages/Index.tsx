import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const videoData = [
  { id: 1, title: 'Квантовые компьютеры изменят мир', channel: 'TechFuture', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 45200000, likes: 3800000, dislikes: 120000 },
  { id: 2, title: 'ИИ в медицине: революция началась', channel: 'MedTech Pro', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 28900000, likes: 2100000, dislikes: 890000 },
  { id: 3, title: 'Космические станции будущего', channel: 'Space Explorer', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 67800000, likes: 5200000, dislikes: 340000 },
  { id: 4, title: 'Возобновляемая энергия против нефти', channel: 'EcoTech', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 12300000, likes: 580000, dislikes: 920000 },
  { id: 5, title: 'Нейроинтерфейсы: управление мыслью', channel: 'NeuroScience', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 38700000, likes: 2900000, dislikes: 230000 },
  { id: 6, title: 'Биотехнологии и бессмертие', channel: 'BioInnovations', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 54200000, likes: 4100000, dislikes: 780000 },
  { id: 7, title: 'Новый скандал с правительством', channel: 'Politics Today', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 23400000, likes: 890000, dislikes: 1200000 },
  { id: 8, title: 'Гиперзвуковое оружие XXI века', channel: 'Military Tech', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 19800000, likes: 1500000, dislikes: 320000 },
  { id: 9, title: 'Теория струн для чайников', channel: 'Science Simple', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 31200000, likes: 2600000, dislikes: 180000 },
  { id: 10, title: 'Криптовалюта: пузырь или будущее?', channel: 'CryptoNews', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 8900000, likes: 420000, dislikes: 680000 },
  { id: 11, title: 'Марс: первая колония через 10 лет', channel: 'Mars Colony', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 52100000, likes: 4300000, dislikes: 290000 },
  { id: 12, title: 'Суперкомпьютеры побеждают человека', channel: 'AI Research', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 41800000, likes: 3200000, dislikes: 520000 },
  { id: 13, title: 'Новая вакцина от всех болезней', channel: 'HealthWatch', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 16700000, likes: 980000, dislikes: 1100000 },
  { id: 14, title: 'Электромобили убивают планету?', channel: 'EcoDebate', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 27300000, likes: 1200000, dislikes: 1800000 },
  { id: 15, title: 'Телепортация уже реальность', channel: 'QuantumLab', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 70000000, likes: 5800000, dislikes: 420000 },
  { id: 16, title: 'Тёмная материя найдена?', channel: 'CosmosTV', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 33900000, likes: 2700000, dislikes: 310000 },
  { id: 17, title: 'Роботы заменят всех людей', channel: 'Future Jobs', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 14200000, likes: 680000, dislikes: 1400000 },
  { id: 18, title: 'Генная терапия: дизайнерские дети', channel: 'BioEthics', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 21800000, likes: 1400000, dislikes: 890000 },
  { id: 19, title: 'Новое супероружие России', channel: 'DefenseNews', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 48700000, likes: 3600000, dislikes: 720000 },
  { id: 20, title: 'Голография в реальной жизни', channel: 'HoloTech', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 37400000, likes: 3100000, dislikes: 280000 }
];

const newsData = [
  { id: 1, title: 'Новый БПЛА Империи', description: 'На что способен новейший БПЛА Империи?', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/b0452581-b8b3-436e-8fac-ec99fb4f4d46.jpg' },
  { id: 2, title: 'Участвуй в контракте', description: 'Участвуй в войне в Пладонии с настоящими мужчинами!', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/f33c34ed-60b2-48c5-b15a-6efb1eed58c5.jpg' }
];

const menuItems = [
  { name: 'Рекомендации', icon: 'Home' },
  { name: 'Тренды', icon: 'TrendingUp' },
  { name: 'Лучшие видео', icon: 'Trophy' },
  { name: 'Shorts', icon: 'Smartphone' },
  { name: 'Политика', icon: 'Landmark' },
  { name: 'Военные категории', icon: 'Shield' }
];

const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

const getHoverGlowClass = (likes: number, dislikes: number): string => {
  const total = likes + dislikes;
  const dislikePercent = (dislikes / total) * 100;
  const likePercent = (likes / total) * 100;

  if (likePercent >= 85) return 'hover:shadow-[0_0_35px_rgba(255,215,0,0.7)] hover:border-yellow-400/80';
  if (likePercent >= 65) return 'hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] hover:border-green-400/70';
  if (dislikePercent >= 40) return 'hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:border-red-500/70';
  if (dislikePercent >= 35) return 'hover:shadow-[0_0_30px_rgba(251,146,60,0.6)] hover:border-orange-500/70';
  
  return 'hover:shadow-[0_0_25px_rgba(255,222,226,0.4)] hover:border-accent/50';
};

const Index = () => {
  const [activeMenu, setActiveMenu] = useState('Рекомендации');

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8">
            <div className="bg-primary px-6 py-2 rounded-lg">
              <h1 className="text-2xl font-bold text-white">DeepTube</h1>
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Поиск..." 
                className="w-full bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground pr-10"
              />
              <Icon name="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            </div>
          </div>
          
          <Avatar className="border-2 border-white/30">
            <AvatarFallback className="bg-primary text-white">U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex pt-16">
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-background/80 backdrop-blur-sm border-r border-border/50 overflow-y-auto">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => setActiveMenu(item.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeMenu === item.name
                        ? 'bg-primary/20 text-primary'
                        : 'text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border/50">
              <h3 className="px-4 mb-4 text-sm font-semibold text-muted-foreground uppercase">Новости</h3>
              <div className="space-y-4">
                {newsData.map((news) => (
                  <Card key={news.id} className="bg-card/50 border-border/50 overflow-hidden cursor-pointer hover:border-primary/50 transition-all">
                    <img 
                      src={news.thumbnail} 
                      alt={news.title}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3">
                      <h4 className="text-sm font-semibold text-foreground mb-1">{news.title}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">{news.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        <main className="flex-1 ml-64 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((video) => (
              <Card 
                key={video.id} 
                className={`bg-card/30 border-border/40 overflow-hidden cursor-pointer group transition-all duration-300 ${getHoverGlowClass(video.likes, video.dislikes)}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-4 space-y-3">
                  <h3 className="text-foreground font-medium line-clamp-2 leading-tight">
                    {video.title}
                  </h3>
                  
                  <p className="text-foreground/80 text-sm">
                    {video.channel}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Eye" size={14} />
                      <span>{formatNumber(video.views)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Heart" size={14} />
                      <span>{formatNumber(video.likes)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="X" size={14} />
                      <span>{formatNumber(video.dislikes)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
