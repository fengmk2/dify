import { describe, expect, it } from 'vite-plus/test'
import { useDetailHeaderState, usePluginOperations } from '../index'

describe('detail-header hooks index', () => {
  it('re-exports hook entrypoints', () => {
    expect(useDetailHeaderState).toBeTypeOf('function')
    expect(usePluginOperations).toBeTypeOf('function')
  })
})
