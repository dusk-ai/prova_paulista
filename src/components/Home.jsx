import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function Home() {
  const subjects = [
    { name: 'Português', available: true, path: '/portugues' },
    { name: 'História', available: true, path: '/historia' },
    { name: 'Geografia', available: true, path: '/geografia' },
    { name: 'Matemática', available: false, path: '/matematica' },
    { name: 'Inglês', available: false, path: '/ingles' },
    { name: 'Ciências', available: false, path: '/ciencias' },
    { name: 'Tecnologia', available: false, path: '/tecnologia' },
    { name: 'Ed. Financeira', available: false, path: '/ed-financeira' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
          Bem-vindo à <span className="text-blue-600">Prova Paulista!</span>
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Selecione uma matéria para começar a estudar e prepare-se para o sucesso.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <Card
              key={subject.name}
              className={`transform transition-all duration-300 ease-in-out ${subject.available ? 'hover:scale-105 hover:shadow-xl' : 'opacity-70 cursor-not-allowed'}`}
            >
              <CardHeader className="text-center">
                <CardTitle className={`text-3xl font-bold ${subject.available ? 'text-blue-700' : 'text-gray-500'}`}>
                  {subject.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {subject.available ? (
                  <Link to={subject.path}>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg">
                      Começar a estudar
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="mt-4 bg-gray-300 text-gray-600 font-bold py-2 px-6 rounded-full cursor-not-allowed">
                    Em breve
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

