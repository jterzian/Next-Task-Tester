import { renderHook, act } from '@testing-library/react';
import { useContadorDeTarefas } from '../src/hooks/useContadorDeTarefas';

describe('Hook: useContadorDeTarefas', () => {
  test('deve iniciar com o valor passado no argumento', () => {
    const { result } = renderHook(() => useContadorDeTarefas(10));
    expect(result.current.contador).toBe(10);
  });

  test('deve incrementar o valor corretamente', () => {
    const { result } = renderHook(() => useContadorDeTarefas(0));
    act(() => {
      result.current.adicionarUm();
    });
    expect(result.current.contador).toBe(1);
  });
});