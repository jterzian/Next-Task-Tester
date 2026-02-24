'use client';
import { useState } from 'react';

interface NovaTarefaProps {
  onAdicionar: (nome: string) => void;
}

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [texto, setTexto] = useState('');

  const lidarComEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (texto.trim()) {
      onAdicionar(texto);
      setTexto(''); // Limpa o campo após adicionar
    }
  };

  return (
    <form onSubmit={lidarComEnvio}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}