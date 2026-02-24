import { useState } from 'react';

export function useContadorDeTarefas(quantidadeInicial: number = 0) {
  const [contador, setContador] = useState(quantidadeInicial);

  const adicionarUm = () => setContador((prev) => prev + 1);

  return { contador, adicionarUm };
}