import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '../src/components/NovaTarefa';
import '@testing-library/jest-dom';

describe('Componente: NovaTarefa', () => {
  test('deve renderizar o input e o botão', () => {
    render(<NovaTarefa onAdicionar={() => {}} />);
    expect(screen.getByPlaceholderText(/Digite uma nova tarefa/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /adicionar/i })).toBeInTheDocument();
  });

  test('deve chamar onAdicionar e limpar o input ao enviar', () => {
    const mockAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={mockAdicionar} />);
    
    const input = screen.getByPlaceholderText(/Digite uma nova tarefa/i);
    const botao = screen.getByRole('button', { name: /adicionar/i });

    fireEvent.change(input, { target: { value: 'Estudar Testes' } });
    fireEvent.click(botao);

    expect(mockAdicionar).toHaveBeenCalledWith('Estudar Testes');
    expect(input).toHaveValue('');
  });
});