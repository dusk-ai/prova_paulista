import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function SubjectPage() {
  const { subjectName } = useParams();

  const getSubjectContent = (name) => {
    switch (name) {
      case 'portugues':
        return {
          title: 'Português',
          description: 'Resumo de Português para a Prova Paulista.',
          file: '/ProvaPaulista/Portugues/resumo_portugues.pdf',
        };
      case 'historia':
        return {
          title: 'História',
          description: 'Estudo resumido de História para a Prova Paulista.',
          file: '/ProvaPaulista/Historia/estudo_resumido.pdf',
        };
      case 'geografia':
        return {
          title: 'Geografia',
          description: 'Conteúdo de Geografia para a Prova Paulista.',
          file: null, // Placeholder, as no file was provided for Geography
        };
      case 'ciencias':
        return {
          title: 'Ciências',
          description: 'Resumo de Ciências para a Prova Paulista.',
          file: '/ProvaPaulista/Ciencias/resumo_ciencias.pdf',
        };
      default:
        return {
          title: 'Matéria Indisponível',
          description: 'Esta matéria ainda não está disponível para estudo.',
          file: null,
        };
    }
  };

  const subject = getSubjectContent(subjectName);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 shadow-lg rounded-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">
              {subject.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {subject.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {subject.file ? (
              <div className="flex justify-center mt-8">
                <iframe
                  src={subject.file}
                  width="100%"
                  height="600px"
                  style={{ border: 'none', borderRadius: '8px' }}
                  title={subject.title + ' Content'}
                ></iframe>
              </div>
            ) : (
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <p className="text-xl text-gray-700 font-semibold">Conteúdo em breve!</p>
                <p className="text-md text-gray-500 mt-2">Estamos trabalhando para disponibilizar esta matéria o mais rápido possível.</p>
              </div>
            )}
            <div className="mt-10">
              <Link to="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                  Voltar para a página inicial
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SubjectPage;

