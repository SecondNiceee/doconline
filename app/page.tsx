"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Clock,
  Download,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Send,
  Handshake,
  Car,
  Building,
  Home,
  Heart,
  DollarSign,
  Package,
  Warehouse,
  Gift,
  CreditCard,
  Key,
  FileCheck,
  PenTool,
  Mail,
  User,
  UserCheck,
  Plane,
  ShoppingCart,
  Briefcase,
  Calendar,
  Calculator,
  Building2,
  Siren,
  Scale,
  FileX,
  AlertTriangle,
  HelpCircle,
  Award,
  MessageCircle,
  Headphones,
} from "lucide-react"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  const documentTypes = [
    {
      name: "Агентский договор на юридические действия",
      icon: <Handshake className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Агентский договор на поиск покупателей",
      icon: <Users className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Акт приёма-передачи имущества в залог",
      icon: <Shield className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Акт приёма-передачи имущества",
      icon: <Package className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Брачный договор",
      icon: <Heart className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор аренды автомобиля",
      icon: <Car className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор аренды нежилого помещения",
      icon: <Building className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор аренды квартиры",
      icon: <Home className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор дарения квартиры",
      icon: <Gift className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор займа между физическими лицами",
      icon: <DollarSign className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор найма квартиры",
      icon: <Key className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор мены квартиры",
      icon: <ArrowRight className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор поставки товара",
      icon: <Package className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор комиссии на реализацию товара",
      icon: <ShoppingCart className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор купли-продажи жилого помещения",
      icon: <CreditCard className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Договор хранения имущества",
      icon: <Warehouse className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Доверенность",
      icon: <FileCheck className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Объяснительная записка",
      icon: <PenTool className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Расписка заёмщика о получении займа",
      icon: <FileText className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Рекомендательное письмо",
      icon: <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    { name: "Резюме", icon: <User className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" /> },
    {
      name: "Согласие на обработку персональных данных",
      icon: <UserCheck className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Согласие на выезд ребёнка",
      icon: <Plane className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Сопроводительное письмо",
      icon: <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Претензия по возврату товара",
      icon: <FileX className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Заявление на увольнение",
      icon: <Briefcase className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Заявление на отпуск",
      icon: <Calendar className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Заявление на перерасчёт ЖКХ",
      icon: <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Заявление о приёме на работу",
      icon: <UserCheck className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Заявление об отказе от вакцинации",
      icon: <Shield className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Заявление о мошенничестве",
      icon: <AlertTriangle className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Заявление в полицию",
      icon: <Siren className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Исковое заявление в суд",
      icon: <Scale className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Заявление в прокуратуру",
      icon: <Building2 className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Жалоба в ЖКХ",
      icon: <HelpCircle className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Жалоба в ТСЖ",
      icon: <Building className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Жалоба в УК",
      icon: <AlertTriangle className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
    {
      name: "Характеристика с места работы",
      icon: <Award className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />,
    },
  ]

  const advantages = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Быстрое создание",
      description: "Создание документов за 3-5 минут без необходимости посещения юриста",
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Разные форматы",
      description: "Генерация документов в форматах PDF и Word для удобства использования",
    },
    {
      icon: <Send className="h-8 w-8" />,
      title: "Удобство Telegram",
      description: "Легкость и удобство в использовании через знакомый мессенджер",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Актуальные шаблоны",
      description: "Регулярно обновляемая база документов, соответствующих законодательству",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Перейдите в Telegram-бота",
      description: 'Нажмите на любую кнопку с документом или кнопку "Перейти в Telegram"',
    },
    {
      number: "02",
      title: "Выберите тип документа",
      description: "В боте выберите категорию и тип документа, который вам нужен",
    },
    {
      number: "03",
      title: "Заполните форму",
      description: "Введите необходимые данные: ФИО, даты, адреса и другую информацию",
    },
    {
      number: "04",
      title: "Получите документ",
      description: "Документ будет сгенерирован в формате PDF или Word",
    },
    {
      number: "05",
      title: "Скачайте и используйте",
      description: "Скачайте документ и используйте его по назначению",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 grid-pattern opacity-30" />

      {/* Header */}
      <header className="relative border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                <span className="text-lg sm:text-2xl font-bold">@Doconline24_bot</span>
              </div>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <a href="https://t.me/Doconline24_bot" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-4 w-4" />
                Перейти в телеграм
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground mt-2 text-sm sm:text-lg">
            Профессиональный генератор документов с актуальными шаблонами
          </p>
        </div>
      </header>

      {/* Hero Section - темная с улучшенным фоном */}
      <section className="relative py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2">
            <Zap className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Создание за 3-5 минут
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-balance leading-tight max-w-[950px] mx-auto">
            Создавайте документы с <span className="text-primary">актуальными шаблонами</span> за 3-5 минут
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto text-pretty px-2">
            Профессиональный генератор документов @Doconline24_bot с постоянно обновляемой базой шаблонов через
            Telegram-бота
          </p>

          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto"
          >
            <a href="https://t.me/Doconline24_bot" target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Начать создание документа
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* About Section - светлая */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/50 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-slate-100">
              О сервисе
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed px-2">
              Бот @Doconline24_bot — это профессиональный сервис для создания юридических и формальных документов с
              использованием актуальных шаблонов. Используя бота, вы можете создать заявления, договоры, резюме,
              доверенности, жалобы и другие документы, соответствующие текущему законодательству, всего за 3-5 минут в
              форматах PDF и Word.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section - светлая */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 opacity-0 translate-y-8 transition-all duration-700 ease-out relative overflow-hidden"
      >
        {/* Декоративные элементы и улучшенный фон */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.08),transparent_70%)]" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-2xl animate-pulse-slow" />
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-900 dark:text-blue-100">
              Как это работает?
            </h2>
            <p className="text-base sm:text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              Простой процесс создания документов всего в 5 шагов
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Карточка шага */}
                  <Card className="border-2 border-blue-200/50 dark:border-blue-800/50 bg-white/90 dark:bg-blue-900/30 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-6 sm:p-8 relative z-10">
                      <div className="flex items-start space-x-4">
                        {/* Номер шага */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white dark:border-slate-900 group-hover:scale-110 transition-transform duration-300">
                            {step.number}
                          </div>
                        </div>

                        <div className="min-w-0 flex-1">
                          {/* Иконка для каждого шага */}
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800/30 dark:to-purple-800/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              <Send className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>

                          <p className="text-sm sm:text-base text-blue-700 dark:text-blue-200 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Призыв к действию в конце секции */}
            <div className="text-center mt-12 sm:mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Готовы начать?</h3>
                <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                  Создайте свой первый документ прямо сейчас!
                </p>
                <Button
                  asChild
                  className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <a href="https://t.me/Doconline24_bot" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-5 w-5" />
                    Перейти в Telegram
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Types Section - темная с улучшенным фоном */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 opacity-0 translate-y-8 transition-all duration-700 ease-out overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(139,92,246,0.03),transparent)]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Актуальные шаблоны документов</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              Все шаблоны регулярно обновляются и соответствуют текущим требованиям законодательства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-3 sm:gap-4">
            {documentTypes.map((docType, index) => (
              <Button
                key={index}
                variant="outline"
                asChild
                className="h-auto p-3 sm:p-4 text-left justify-start hover:bg-white/90 dark:hover:bg-slate-100/10 transition-all duration-300 hover:scale-105 bg-white dark:bg-slate-100/5 border-white/20 dark:border-slate-100/20 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100"
              >
                <a href="https://t.me/Doconline24_bot" target="_blank" rel="noopener noreferrer">
                  {docType.icon}
                  <span className="text-xs sm:text-sm leading-relaxed">{docType.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - темная с улучшенным фоном */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-indigo-900/10 to-slate-900 opacity-0 translate-y-8 transition-all duration-700 ease-out overflow-hidden"
      >
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.05)_60deg,transparent_120deg)]" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl animate-pulse-slow" />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0 bg-noise-pattern opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Преимущества</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="text-primary mb-4 flex justify-center transform hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{advantage.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - светлая */}
      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-cyan-950/30 opacity-0 translate-y-8 transition-all duration-700 ease-out relative overflow-hidden"
      >
        {/* Декоративные элементы и улучшенный градиентный фон */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(6,182,212,0.08),transparent_70%)]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full blur-2xl animate-pulse-slow" />
        <div
          className="absolute bottom-10 left-10 w-40 h-40 bg-teal-200/30 dark:bg-teal-800/20 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-lg rotate-45 blur-xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-gradient-to-tl from-emerald-400/20 to-teal-500/20 rounded-full blur-lg animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-emerald-900 dark:text-emerald-100">
              Наши контакты
            </h2>
            <p className="text-base sm:text-lg text-emerald-700 dark:text-emerald-300 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом или присоединяйтесь к нашему сообществу
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Telegram Bot */}
              <a href="https://t.me/Doconline24_bot" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="text-center border-emerald-200/50 dark:border-emerald-800/50 bg-white/90 dark:bg-emerald-900/20 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 group overflow-hidden relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/20 dark:to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 sm:p-8 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Send className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-emerald-900 dark:text-emerald-100">Telegram Бот</h3>
                    <p className="text-sm text-emerald-700 dark:text-emerald-200 mb-6 leading-relaxed">
                      Создавайте документы прямо в боте быстро и удобно
                    </p>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      @Doconline24_bot
                    </Button>
                  </CardContent>
                </Card>
              </a>

              {/* Telegram Group */}
              <a href="https://t.me/documentonline24bot" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="text-center border-emerald-200/50 dark:border-emerald-800/50 bg-white/90 dark:bg-emerald-900/20 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 group overflow-hidden relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/20 dark:to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 sm:p-8 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-emerald-900 dark:text-emerald-100">Telegram Группа</h3>
                    <p className="text-sm text-emerald-700 dark:text-emerald-200 mb-6 leading-relaxed">
                      Присоединяйтесь к сообществу пользователей и получайте поддержку
                    </p>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white w-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <Users className="mr-2 h-4 w-4" />
                      Присоединиться
                    </Button>
                  </CardContent>
                </Card>
              </a>

              {/* Email Support */}
              <a href="mailto:amir.gus@yandex.ru" className="block">
                <Card className="text-center border-emerald-200/50 dark:border-emerald-800/50 bg-white/90 dark:bg-emerald-900/20 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 group overflow-hidden relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/20 dark:to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 sm:p-8 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-emerald-900 dark:text-emerald-100">Email Поддержка</h3>
                    <p className="text-sm text-emerald-700 dark:text-emerald-200 mb-6 leading-relaxed">
                      Напишите нам для получения персональной помощи
                    </p>
                    <Button
                      variant="outline"
                      className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/30 w-full bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      amir.gus@yandex.ru
                    </Button>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div className="mt-12 lg:mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Headphones className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-2">24/7 Поддержка</h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">Мы всегда готовы помочь</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Быстрый Ответ</h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">Ответ в течение часа</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Безопасность</h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">Ваши данные защищены</p>
                </div>
              </div>
            </div>
          </div>

          {/* Призыв к действию в конце секции контактов */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)] animate-pulse-slow"></div>
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_70%)] animate-pulse-slow"
                style={{ animationDelay: "2s" }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Нужна помощь?</h3>
                <p className="text-emerald-100 mb-6 text-lg max-w-2xl mx-auto">
                  Наша команда поддержки готова помочь вам с любыми вопросами по созданию документов
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <a href="https://t.me/Doconline24_bot" target="_blank" rel="noopener noreferrer">
                      <Send className="mr-2 h-5 w-5" />
                      Начать в боте
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <a href="https://t.me/documentonline24bot" target="_blank" rel="noopener noreferrer">
                      <Users className="mr-2 h-5 w-5" />
                      Присоединиться к группе
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - темная с улучшенным фоном */}
      <footer className="relative border-t border-border/50 py-6 sm:py-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(139,92,246,0.05),transparent)]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-sm sm:text-base text-muted-foreground">© 2025 Бот @Doconline24_bot. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
