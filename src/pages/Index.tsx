import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [exchangeAmount, setExchangeAmount] = useState('');
  const [fromGame, setFromGame] = useState('');
  const [toGame, setToGame] = useState('');

  const games = [
    { id: 'cs2', name: 'Counter-Strike 2', currency: 'CS2 Credits' },
    { id: 'dota2', name: 'Dota 2', currency: 'Dota Plus Shards' },
    { id: 'valorant', name: 'Valorant', currency: 'VP Points' },
    { id: 'lol', name: 'League of Legends', currency: 'RP' },
    { id: 'apex', name: 'Apex Legends', currency: 'Apex Coins' },
  ];

  const exchangeRates = [
    { from: 'CS2 Credits', to: 'VP Points', rate: 1.2, trend: 'up' },
    { from: 'Dota Plus Shards', to: 'RP', rate: 0.8, trend: 'down' },
    { from: 'VP Points', to: 'Apex Coins', rate: 1.5, trend: 'up' },
    { from: 'RP', to: 'CS2 Credits', rate: 0.9, trend: 'stable' },
  ];

  const verificationSteps = [
    { step: 1, title: 'Привяжи аккаунт', description: 'Подключи свой игровой профиль через Steam/Riot/EA', icon: 'Link' },
    { step: 2, title: 'Подтверди владение', description: 'Выполни простую верификацию через игру', icon: 'Shield' },
    { step: 3, title: 'Начни обмен', description: 'Торгуй безопасно с проверенными игроками', icon: 'ArrowRightLeft' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Coins" className="text-blue-600" size={24} />
              <span className="text-xl font-bold text-slate-900">GameSwap</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Курсы</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Поддержка</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors">Правила</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">Вход</Button>
              <Button size="sm">Профиль</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                  <Icon name="Zap" size={14} className="mr-1" />
                  Быстрый обмен
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Обменивай игровые валюты 
                  <span className="text-blue-600 block">безопасно и быстро</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Первая в России платформа для обмена внутриигровых валют между популярными играми. 
                  Верифицированные аккаунты, честные курсы, мгновенные переводы.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Начать обмен
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Play" size={16} className="mr-2" />
                  Как это работает
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">1000+</div>
                  <div className="text-sm text-slate-500">Активных пользователей</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">5</div>
                  <div className="text-sm text-slate-500">Поддерживаемых игр</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">99.9%</div>
                  <div className="text-sm text-slate-500">Безопасность</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-xl opacity-20"></div>
              <img 
                src="/img/6fe4a658-7624-415b-9348-1c786adc868c.jpg" 
                alt="Gaming Exchange" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Калькулятор обмена</h2>
            <p className="text-lg text-slate-600">Узнай точную стоимость обмена в реальном времени</p>
          </div>
          
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Calculator" className="mr-2 text-blue-600" />
                Быстрый расчёт
              </CardTitle>
              <CardDescription>
                Выбери игры и сумму для обмена
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="from-game">Из игры</Label>
                  <Select value={fromGame} onValueChange={setFromGame}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выбери игру" />
                    </SelectTrigger>
                    <SelectContent>
                      {games.map(game => (
                        <SelectItem key={game.id} value={game.id}>
                          {game.name} ({game.currency})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="to-game">В игру</Label>
                  <Select value={toGame} onValueChange={setToGame}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выбери игру" />
                    </SelectTrigger>
                    <SelectContent>
                      {games.map(game => (
                        <SelectItem key={game.id} value={game.id}>
                          {game.name} ({game.currency})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="amount">Сумма для обмена</Label>
                <Input 
                  id="amount"
                  type="number"
                  placeholder="0"
                  value={exchangeAmount}
                  onChange={(e) => setExchangeAmount(e.target.value)}
                  className="text-lg"
                />
              </div>
              
              <div className="flex justify-center">
                <Icon name="ArrowDown" className="text-slate-400" size={24} />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-center">
                  <div className="text-sm text-slate-600 mb-1">Ты получишь</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {exchangeAmount && fromGame && toGame ? (Number(exchangeAmount) * 1.2).toFixed(2) : '0.00'}
                  </div>
                  <div className="text-sm text-slate-500">Курс: 1.20 (комиссия 2%)</div>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                <Icon name="Repeat" className="mr-2" size={16} />
                Создать заявку на обмен
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Exchange Rates */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Актуальные курсы</h2>
            <p className="text-lg text-slate-600">Отслеживай изменения курсов в реальном времени</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exchangeRates.map((rate, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">{rate.from}</div>
                    <Icon 
                      name={rate.trend === 'up' ? 'TrendingUp' : rate.trend === 'down' ? 'TrendingDown' : 'Minus'} 
                      className={`${rate.trend === 'up' ? 'text-green-500' : rate.trend === 'down' ? 'text-red-500' : 'text-slate-400'}`}
                      size={16}
                    />
                  </div>
                  <div className="text-lg font-semibold text-slate-900 mb-1">{rate.rate}</div>
                  <div className="text-sm text-slate-500">{rate.to}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Верификация аккаунта</h2>
            <p className="text-lg text-slate-600">Простой процесс для максимальной безопасности</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {verificationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon as any} className="text-blue-600" size={24} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white space-y-6">
            <Icon name="Shield" className="mx-auto text-white" size={48} />
            <h2 className="text-3xl font-bold">Безопасность превыше всего</h2>
            <p className="text-lg text-blue-100">
              Все транзакции проходят через систему эскроу, а аккаунты проверяются через официальные API игр
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Icon name="Lock" className="mx-auto text-white mb-2" size={24} />
                <div className="font-semibold">Шифрование</div>
                <div className="text-sm text-blue-100">SSL 256-bit</div>
              </div>
              <div className="text-center">
                <Icon name="CheckCircle" className="mx-auto text-white mb-2" size={24} />
                <div className="font-semibold">Верификация</div>
                <div className="text-sm text-blue-100">Официальные API</div>
              </div>
              <div className="text-center">
                <Icon name="Users" className="mx-auto text-white mb-2" size={24} />
                <div className="font-semibold">Поддержка</div>
                <div className="text-sm text-blue-100">24/7 онлайн</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Coins" size={24} />
                <span className="text-xl font-bold">GameSwap</span>
              </div>
              <p className="text-slate-400">
                Безопасный обмен игровых валют между популярными играми
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Курсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Как это работает</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Центр помощи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-slate-400">
                <li>support@gameswap.ru</li>
                <li>+7 (800) 123-45-67</li>
                <li>Telegram: @gameswap</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-slate-800" />
          <div className="flex justify-between items-center text-slate-400">
            <div>© 2024 GameSwap. Все права защищены.</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}