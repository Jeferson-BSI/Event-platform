import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);

  const availableAtDateFormat = format(
    props.availableAt,
    "EEEE '•' d 'de' MMMM '•' k'h'mm",
    { locale: ptBR }
  );

  return (
    <Link className="group" to={`/event/lesson/${props.slug}`}>
      <span className="text-gray-300 ">{availableAtDateFormat}</span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex itens-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} /> Conteúdo liberado
            </span>
          ) : (
            <span className="flex itens-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} /> Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-withe border border-green-300 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  );
}
