import { act, renderHook } from '@testing-library/react';
import { useValue, useValueWithError } from 'src/hooks/ValueState/ValueState';

describe('useValue', () => {
  it('初期値が設定されている場合、その値が設定されていること', () => {
    const { result } = renderHook(() => useValue('aaa'));
    expect(result.current.value).toStrictEqual('aaa');
  });
});

describe('useValue::set', () => {
  it('値を設定した時に、その値で更新されること', () => {
    const { result } = renderHook(() => useValue('aaa'));
    expect(result.current.value).toStrictEqual('aaa');
    act(() => result.current.set('bbb'));
    expect(result.current.value).toStrictEqual('bbb');
  });
});

describe('useValueWithError', () => {
  it('初期値が設定されている場合、その値が設定されていること、エラーは空文字であること', () => {
    const { result } = renderHook(() => useValueWithError<string>('aaa'));
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('');
  });
  it('初期値とエラーが設定されている場合、その値が設定されていること', () => {
    const { result } = renderHook(() =>
      useValueWithError<string>('aaa', 'err')
    );
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('err');
  });
});

describe('useValueWithError::set', () => {
  it('設定値で値が更新されること', () => {
    const { result } = renderHook(() => useValueWithError<string>('aaa'));
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('');
    act(() => result.current.set('bbb'));
    expect(result.current.value).toStrictEqual('bbb');
    expect(result.current.error).toStrictEqual('');
  });
});

describe('useValueWithError::setError', () => {
  it('エラー未設定の時に設定値でエラーメッセージが更新されること', () => {
    const { result } = renderHook(() => useValueWithError<string>('aaa'));
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('');
    act(() => result.current.setError('err'));
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('err');
  });
  it('エラー設定済みの時に設定値でエラーメッセージが更新されること', () => {
    const { result } = renderHook(() =>
      useValueWithError<string>('aaa', 'bbb')
    );
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('bbb');
    act(() => result.current.setError('err'));
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('err');
  });
});

describe('useValueWithError::clearError', () => {
  it('エラー未設定の時にエラーメッセージが空文字のままであること', () => {
    const { result } = renderHook(() => useValueWithError<string>('aaa'));
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('');
    act(() => result.current.clearError());
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('');
  });
  it('エラー設定済みの時に空文字になること', () => {
    const { result } = renderHook(() =>
      useValueWithError<string>('aaa', 'bbb')
    );
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('bbb');
    act(() => result.current.clearError());
    expect(result.current.value).toStrictEqual('aaa');
    expect(result.current.error).toStrictEqual('');
  });
});
