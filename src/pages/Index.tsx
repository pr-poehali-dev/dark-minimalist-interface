import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const videoData = [
  {
    id: 1,
    title: 'Новейшие технологии квантовых компьютеров',
    channel: 'TechFuture',
    thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg',
    views: '1.2M',
    likes: '45K',
    dislikes: '200'
  },
  {
    id: 2,
    title: 'Искусственный интеллект в медицине будущего',
    channel: 'MedTech Pro',
    thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg',
    views: '890K',
    likes: '32K',
    dislikes: '150'
  },
  {
    id: 3,
    title: 'Космические станции нового поколения',
    channel: 'Space Explorer',
    thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg',
    views: '2.1M',
    likes: '78K',
    dislikes: '300'
  },
  {
    id: 4,
    title: 'Революция в области возобновляемой энергии',
    channel: 'EcoTech',
    thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg',
    views: '650K',
    likes: '28K',
    dislikes: '100'
  },
  {
    id: 5,
    title: 'Нейроинтерфейсы: управление силой мысли',
    channel: 'NeuroScience',
    thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg',
    views: '1.5M',
    likes: '52K',
    dislikes: '250'
  },
  {
    id: 6,
    title: 'Биотехнологии XXI века',
    channel: 'BioInnovations',
    thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/0d9b536c-bfb1-4758-aaa4-ebdd359f8f1f.jpg',
    views: '920K',
    likes: '35K',
    dislikes: '180'
  }
];

const newsData = [
  {
    id: 1,
    title: 'Новый БПЛА Империи',
    description: 'На что способен новейший БПЛА Империи?',
    thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/b0452581-b8b3-436e-8fac-ec99fb4f4d46.jpg'
  },
  {
    id: 2,
    title: 'Участвуй в контракте',
    description: 'Участвуй в войне в Пладонии с настоящими мужчинами!',
    thumbnail: 'https://cdn.poehali.dev/projects/41a55fdc-922c-4d5f-bbde-b4de820c36ca/files/f33c34ed-60b2-48c5-b15a-6efb1eed58c5.jpg'
  }
];

const menuItems = [
  { name: 'Рекомендации', icon: 'Home' },
  { name: 'Лучшие видео', icon: 'TrendingUp' },
  { name: 'Shorts', icon: 'Smartphone' },
  { name: 'Политика', icon: 'Landmark' },
  { name: 'Военные категории', icon: 'Shield' }
];

const Index = () => {
  const [activeMenu, setActiveMenu] = useState('Рекомендации');

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
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
                className="w-full bg-secondary border-border text-foreground placeholder:text-muted-foreground pr-10"
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
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-background border-r border-border overflow-y-auto">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => setActiveMenu(item.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeMenu === item.name
                        ? 'bg-primary/20 text-primary'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="px-4 mb-4 text-sm font-semibold text-muted-foreground uppercase">Новости</h3>
              <div className="space-y-4">
                {newsData.map((news) => (
                  <Card key={news.id} className="bg-card border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-all">
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
                className="bg-card border-border overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,222,226,0.4)] hover:border-accent/50"
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
                  
                  <p className="text-foreground text-sm">
                    {video.channel}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Eye" size={14} />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Heart" size={14} />
                      <span>{video.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="X" size={14} />
                      <span>{video.dislikes}</span>
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
