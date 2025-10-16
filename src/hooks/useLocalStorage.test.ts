import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Clear all mocks
    jest.clearAllMocks();
  });

  it('should initialize with initial value when localStorage is empty', () => {
    const { result } = renderHook(() => 
      useLocalStorage('test-key', 'initial-value')
    );

    expect(result.current[0]).toBe('initial-value');
  });

  it('should initialize with value from localStorage if it exists', () => {
    localStorage.setItem('test-key', JSON.stringify('stored-value'));

    const { result } = renderHook(() => 
      useLocalStorage('test-key', 'initial-value')
    );

    expect(result.current[0]).toBe('stored-value');
  });

  it('should update localStorage when value changes', () => {
    const { result } = renderHook(() => 
      useLocalStorage('test-key', 'initial')
    );

    act(() => {
      result.current[1]('updated');
    });

    expect(result.current[0]).toBe('updated');
    expect(localStorage.getItem('test-key')).toBe(JSON.stringify('updated'));
  });

  it('should handle complex objects', () => {
    const initialObject = { name: 'Test', age: 30 };
    const updatedObject = { name: 'Updated', age: 35 };

    const { result } = renderHook(() => 
      useLocalStorage('test-object', initialObject)
    );

    expect(result.current[0]).toEqual(initialObject);

    act(() => {
      result.current[1](updatedObject);
    });

    expect(result.current[0]).toEqual(updatedObject);
    expect(JSON.parse(localStorage.getItem('test-object') || '{}')).toEqual(updatedObject);
  });

  it('should handle arrays', () => {
    const initialArray = [1, 2, 3];
    const updatedArray = [1, 2, 3, 4, 5];

    const { result } = renderHook(() => 
      useLocalStorage('test-array', initialArray)
    );

    expect(result.current[0]).toEqual(initialArray);

    act(() => {
      result.current[1](updatedArray);
    });

    expect(result.current[0]).toEqual(updatedArray);
    expect(JSON.parse(localStorage.getItem('test-array') || '[]')).toEqual(updatedArray);
  });

  it('should handle boolean values', () => {
    const { result } = renderHook(() => 
      useLocalStorage('test-boolean', false)
    );

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toBe(true);
    expect(localStorage.getItem('test-boolean')).toBe('true');
  });

  it('should handle number values', () => {
    const { result } = renderHook(() => 
      useLocalStorage('test-number', 0)
    );

    expect(result.current[0]).toBe(0);

    act(() => {
      result.current[1](42);
    });

    expect(result.current[0]).toBe(42);
    expect(localStorage.getItem('test-number')).toBe('42');
  });

  it('should handle function updater', () => {
    const { result } = renderHook(() => 
      useLocalStorage('test-counter', 0)
    );

    act(() => {
      result.current[1](prev => prev + 1);
    });

    expect(result.current[0]).toBe(1);

    act(() => {
      result.current[1](prev => prev + 1);
    });

    expect(result.current[0]).toBe(2);
  });

  it('should handle invalid JSON in localStorage gracefully', () => {
    localStorage.setItem('test-key', 'invalid-json{');

    const { result } = renderHook(() => 
      useLocalStorage('test-key', 'fallback')
    );

    // Should use initial value when JSON parse fails
    expect(result.current[0]).toBe('fallback');
  });

  it('should handle null values', () => {
    const { result } = renderHook(() => 
      useLocalStorage<string | null>('test-null', null)
    );

    expect(result.current[0]).toBe(null);

    act(() => {
      result.current[1]('not-null');
    });

    expect(result.current[0]).toBe('not-null');
  });

  it('should synchronize across multiple hook instances with same key', () => {
    const { result: result1 } = renderHook(() => 
      useLocalStorage('shared-key', 'initial')
    );
    const { result: result2 } = renderHook(() => 
      useLocalStorage('shared-key', 'initial')
    );

    expect(result1.current[0]).toBe('initial');
    expect(result2.current[0]).toBe('initial');

    act(() => {
      result1.current[1]('updated');
    });

    // Both should have the updated value
    expect(result1.current[0]).toBe('updated');
    expect(localStorage.getItem('shared-key')).toBe(JSON.stringify('updated'));
  });

  it('should handle rapid updates', () => {
    const { result } = renderHook(() => 
      useLocalStorage('test-rapid', 0)
    );

    act(() => {
      for (let i = 1; i <= 100; i++) {
        result.current[1](i);
      }
    });

    expect(result.current[0]).toBe(100);
    expect(localStorage.getItem('test-rapid')).toBe('100');
  });
});

