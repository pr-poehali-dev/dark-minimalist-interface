import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  { id: 20, title: 'Голография в реальной жизни', channel: 'HoloTech', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 37400000, likes: 3100000, dislikes: 280000 },
  { id: 21, title: 'Нанотехнологии спасут мир', channel: 'NanoWorld', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 25600000, likes: 2000000, dislikes: 450000 },
  { id: 22, title: 'Виртуальная реальность нового уровня', channel: 'VR Experience', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 43100000, likes: 3400000, dislikes: 620000 },
  { id: 23, title: 'Ядерный синтез: прорыв века', channel: 'Energy Future', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 58900000, likes: 4700000, dislikes: 380000 },
  { id: 24, title: '3D печать органов человека', channel: 'BioTech Lab', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 36200000, likes: 2800000, dislikes: 510000 },
  { id: 25, title: 'Летающие автомобили в 2030', channel: 'FutureCars', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 62300000, likes: 5100000, dislikes: 890000 },
  { id: 26, title: 'Искусственная гравитация реальна', channel: 'Physics World', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 29700000, likes: 2300000, dislikes: 340000 },
  { id: 27, title: 'Климат: последний шанс', channel: 'EcoAlert', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 18400000, likes: 920000, dislikes: 1500000 },
  { id: 28, title: 'Новая эра космических путешествий', channel: 'SpaceX News', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 55800000, likes: 4500000, dislikes: 290000 },
  { id: 29, title: 'Суперпроводники при комнатной температуре', channel: 'Materials Science', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 32100000, likes: 2600000, dislikes: 410000 },
  { id: 30, title: 'Киберспорт: профессия будущего', channel: 'Gaming Pro', thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg', views: 47600000, likes: 3700000, dislikes: 680000 }
];

const shortsData = [
  { id: 101, title: 'Квантовый прорыв за 60 сек', hashtags: ['#наука', '#квант'], views: 12400000 },
  { id: 102, title: 'ИИ рисует будущее', hashtags: ['#AI', '#искусство'], views: 8700000 },
  { id: 103, title: 'Космос ближе чем кажется', hashtags: ['#космос', '#марс'], views: 15200000 },
  { id: 104, title: 'Робот против человека', hashtags: ['#технологии', '#будущее'], views: 9300000 },
  { id: 105, title: 'Нейросеть пишет музыку', hashtags: ['#AI', '#музыка'], views: 11200000 },
  { id: 106, title: 'Телепортация атомов', hashtags: ['#физика', '#квант'], views: 7800000 },
  { id: 107, title: 'Биохакинг за минуту', hashtags: ['#биохакинг', '#здоровье'], views: 13500000 },
  { id: 108, title: 'Дроны будущего сегодня', hashtags: ['#технологии', '#дроны'], views: 10900000 },
  { id: 109, title: 'VR изменит все', hashtags: ['#VR', '#будущее'], views: 14600000 },
  { id: 110, title: 'Криптография нового поколения', hashtags: ['#крипто', '#безопасность'], views: 6700000 },
  { id: 111, title: 'Марс через 10 лет', hashtags: ['#космос', '#марс'], views: 16800000 },
  { id: 112, title: 'ИИ-художник', hashtags: ['#AI', '#искусство'], views: 12100000 }
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

  const renderShortsSection = () => {
    const shortsRows = [];
    for (let i = 0; i < shortsData.length; i += 5) {
      shortsRows.push(shortsData.slice(i, i + 5));
    }

    return (
      <div className="space-y-12">
        {shortsRows.map((row, rowIndex) => (
          <div key={rowIndex}>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {row.map((short) => (
                <Card 
                  key={short.id}
                  className="flex-shrink-0 w-[280px] bg-card/30 border-border/40 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:border-primary/60"
                >
                  <div className="relative h-[480px] overflow-hidden bg-gradient-to-b from-primary/20 to-background">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Play" size={72} className="text-primary/40" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-white border-0">
                        <Icon name="Smartphone" size={12} className="mr-1" />
                        Shorts
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                      <h3 className="text-foreground font-medium mb-2 line-clamp-2">
                        {short.title}
                      </h3>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {short.hashtags.map((tag, i) => (
                          <span key={i} className="text-xs text-primary">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Icon name="Eye" size={14} />
                        <span>{formatNumber(short.views)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderMixedContent = () => {
    const content = [];
    let videoIndex = 0;
    let shortIndex = 0;
    const shortsToShow = [0, 2, 4];

    for (let i = 0; i < 36; i++) {
      if (i > 0 && i % 8 === 0 && shortIndex < shortsToShow.length) {
        content.push({ type: 'short', data: shortsData[shortsToShow[shortIndex]] });
        shortIndex++;
      } else if (videoIndex < videoData.length) {
        content.push({ type: 'video', data: videoData[videoIndex] });
        videoIndex++;
      }
    }

    return content.map((item, index) => {
      if (item.type === 'short') {
        const short = item.data;
        return (
          <Card 
            key={`short-${short.id}`}
            className="bg-card/30 border-border/40 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:border-primary/60"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-gradient-to-b from-primary/20 to-background">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Play" size={48} className="text-primary/40" />
              </div>
              <div className="absolute top-2 right-2">
                <Badge className="bg-primary text-white border-0 text-xs">
                  <Icon name="Smartphone" size={10} className="mr-1" />
                  Shorts
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                <h3 className="text-foreground text-sm font-medium mb-1 line-clamp-2">
                  {short.title}
                </h3>
                <div className="flex flex-wrap gap-1 mb-1">
                  {short.hashtags.map((tag, i) => (
                    <span key={i} className="text-xs text-primary">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon name="Eye" size={12} />
                  <span>{formatNumber(short.views)}</span>
                </div>
              </div>
            </div>
          </Card>
        );
      } else {
        const video = item.data;
        return (
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
        );
      }
    });
  };

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
          {activeMenu === 'Shorts' ? (
            renderShortsSection()
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderMixedContent()}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
