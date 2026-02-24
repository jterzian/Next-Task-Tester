'use client';
import { useState } from 'react';
import NovaTarefa from '../components/NovaTarefa';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';
import { Tarefa } from '../types/tarefa';

export default function Home() {
  // Simulação de dados iniciais (como se viessem de uma API)
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    { id: 1, texto: 'Aprender Next.js 15' },
    { id: 2, texto: 'Configurar Jest' }
  ]);

  const { contador, adicionarUm } = useContadorDeTarefas(tarefas.length);

  const adicionarTarefa = (texto: string) => {
    const nova: Tarefa = { id: Date.now(), texto };
    setTarefas([...tarefas, nova]);
    adicionarUm(); // Atualiza o hook contador
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Minhas Tarefas ({contador})</h1>
      
      <NovaTarefa onAdicionar={adicionarTarefa} />

      <ul style={{ marginTop: '1rem' }}>
        {tarefas.map((t) => (
          <li key={t.id}>{t.texto}</li>
        ))}
      </ul>
    </main>
  );
}