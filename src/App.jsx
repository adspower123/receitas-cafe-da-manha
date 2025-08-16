import { Button } from '@/components/ui/button.jsx'
import { Check, Clock, Users, ChefHat, Utensils, BookOpen, Star } from 'lucide-react'
import './App.css'

// Importando as imagens
import img1 from './assets/1lABppnpWgXy.jpg'
import img2 from './assets/hEJ1WgqeBXus.jpg'
import img3 from './assets/Uio7bWqnehND.jpg'
import img4 from './assets/JhqZmbTfc7en.jpg'
import img5 from './assets/9CBeb4AhlA0S.jpg'
import img6 from './assets/RKbbFDeSPkgi.jpg'
import img7 from './assets/mnMJDNVBioKw.jpg'
import img8 from './assets/bzV7n1vAMK46.jpg'
import valenDeSouzaImg from './assets/BiancaChef.png'

function App() {
  const heroImages = [img1, img2, img3, img4, img5, img6, img7, img8]
  
  const recipes = [
    {
      title: "OMELETE PROTEICA DE FRIGIDEIRA",
      time: "8 MINUTOS",
      calories: "185 CALORIAS",
      image: img1
    },
    {
      title: "PANQUECA FIT DE AVEIA",
      time: "12 MINUTOS", 
      calories: "220 CALORIAS",
      image: img6
    },
    {
      title: "BOWL DE FRUTAS ENERGÉTICO",
      time: "5 MINUTOS",
      calories: "165 CALORIAS", 
      image: img3
    },
    {
      title: "TORRADA FRANCESA SAUDÁVEL",
      time: "10 MINUTOS",
      calories: "195 CALORIAS",
      image: img4
    },
    {
      title: "SMOOTHIE BOWL NUTRITIVO",
      time: "7 MINUTOS",
      calories: "175 CALORIAS",
      image: img2
    },
    {
      title: "TACOS DE CAFÉ DA MANHÃ",
      time: "15 MINUTOS",
      calories: "210 CALORIAS",
      image: img8
    }
  ]

  const benefits = [
    { icon: <Check className="w-5 h-5" />, text: "Receitas de até 300 calorias" },
    { icon: <Star className="w-5 h-5" />, text: "Com sabores deliciosos de verdade" },
    { icon: <Users className="w-5 h-5" />, text: "Com proteínas e vitaminas essenciais" },
    { icon: <Clock className="w-5 h-5" />, text: "Prontas em 15 minutos" },
    { icon: <Utensils className="w-5 h-5" />, text: "Com ingredientes comuns" },
    { icon: <ChefHat className="w-5 h-5" />, text: "Use apenas liquidificador e frigideira" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Passo a passo de preparo" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-900 to-amber-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
            150 CAFÉS DA MANHÃ
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="font-normal">de</span> NUTRI <span className="font-normal">(com sabor)</span>
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Receitas de baixas calorias criadas pela nutri Maria Silva, com sabor delicioso de verdade.
          </p>

          {/* Grid de Imagens */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {heroImages.map((img, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img 
                  src={img} 
                  alt={`Receita ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById("checkout-button").scrollIntoView({ behavior: "smooth" })}
          >
            QUERO AS RECEITAS!
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-stone-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O QUE VOCÊ
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            VAI ENCONTRAR:
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 text-left">
                <div className="text-green-600 flex-shrink-0">
                  {benefit.icon}
                </div>
                <span className="text-gray-700 text-lg">{benefit.text}</span>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById("checkout-button").scrollIntoView({ behavior: "smooth" })}
          >
            QUERO AS RECEITAS!
          </Button>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="bg-gradient-to-b from-amber-800 to-amber-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              VEJA O QUE VOCÊ
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              VAI APRENDER:
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <div key={index} className="bg-stone-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer" onClick={() => document.getElementById("checkout-button").scrollIntoView({ behavior: "smooth" })}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                    {recipe.title}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {recipe.time} / {recipe.calories}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              + 150 <span className="font-normal">OUTRAS</span>
            </h3>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-8">
              OPÇÕES DA NUTRI!
            </h4>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-stone-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            CARDÁPIO FEITO
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            PELA EXPERT VALEN DE SOUZA
          </h3>
          <div className="mb-8 mx-auto w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <img 
              src={valenDeSouzaImg} 
              alt="Valen de Souza"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Valen de Souza, especialista em culinária saudável e apaixonada por café da manhã, 
            criou mais de 150 receitas que vão transformar suas manhãs. Com anos de experiência 
            e dedicação, Valen desenvolveu um método único para criar pratos deliciosos, nutritivos 
            e que ficam prontos em até 15 minutos. Cada receita é pensada para oferecer o máximo de 
            sabor e praticidade, garantindo que você comece o dia com a energia e o bem-estar que merece.
          </p>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-gradient-to-b from-amber-800 to-amber-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            RECEBA AINDA
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
            + 3 bônus exclusivos:
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-stone-100 rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-2">BÔNUS 1:</h4>
              <h5 className="text-xl font-bold text-gray-800 mb-4">
                150 SOBREMESAS ZERO AÇÚCAR
              </h5>
              <p className="text-green-600 font-bold text-lg">
                <span className="line-through text-gray-500">R$29,00</span> HOJE É GRÁTIS!
              </p>
            </div>

            <div className="bg-stone-100 rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-2">BÔNUS 2:</h4>
              <h5 className="text-xl font-bold text-gray-800 mb-4">
                MARMITAS FIT P/ CONGELAR
              </h5>
              <p className="text-green-600 font-bold text-lg">
                <span className="line-through text-gray-500">R$15,00</span> HOJE É GRÁTIS!
              </p>
            </div>

            <div className="bg-stone-100 rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-2">BÔNUS 3:</h4>
              <h5 className="text-xl font-bold text-gray-800 mb-4">
                15 SUCOS DETOX
              </h5>
              <p className="text-green-600 font-bold text-lg">
                <span className="line-through text-gray-500">R$29,00</span> HOJE É GRÁTIS!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-stone-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            PARA PESSOAS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            QUE ENFRENTAM:
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Falta de opções saudáveis de café da manhã",
              "Dificuldade em perder peso e alimentar-se bem", 
              "Falta de receitas saborosas que nutrem",
              "Falta de receitas rápidas para o café da manhã",
              "Falta de nutrientes necessários para o dia"
            ].map((problem, index) => (
              <div key={index} className="flex items-center gap-4 text-left">
                <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">{problem}</span>
              </div>
            ))}
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            VEJA AS VANTAGENS
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Cardápio criado por uma nutricionista",
              "Mais de 150 opções saudáveis",
              "Baixíssimas em calorias",
              "Sabor novo todos os dias sem enjoar",
              "Feitas em menos de 15 minutos",
              "Não precisa de utensílios profissionais",
              "Nutrição completa pra começar o dia"
            ].map((advantage, index) => (
              <div key={index} className="flex items-center gap-4 text-left">
                <div className="text-green-600 flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-gray-700 text-lg">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-b from-amber-800 to-amber-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            150 CAFÉS DA MANHÃ DE NUTRI (COM SABOR)®
          </h2>

          <div className="bg-stone-100 rounded-lg p-8 mb-8 max-w-md mx-auto">
            <div className="mb-6">
              <p className="text-gray-600 mb-2">+ BOLOS SEM AÇÚCAR</p>
              <p className="text-gray-600 mb-2">+ PÃES SEM GLÚTEN</p>
              <p className="text-gray-600 mb-4">+ SALADAS E MOLHOS</p>
            </div>

            <div className="mb-6">
              <p className="text-2xl text-gray-500 line-through mb-2">De R$129,00...</p>
              <p className="text-lg text-gray-700 mb-2">por 5x de R$6,63</p>
              <p className="text-3xl font-bold text-green-600">ou R$29,90 à vista</p>
            </div>

            <p className="text-red-600 font-bold text-lg mb-6">
              **OFERTA EXPIRA HOJE**
            </p>

            <Button 
              id="checkout-button"
              size="lg" 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              QUERO AS RECEITAS AGORA!
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-stone-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Satisfação GARANTIDA
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            E risco zero!
          </h3>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Se você adquirir esse produto e por algum motivo não se sentir satisfeito, 
            por um prazo de até 7 dias, devolvemos o seu dinheiro.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Compra 100% segura",
              "7 dias de garantia", 
              "Reembolso garantido",
              "Qualidade garantida"
            ].map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2 justify-center">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

