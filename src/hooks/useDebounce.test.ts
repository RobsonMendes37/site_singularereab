import { renderHook, waitFor } from '@testing-library/react';
import { useDebounce } from './useDebounce';

describe('useDebounce Hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const { result } = renderHook(() => 
      useDebounce('initial', 500)
    );

    expect(result.current).toBe('initial');
  });

  it('should debounce value changes', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'first', delay: 500 } }
    );

    expect(result.current).toBe('first');

    // Update value
    rerender({ value: 'second', delay: 500 });
    
    // Value should still be the old one
    expect(result.current).toBe('first');

    // Fast-forward time
    jest.advanceTimersByTime(500);

    // Now value should be updated
    await waitFor(() => {
      expect(result.current).toBe('second');
    });
  });

  it('should cancel previous timeout on rapid changes', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'first', delay: 500 } }
    );

    expect(result.current).toBe('first');

    // Rapid updates
    rerender({ value: 'second', delay: 500 });
    jest.advanceTimersByTime(200);
    
    rerender({ value: 'third', delay: 500 });
    jest.advanceTimersByTime(200);
    
    rerender({ value: 'fourth', delay: 500 });
    
    // Still should be first
    expect(result.current).toBe('first');

    // Complete the debounce time from last update
    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(result.current).toBe('fourth');
    });
  });

  it('should work with different delay times', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 1000 } }
    );

    rerender({ value: 'updated', delay: 1000 });
    
    jest.advanceTimersByTime(500);
    expect(result.current).toBe('initial');

    jest.advanceTimersByTime(500);
    
    await waitFor(() => {
      expect(result.current).toBe('updated');
    });
  });

  it('should handle number values', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 0, delay: 300 } }
    );

    expect(result.current).toBe(0);

    rerender({ value: 42, delay: 300 });
    jest.advanceTimersByTime(300);

    await waitFor(() => {
      expect(result.current).toBe(42);
    });
  });

  it('should handle boolean values', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: false, delay: 200 } }
    );

    expect(result.current).toBe(false);

    rerender({ value: true, delay: 200 });
    jest.advanceTimersByTime(200);

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });

  it('should handle object values', async () => {
    const obj1 = { name: 'first' };
    const obj2 = { name: 'second' };

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: obj1, delay: 300 } }
    );

    expect(result.current).toEqual(obj1);

    rerender({ value: obj2, delay: 300 });
    jest.advanceTimersByTime(300);

    await waitFor(() => {
      expect(result.current).toEqual(obj2);
    });
  });

  it('should handle array values', async () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: arr1, delay: 250 } }
    );

    expect(result.current).toEqual(arr1);

    rerender({ value: arr2, delay: 250 });
    jest.advanceTimersByTime(250);

    await waitFor(() => {
      expect(result.current).toEqual(arr2);
    });
  });

  it('should cleanup timeout on unmount', () => {
    const { unmount } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'test', delay: 500 } }
    );

    unmount();

    // Should not throw error
    jest.advanceTimersByTime(500);
  });

  it('should handle zero delay', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'first', delay: 0 } }
    );

    rerender({ value: 'second', delay: 0 });
    
    jest.advanceTimersByTime(0);

    await waitFor(() => {
      expect(result.current).toBe('second');
    });
  });
});

