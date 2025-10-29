import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Exercise {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Легко' | 'Средне' | 'Сложно';
  ageGroup: string;
}

const exercises: Exercise[] = [
  {
    id: '1',
    title: 'Артикуляционная гимнастика "Лягушка"',
    description: 'Упражнение для развития мышц губ и улучшения артикуляции',
    category: 'Артикуляция',
    difficulty: 'Легко',
    ageGroup: '3-5 лет'
  },
  {
    id: '2',
    title: 'Дыхательная гимнастика "Ветерок"',
    description: 'Развитие правильного речевого дыхания и воздушной струи',
    category: 'Дыхание',
    difficulty: 'Легко',
    ageGroup: '3-6 лет'
  },
  {
    id: '3',
    title: 'Автоматизация звука [Р]',
    description: 'Комплекс упражнений для закрепления правильного произношения',
    category: 'Звукопроизношение',
    difficulty: 'Средне',
    ageGroup: '5-7 лет'
  },
  {
    id: '4',
    title: 'Развитие фонематического слуха',
    description: 'Игры и упражнения для различения звуков речи',
    category: 'Фонематика',
    difficulty: 'Средне',
    ageGroup: '4-6 лет'
  },
  {
    id: '5',
    title: 'Пальчиковая гимнастика',
    description: 'Развитие мелкой моторики для улучшения речевых навыков',
    category: 'Моторика',
    difficulty: 'Легко',
    ageGroup: '2-5 лет'
  },
  {
    id: '6',
    title: 'Скороговорки для дикции',
    description: 'Улучшение четкости речи и темпа произношения',
    category: 'Дикция',
    difficulty: 'Сложно',
    ageGroup: '6-8 лет'
  }
];

const methodologies = [
  {
    title: 'Артикуляционная гимнастика',
    description: 'Комплекс упражнений для развития подвижности органов артикуляции',
    icon: 'Smile'
  },
  {
    title: 'Дыхательная гимнастика',
    description: 'Упражнения для формирования правильного речевого дыхания',
    icon: 'Wind'
  },
  {
    title: 'Логопедический массаж',
    description: 'Техники массажа для улучшения тонуса речевых мышц',
    icon: 'Hand'
  },
  {
    title: 'Развитие фонематики',
    description: 'Методики для развития фонематического слуха и восприятия',
    icon: 'Ear'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [activeExercise, setActiveExercise] = useState<string | null>(null);

  const categories = ['Все', ...Array.from(new Set(exercises.map(e => e.category)))];
  
  const filteredExercises = selectedCategory === 'Все' 
    ? exercises 
    : exercises.filter(e => e.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Легко': return 'bg-green-100 text-green-800';
      case 'Средне': return 'bg-yellow-100 text-yellow-800';
      case 'Сложно': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Speech" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Логопед Онлайн</h1>
              <p className="text-sm text-muted-foreground">Профессиональная помощь</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#methods" className="text-foreground hover:text-primary transition-colors font-medium">Методики</a>
            <a href="#exercises" className="text-foreground hover:text-primary transition-colors font-medium">Упражнения</a>
          </nav>
        </div>
      </header>

      <section id="home" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground">
                Профессиональный подход
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Развитие речи <br />
                <span className="text-primary">с профессионалом</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Индивидуальные программы коррекции речи для детей и взрослых. 
                Современные методики, интерактивные упражнения и проверенные результаты.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Calendar" size={20} />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="FileText" size={20} />
                  Скачать материалы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">учеников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">результат</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://cdn.poehali.dev/projects/f63ebcd5-53c1-4408-b5e0-1cccf1f3ac22/files/6f720161-a03c-4f1d-8ed1-c7715416fc7a.jpg"
                alt="Логопед за работой"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="methods" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Методики</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Наши подходы к обучению
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Применяем современные и проверенные методики для достижения максимальных результатов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {methodologies.map((method, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={method.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{method.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="techniques" className="animate-fade-in">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="techniques">Техники</TabsTrigger>
              <TabsTrigger value="materials">Материалы</TabsTrigger>
              <TabsTrigger value="schedule">Программа</TabsTrigger>
            </TabsList>
            
            <TabsContent value="techniques" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Логопедические техники</CardTitle>
                  <CardDescription>
                    Основные методы коррекции речевых нарушений
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Постановка звуков</AccordionTrigger>
                      <AccordionContent>
                        Индивидуальный подход к постановке каждого звука с использованием 
                        механической помощи, опоры на другие звуки и артикуляционной гимнастики.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Автоматизация</AccordionTrigger>
                      <AccordionContent>
                        Закрепление правильного произношения в слогах, словах, фразах и 
                        спонтанной речи через систему упражнений и игр.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Развитие связной речи</AccordionTrigger>
                      <AccordionContent>
                        Работа над построением предложений, составлением рассказов, 
                        пересказом и диалогической речью.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="materials" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Учебные материалы</CardTitle>
                  <CardDescription>
                    Готовые материалы для занятий дома
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" size={24} className="text-primary" />
                        <div>
                          <div className="font-medium">Карточки для автоматизации</div>
                          <div className="text-sm text-muted-foreground">PDF, 2.5 МБ</div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="Download" size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" size={24} className="text-primary" />
                        <div>
                          <div className="font-medium">Артикуляционная гимнастика</div>
                          <div className="text-sm text-muted-foreground">PDF, 1.8 МБ</div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="Download" size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" size={24} className="text-primary" />
                        <div>
                          <div className="font-medium">Скороговорки и чистоговорки</div>
                          <div className="text-sm text-muted-foreground">PDF, 1.2 МБ</div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="Download" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schedule" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Примерная программа занятий</CardTitle>
                  <CardDescription>
                    Структура коррекционного курса
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <div className="font-semibold">Диагностика</div>
                        <div className="text-sm text-muted-foreground">
                          Оценка речевого развития и составление индивидуального плана
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <div className="font-semibold">Подготовительный этап</div>
                        <div className="text-sm text-muted-foreground">
                          Артикуляционная гимнастика, развитие фонематического слуха
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <div className="font-semibold">Постановка звуков</div>
                        <div className="text-sm text-muted-foreground">
                          Работа над проблемными звуками
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <div className="font-semibold">Автоматизация и закрепление</div>
                        <div className="text-sm text-muted-foreground">
                          Введение звуков в речь, развитие связной речи
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="exercises" className="py-16 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Интерактивные упражнения</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Практические задания
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите упражнения по категориям и начните заниматься прямо сейчас
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="gap-2"
              >
                <Icon name="Filter" size={16} />
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise, index) => (
              <Card 
                key={exercise.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setActiveExercise(activeExercise === exercise.id ? null : exercise.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getDifficultyColor(exercise.difficulty)}>
                      {exercise.difficulty}
                    </Badge>
                    <Badge variant="outline">{exercise.ageGroup}</Badge>
                  </div>
                  <CardTitle className="text-lg">{exercise.title}</CardTitle>
                  <CardDescription>{exercise.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Tag" size={16} />
                      {exercise.category}
                    </div>
                    <Button 
                      size="sm" 
                      variant={activeExercise === exercise.id ? 'default' : 'ghost'}
                      className="gap-2"
                    >
                      {activeExercise === exercise.id ? (
                        <>
                          <Icon name="CheckCircle" size={16} />
                          Активно
                        </>
                      ) : (
                        <>
                          <Icon name="Play" size={16} />
                          Начать
                        </>
                      )}
                    </Button>
                  </div>
                  
                  {activeExercise === exercise.id && (
                    <div className="mt-4 p-4 bg-secondary/50 rounded-lg space-y-3 animate-fade-in">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Icon name="Info" size={16} className="text-primary" />
                        Инструкция:
                      </div>
                      <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground">
                        <li>Подготовьте зеркало для контроля артикуляции</li>
                        <li>Выполняйте упражнение медленно и точно</li>
                        <li>Повторите 5-7 раз за одно занятие</li>
                        <li>Занимайтесь регулярно 2 раза в день</li>
                      </ol>
                      <Button size="sm" variant="outline" className="w-full gap-2">
                        <Icon name="Video" size={16} />
                        Посмотреть видео-пример
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Icon name="Speech" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Логопед Онлайн</h3>
              </div>
              <p className="text-white/70">
                Профессиональная логопедическая помощь для детей и взрослых
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (900) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@logoped.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Часы работы</h4>
              <div className="space-y-2 text-white/70">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб: 10:00 - 18:00</div>
                <div>Вс: выходной</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            © 2024 Логопед Онлайн. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
